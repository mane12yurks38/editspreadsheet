function decorateSpreadsheet() {
    const sheet = SpreadsheetApp.getActive().getSheetByName("FileName");
    
    // Set a bg-color at 1st row 
    const firstRowRange = sheet.getRange(1, 1, 1, sheet.getLastColumn());
    firstRowRange.setBackground('#b7b7b7');
    firstRowRange.setFontWeight('bold');
    firstRowRange.setFontSize(11);
    
    // Set a font-type
    sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).setFontFamily('M PLUS 1p');
  
    // Set a bg-color after 2nd row
    const otherRowsRange = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn());
    otherRowsRange.setBackground('#ffffff');
    
    // align-center
    sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).setVerticalAlignment('middle');
    
    // Set a border-line
    sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn()).setBorder(true, true, true, true, true, true);
  
    // Border-line 2px
    sheet.getRange(1, 1, 1, sheet.getLastColumn()).setBorder(null, null, true, null, null, null, '#000000', SpreadsheetApp.BorderStyle.SOLID_MEDIUM);
  }
  