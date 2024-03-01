function calculateDays() {
    const sheet = SpreadsheetApp.getActive().getSheetByName("FileName");
  
    // データが入っている最終行を取得
    var lastRow = sheet.getLastRow();
  
    // 2行目以降で各行の作成日と回答日の差を計算
    for (var row = 2; row <= lastRow; row++) {
      var createDateCell = sheet.getRange("F" + row);
      var firstResponseDateCell = sheet.getRange("L" + row);
      var daysDifferenceCell = sheet.getRange("M" + row);
  
      var createDate = createDateCell.getValue();
      var firstResponseDate = firstResponseDateCell.getValue();
  
      if (createDate && firstResponseDate) {
        var daysDifference = Math.floor((firstResponseDate - createDate) / (1000 * 60 * 60 * 24));
        daysDifferenceCell.setValue(daysDifference);
      }
    }
  }
  