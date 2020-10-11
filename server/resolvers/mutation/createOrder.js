const parseString = require("xml2js").parseString;
const http = require("http");
const nodemailer = require("nodemailer");

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

module.exports.createOrder = async ({ data, dataSources }) => {
  let url =
    "http://api.ds-platforma.ru/ds_order.php?ApiKey=5f7b1f51d022d0.27256421&TestMode=1";

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

  const res = await new Promise((resolve) =>
    xmlToJson(url, (err, data) => {
      if (err) return console.err(err);
      resolve(data);
    })
  );

  if (res.Result.ResultStatus[0] === "1") {
    await dataSources.shopAPI.createOrder({
      order_id: res.Result.orderID[0],
      order_items: res.Result.OrderItems[0],
      ext_delivery_cost: res.Result.ExtDeliveryCost[0],
      email: data.dsEmail,
    });

    await sendEmail(res.Result.orderID[0], data.dsEmail);
  }

  return res.Result;
};

const sendEmail = async (order_id, email) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.mail.ru",
    port: 465,
    secure: true,
    auth: {
      user: "sexshop@candy-shop.su",
      pass: "qwe123ewq321",
    },
  });

  let info = await transporter.sendMail({
    from: "sexshop@candy-shop.su",
    to: email,
    subject: "Заказ оформлен! ✔",
    text: "Ваш заказ в скором времени будет отправлен!",
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
      <head>
      <!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
      <meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
      <meta content="width=device-width" name="viewport"/>
      <!--[if !mso]><!-->
      <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
      <!--<![endif]-->
      <title></title>
      <!--[if !mso]><!-->
      <!--<![endif]-->
      <style type="text/css">
              body {
                  margin: 0;
                  padding: 0;
              }
      
              table,
              td,
              tr {
                  vertical-align: top;
                  border-collapse: collapse;
              }
      
              * {
                  line-height: inherit;
              }
      
              a[x-apple-data-detectors=true] {
                  color: inherit !important;
                  text-decoration: none !important;
              }
          </style>
      <style id="media-query" type="text/css">
              @media (max-width: 500px) {
      
                  .block-grid,
                  .col {
                      min-width: 320px !important;
                      max-width: 100% !important;
                      display: block !important;
                  }
      
                  .block-grid {
                      width: 100% !important;
                  }
      
                  .col {
                      width: 100% !important;
                  }
      
                  .col>div {
                      margin: 0 auto;
                  }
      
                  img.fullwidth,
                  img.fullwidthOnMobile {
                      max-width: 100% !important;
                  }
      
                  .no-stack .col {
                      min-width: 0 !important;
                      display: table-cell !important;
                  }
      
                  .no-stack.two-up .col {
                      width: 50% !important;
                  }
      
                  .no-stack .col.num4 {
                      width: 33% !important;
                  }
      
                  .no-stack .col.num8 {
                      width: 66% !important;
                  }
      
                  .no-stack .col.num4 {
                      width: 33% !important;
                  }
      
                  .no-stack .col.num3 {
                      width: 25% !important;
                  }
      
                  .no-stack .col.num6 {
                      width: 50% !important;
                  }
      
                  .no-stack .col.num9 {
                      width: 75% !important;
                  }
      
                  .video-block {
                      max-width: none !important;
                  }
      
                  .mobile_hide {
                      min-height: 0px;
                      max-height: 0px;
                      max-width: 0px;
                      display: none;
                      overflow: hidden;
                      font-size: 0px;
                  }
      
                  .desktop_hide {
                      display: block !important;
                      max-height: none !important;
                  }
              }
          </style>
      </head>
      <body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #FFFFFF;">
      <!--[if IE]><div class="ie-browser"><![endif]-->
      <table bgcolor="#FFFFFF" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="table-layout: fixed; vertical-align: top; min-width: 320px; Margin: 0 auto; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #FFFFFF; width: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td style="word-break: break-word; vertical-align: top;" valign="top">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#FFFFFF"><![endif]-->
      <div style="background-color:transparent;">
      <div class="block-grid" style="Margin: 0 auto; min-width: 320px; max-width: 480px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:480px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="480" style="background-color:transparent;width:480px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
      <div class="col num12" style="min-width: 320px; max-width: 480px; display: table-cell; vertical-align: top; width: 480px;">
      <div style="width:100% !important;">
      <!--[if (!mso)&(!IE)]><!-->
      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
      <!--<![endif]-->
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; font-family: Georgia, 'Times New Roman', serif"><![endif]-->
      <div style="color:#555555;font-family:Georgia, Times, 'Times New Roman', serif;line-height:1.2;padding-top:30px;padding-right:30px;padding-bottom:30px;padding-left:30px;">
      <div style="line-height: 1.2; font-size: 12px; color: #555555; font-family: Georgia, Times, 'Times New Roman', serif; mso-line-height-alt: 14px;">
      <p style="text-align: center; line-height: 1.2; word-break: break-word; font-size: 80px; mso-line-height-alt: 96px; margin: 0;"><span style="font-size: 80px;">Candy <span style="color: #ff0000;">Shop</span></span></p>
      </div>
      </div>
      <!--[if mso]></td></tr></table><![endif]-->
      <table border="0" cellpadding="0" cellspacing="0" class="divider" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
      <table align="center" border="0" cellpadding="0" cellspacing="0" class="divider_content" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #BBBBBB; width: 100%;" valign="top" width="100%">
      <tbody>
      <tr style="vertical-align: top;" valign="top">
      <td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
      </tr>
      </tbody>
      </table>
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 30px; padding-left: 30px; padding-top: 30px; padding-bottom: 30px; font-family: Georgia, 'Times New Roman', serif"><![endif]-->
      <div style="color:#555555;font-family:Georgia, Times, 'Times New Roman', serif;line-height:1.2;padding-top:30px;padding-right:30px;padding-bottom:30px;padding-left:30px;">
      <div style="line-height: 1.2; font-size: 12px; font-family: Georgia, Times, 'Times New Roman', serif; color: #555555; mso-line-height-alt: 14px;">
      <p style="font-size: 22px; line-height: 1.2; text-align: center; font-family: Georgia, Times, 'Times New Roman', serif; word-break: break-word; mso-line-height-alt: 26px; margin: 0;"><span style="font-size: 22px;">Привет! Ваш заказ размещен и в скором времени будет доставдлен! Вы можете отследить его по номеру заказа в личном кабинете или, перейдя по ссылке в корзине.</span></p>
      </div>
      </div>
      <!--[if mso]></td></tr></table><![endif]-->
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top: 60px; padding-bottom: 60px; font-family: Georgia, 'Times New Roman', serif"><![endif]-->
      <div style="color:#000000;font-family:Georgia, Times, 'Times New Roman', serif;line-height:1.2;padding-top:60px;padding-right:10px;padding-bottom:60px;padding-left:10px;">
      <div style="line-height: 1.2; font-size: 12px; font-family: Georgia, Times, 'Times New Roman', serif; color: #000000; mso-line-height-alt: 14px;">
      <p style="font-size: 34px; line-height: 1.2; word-break: break-word; text-align: center; font-family: Georgia, Times, 'Times New Roman', serif; mso-line-height-alt: 41px; margin: 0;"><span style="font-size: 34px;">Номер заказа: <span style="color: #ff9900;">${order_id}</span></span></p>
      </div>
      </div>
      <!--[if mso]></td></tr></table><![endif]-->
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <div style="background-color:#212121;">
      <div class="block-grid mixed-two-up" style="Margin: 0 auto; min-width: 320px; max-width: 480px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; background-color: transparent;">
      <div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#212121;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:480px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
      <!--[if (mso)|(IE)]><td align="center" width="120" style="background-color:transparent;width:120px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:60px; padding-bottom:60px;"><![endif]-->
      <div class="col num3" style="display: table-cell; vertical-align: top; max-width: 320px; min-width: 120px; width: 120px;">
      <div style="width:100% !important;">
      <!--[if (!mso)&(!IE)]><!-->
      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:60px; padding-bottom:60px; padding-right: 0px; padding-left: 0px;">
      <!--<![endif]-->
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 10px; padding-bottom: 10px; font-family: Arial, sans-serif"><![endif]-->
      <div style="color:#555555;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:0px;padding-bottom:10px;padding-left:0px;">
      <div style="line-height: 1.2; font-size: 12px; color: #555555; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
      <p style="font-size: 34px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 41px; margin: 0;"><span style="color: #ffffff; font-size: 34px;">18+</span></p>
      </div>
      </div>
      <!--[if mso]></td></tr></table><![endif]-->
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      <!--[if (mso)|(IE)]></td><td align="center" width="360" style="background-color:transparent;width:360px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top:5px; padding-bottom:5px;"><![endif]-->
      <div class="col num9" style="display: table-cell; vertical-align: top; min-width: 320px; max-width: 360px; width: 360px;">
      <div style="width:100% !important;">
      <!--[if (!mso)&(!IE)]><!-->
      <div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:5px; padding-right: 0px; padding-left: 0px;">
      <!--<![endif]-->
      <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 60px; padding-bottom: 60px; font-family: Arial, sans-serif"><![endif]-->
      <div style="color:#555555;font-family:Arial, Helvetica Neue, Helvetica, sans-serif;line-height:1.2;padding-top:60px;padding-right:0px;padding-bottom:60px;padding-left:0px;">
      <div style="line-height: 1.2; font-size: 12px; color: #555555; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; mso-line-height-alt: 14px;">
      <p style="font-size: 38px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 46px; margin: 0;"><span style="font-size: 38px;"><a href="https://candy-shop.su" rel="noopener" style="text-decoration: underline; color: #ffffff;" target="_blank">candy-shop.su</a></span></p>
      </div>
      </div>
      <!--[if mso]></td></tr></table><![endif]-->
      <!--[if (!mso)&(!IE)]><!-->
      </div>
      <!--<![endif]-->
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      <!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
      </div>
      </div>
      </div>
      <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
      </td>
      </tr>
      </tbody>
      </table>
      <!--[if (IE)]></div><![endif]-->
      </body>
      </html>`,
  });

  return info.messageId;
};
