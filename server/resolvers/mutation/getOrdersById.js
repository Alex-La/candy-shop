const { xmlToJson } = require("../../utils");

module.exports.getOrdersById = async ({ id }) => {
  const url = `http://api.ds-platforma.ru/ds_get_order_data.php?ApiKey=5f7b1f51d022d0.27256421&orderID=${id}`;

  const res = await new Promise((resolve) =>
    xmlToJson(url, (err, data) => {
      if (err) return console.err(err);
      resolve(data);
    }));

  return res.Result;
}