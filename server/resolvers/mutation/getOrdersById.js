const parseString = require("xml2js").parseString;
const http = require("http");

function xmlToJson(url, callback) {
    http.get(url, (res) => {
      var xml = "";
  
      res.on("data", (chunk) => {
        xml += chunk;
      });
  
      res.on("error", (e) => {
        callback(e, null);
      });
  
      res.on("timeout", (e) => {
        callback(e, null);
      });
  
      res.on("end", () => {
        parseString(xml, (_, result) => {
          callback(null, result);
        });
      });
    });
  }

module.exports.getOrdersById = async ({ id }) => {
    const url = `http://api.ds-platforma.ru/ds_get_order_data.php?ApiKey=5f7b1f51d022d0.27256421&orderID=${id}`;

    const res = await new Promise((resolve) =>
    xmlToJson(url, (err, data) => {
      if (err) return console.err(err);
      resolve(data);
    }));

    console.log(res.Result);
    return res.Result;
}