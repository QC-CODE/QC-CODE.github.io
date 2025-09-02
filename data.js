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
let listvaule = ["10", "25", "50", "100", "200", "500"]
//  NHL_2_2_0.01-0.02 NHL_7_500_2.50-5.00
let file = []
let songuoichoi = [2, 3, 4, 5, 6, 7, 8, 9]
const fs = require('fs');
let list = ["888Poker", "Chico Poker", "CoinPoker", "GGPoker", "Horizon Poker", "iPoker Network", "JackPoker", "PaiWangLuo", "PokerStars", "PokerStars Europe", "Unibet", "Winamax.fr", "Winning Poker"]
// let players = 2

for (let playe of songuoichoi) {
    let url = "./data2/" + `FF_${playe}.json`

    const rawData = fs.readFileSync(url);
    const data = JSON.parse(rawData);
    let total = []
    let totaldata = []
    for (let network of list) {
        total = []

        for (let el of data) {
            let ab = {}
            let filename = el.file

            const parts = filename.split("_");
            const value = parts[2];

            console.log(value); // Output: "2"
            if (!listvaule.includes(value)) continue
            let data2 = el.data
            let phantu = data2.filter(e => e.network == network || e.operators == network)
            if (phantu.length > 0) {
                ab = {
                    file: el.file,
                    value: value,
                    data: phantu[0]
                }
            }
            total.push(ab)


        }

        totaldata.push({ "network": total, "name": network })


        // break
    }

    fs.writeFile(`FF_${playe}.json`, JSON.stringify(totaldata, null, 2), (err) => {
        if (err) {
            console.error('Lỗi khi ghi file:', err);
        } else {
            console.log('Đã lưu mảng vào file data.json!');
        }
    });

}
