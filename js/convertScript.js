function excelExport(event) {
  let input = event.target;
  let reader = new FileReader();
  reader.onload = function () {
    let fileData = reader.result;
    let wb = XLSX.read(fileData, { type: 'binary' });
    wb.SheetNames.forEach(function (sheetName) {
      let rowObj = XLSX.utils.sheet_to_jason(wb.Sheets[sheetName]);
      console.log(JSON.stringify(rowObj));
    });
  };
  reader.readAsBinaryString(input.files[0]);
}
