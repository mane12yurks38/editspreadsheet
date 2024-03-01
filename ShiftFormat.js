function myFunction() {
    const sheet = SpreadsheetApp.getActive().getSheetByName("FileName");
    const lastRow = sheet.getLastRow();
    // Start point designate 2nd row
    for(let i = 2; i <= lastRow; i++){
      const created_at = sheet.getRange(i, 6).getValue();
      const created_at2 = Utilities.formatDate(created_at, 'JST', 'yyyy/MM/dd')
      sheet.getRange(i, 6).setValue(created_at2);
    };
  }