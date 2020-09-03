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
  const photo = [];
  photo.push(product[0]["photo_one"]);
  photo.push(product[0]["photo_two"]);
  photo.push(product[0]["photo_three"]);
  photo.push(product[0]["photo_four"]);
  photo.push(product[0]["photo_five"]);
  prod["photos"] = photo;

  return {
    refetch_require: refetchRequire,
    product: prod,
  };
};
