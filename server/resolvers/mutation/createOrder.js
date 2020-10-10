const parseString = require("xml2js").parseString;
const http = require("http");

function xmlToJson(url, callback) {
    http.get(url, (res) => {
      var xml = '';
      
      res.on('data', (chunk) => {
        xml += chunk;
      });
  
      res.on('error', (e) => {
        callback(e, null);
      }); 
  
      res.on('timeout', (e) => {
        callback(e, null);
      }); 
  
      res.on('end', () => {
        parseString(xml, (_, result) => {
          callback(null, result);
        });
      });
    });
  }

module.exports.createOrder = async ({ data, dataSources }) => {
    let url = "http://api.ds-platforma.ru/ds_order.php?ApiKey=5f7b1f51d022d0.27256421&TestMode=1";
    // const {     
    //     order,
    //     ExtOrderID,
    //     ExtOrderPaid,
    //     ExtDeliveryCost,
    //     dsDelivery,
    //     dsFio,
    //     dsMobPhone,
    //     dsEmail,
    //     dsCity,
    //     dsPickUpId,
    //     dsPostcode,
    //     dsCountry,
    //     dsArea,
    //     dsStreet,
    //     dsHouse,
    //     dsFlat,
    //     dsDeliveryDate,
    //     dsComments,
    //  } = data;

    url += "&order=" + data.order.join(",");

    const orders = await dataSources.shopAPI.getOrders();
    if (orders.length === 0) {
        url += "&ExtOrderID=" + "1";
    } else {
        url += "&ExtOrderID=" + (orders.length + 1);
    }

    url += "&ExtOrderPaid=" + data.ExtOrderPaid;
    url += "&ExtDeliveryCost=" + data.ExtDeliveryCost;
    url += "&dsDelivery=" + data.dsDelivery;
    url += "&dsFio=" + data.dsFio.join("_");
    url += "&dsMobPhone=" + data.dsMobPhone;
    url += "&dsEmail=" + data.dsEmail;
    url += "&dsCity=" + data.dsCity;

    if (data.dsPickUpId) url += "&dsPickUpId=" + data.dsPickUpId;
    if (data.dsPostcode) url += "&dsPostcode=" + data.dsPostcode;
    if (data.dsCountry) url += "&dsCountry=" + data.dsCountry;
    if (data.dsArea) url += "&dsArea=" + data.dsArea;
    if (data.dsStreet) url += "&dsStreet=" + data.dsStreet;
    if (data.dsHouse) url += "&dsHouse=" + data.dsHouse;
    if (data.dsFlat) url += "&dsFlat=" + data.dsFlat;
    if (data.dsDeliveryDate) url += "&dsDeliveryDate=" + data.dsDeliveryDate;
    if (data.dsComments) url += "&dsComments=" + data.dsComments;


    console.log(url);


     const res = await new Promise((resolve) => xmlToJson(url, (err, data) => {
        if (err) return console.err(err); 
        resolve(data);
      })); 

      console.log(res.Result);

     return res.Result;
};