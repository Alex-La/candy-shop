const {
  paginateResults,
  resultsFilter,
  toUniqueArray,
} = require("../../utils");

module.exports.searchProducts = async (dat, dataSources) => {
  const { name, pageSize = 12, after, orderBy = "", priceRange = [] } = dat;

  let searchName = "";
  let category = null;

  if (name.indexOf(">") === -1) {
    searchName = name;
  } else {
    searchName = name.substring(0, name.indexOf(">") - 2);
    category = name.substring(name.indexOf(">") + 2, name.length);
  }

  let data = await dataSources.productsAPI.searchProducts({
    searchName,
    category,
  });

  if (!data) {
    return {
      cursor: null,
      hasMore: false,
      price_range: [],
      refetch_require: true,
      products: [],
    };
  }

  data.reverse();
  data = toUniqueArray(data);

  const priceArray = [];
  for (let i in data) {
    priceArray.push(parseFloat(data[i].price_retail));
  }

  const priceRangeArray =
    priceArray.length !== 0
      ? [
          priceArray.reduce((a, b) => Math.min(a, b)),
          priceArray.reduce((a, b) => Math.max(a, b)),
        ]
      : [];

  resultsFilter({
    orderBy,
    results: data,
  });

  const priceFiltData =
    priceRange.length !== 0
      ? data.filter(
          (val) =>
            parseFloat(val.price_retail) >= priceRange[0] &&
            parseFloat(val.price_retail) <= priceRange[1]
        )
      : data;

  const paginatedData = paginateResults({
    after,
    pageSize,
    results: priceFiltData,
  });

  for (let i in paginatedData) {
    const photo = [];
    photo.push(paginatedData[i]["photo_one"]);
    photo.push(paginatedData[i]["photo_two"]);
    photo.push(paginatedData[i]["photo_three"]);
    photo.push(paginatedData[i]["photo_four"]);
    photo.push(paginatedData[i]["photo_five"]);
    paginatedData[i].photos = photo;
  }

  return {
    cursor: paginatedData.length
      ? paginatedData[paginatedData.length - 1].aid
      : null,
    hasMore: paginatedData.length
      ? paginatedData[paginatedData.length - 1].aid !==
        data[data.length - 1].aid
      : false,
    price_range: priceRangeArray,
    refetch_require: false,
    products: paginatedData,
  };
};
