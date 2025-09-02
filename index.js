let rakelimit = [
  { value: "2", text: "0.01-0.02" },
  { value: "5", text: "0.02-0.05" },
  { value: "10", text: "0.05-0.10" },
  { value: "25", text: "0.10-0.25" },
  { value: "50", text: "0.25-0.50" },
  { value: "100", text: "0.50-1.00" },
  { value: "200", text: "1.00-2.00" },
  { value: "500", text: "2.50-5.00" },
  { value: "1000", text: "5.00-10.00" },
  { value: "2000", text: "10.00-20.00" },
  { value: "5000", text: "25.00-50.00" },
  { value: "10000", text: "50.00-100.00" },
  { value: "20000", text: "100.00-200.00" },
  { value: "40000", text: "200.00-400.00" }
]
//  NHL_2_2_0.01-0.02 NHL_7_500_2.50-5.00
let file = []
let songuoichoi = [2, 3, 4, 5, 6, 7, 8, 9]
const fs = require('fs');

// let players = 2
for (let players of songuoichoi) {
  file=[]
  let totaldata = []
  for (let el of rakelimit) {
    let text_name = "FF" + "_" + players + "_" + el.value + "_" + el.text + ".json";
    file.push(text_name)
  }


  for (let el of file) {
    const rawData = fs.readFileSync("./data/" + el);
    const data = JSON.parse(rawData);

    // console.log(data);
    totaldata.push({
      file: el,
      data: data
    })
    // break
  }
  fs.writeFile( "FF"+ "_" + players+'.json', JSON.stringify(totaldata, null, 2), (err) => {
    if (err) {
      console.error('Lỗi khi ghi file:', err);
    } else {
      console.log('Đã lưu mảng vào file data.json!');
    }
  });
}