const { xmlToJson } = require("../../utils");

module.exports.getOrdersByEmail = async ({ user, dataSources }) => {
    if (!user) return null;
    const orders = await dataSources.shopAPI.getOrders({ email: user.email });
    if (!orders) return null;

    let url = "http://api.ds-platforma.ru/ds_get_order_data.php?ApiKey=5f7b1f51d022d0.27256421&orderID=";

    const ids = [];
    for (let i in orders)
        ids.push(orders[i].order_id);
    url += ids.join(",");

    const res = await new Promise((resolve) =>
        xmlToJson(url, (err, data) => {
            if (err) return console.err(err);
            resolve(data);
        }));

    return res.Result;
}