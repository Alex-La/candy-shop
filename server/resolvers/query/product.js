module.exports.product = async (vendorCode, dataSources) => {
  const product = await dataSources.productsAPI.getProduct({ vendorCode });

  let refetchRequire = false;

  if (!product) {
    refetchRequire = true;
  }

  let color = [];
  let size = [];

  for (let i in product) {
    if (color.indexOf(product[i].color) === -1) color.push(product[i].color);
    if (size.indexOf(product[i].size) === -1) size.push(product[i].size);
  }

  prod = product[0];
  prod["color"] = color;
  prod["size"] = size;

  return {
    refetch_require: refetchRequire,
    product: prod,
  };
};
