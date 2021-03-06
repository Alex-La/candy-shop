const {
  paginateResults,
  resultsFilter,
  toUniqueArray,
} = require("../../utils");

module.exports.products = async (queryData, dataSources) => {
  const {
    filter,
    sale,
    pageSize = 12,
    after,
    main,
    subsection,
    orderBy = "",
    priceRange = [],
    manufacturers,
  } = queryData;

  let data = [];

  if (main && !subsection && !manufacturers)
    data = await dataSources.productsAPI.getProductsByMain({ main, filter });

  if (main && subsection && !manufacturers)
    data = await dataSources.productsAPI.getProductsByMainAndSubsection({
      main,
      subsection,
      filter,
    });

  if (!main && subsection && !manufacturers)
    data = await dataSources.productsAPI.getProductsBySubsection({
      subsection,
      filter,
    });

  if (!main && !subsection && manufacturers)
    data = await dataSources.productsAPI.getProductsByManufacturer({
      manufacturers,
      filter,
    });

  if (main && !subsection && manufacturers)
    data = await dataSources.productsAPI.getProductsByManufacturerAndMain({
      manufacturers,
      main,
      filter,
    });

  if (!main && !subsection && !manufacturers)
    if (!sale) data = await dataSources.productsAPI.getProducts(filter);

  if (sale) data = await dataSources.productsAPI.getSaleProducts({ filter });

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
