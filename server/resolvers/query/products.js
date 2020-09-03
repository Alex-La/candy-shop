const { paginateResults, resultsFilter } = require("../../utils");

module.exports.products = async (queryData, dataSources) => {
  const {
    pageSize = 12,
    after,
    main,
    subsection,
    orderBy = "",
    priceRange = [],
  } = queryData;

  let data = [];
  if (main) data = await dataSources.productsAPI.getProductsByMain({ main });
  if (subsection)
    data = await dataSources.productsAPI.getProductsBySubsection({
      subsection,
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

  console.log(paginatedData);

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
