// parseRake.js
const fs = require('fs');
const cheerio = require('cheerio');


// Đọc file HTML (bạn lưu đoạn HTML vào file rake.html)
const html = fs.readFileSync("body.html", "utf8");
  
// Load bằng cheerio
const $ = cheerio.load(html);
// console.log($.html());
// mảng kết quả
const data = [];

$("#rake_comparison tbody tr").each((i, el) => {
    console.log('sfdf ',el,i)
  const rank = $(el).find(".rake-rank").text().trim();
  const network = $(el).find(".rake-network a").text().trim();
  const currency = $(el).find(".rake-currency").text().trim();
  const bigBlinds = $(el).find(".rake-bb").text().trim();
  const netRake = $(el).find(".rake-net-rake").text().trim();
  const rakePercentage = $(el).find(".rake-percentage").text().trim();
  const rakeCap = $(el).find(".rake-cap").text().trim();
  const rule = $(el).find(".rake-rule img").attr("title") || "";
  const operators = $(el).find(".rake-operators").text().trim();

  data.push({
    rank,
    network,
    currency,
    bigBlinds,
    netRake,
    rakePercentage,
    rakeCap,
    rule,
    operators,
  });
});
// $("tbody tr").each((i, el) => {
//   console.log("row", i, $(el).html()); // in ra html bên trong <tr>
// });
console.log(JSON.stringify(data, null, 2));