const xlsx = require("xlsx");

const transformBuffer = (buffer) => {
    let wb = xlsx.read(buffer, { type: "buffer" });
    const wsname = wb.SheetNames[0];
    const ws = wb.Sheets[wsname];
    const data = xlsx.utils.sheet_to_json(ws);
    console.log(data);
    return data
  };

module.exports = transformBuffer;  