const ss = SpreadsheetApp.getActive();
const sh = ss.getActiveSheet();

function button() { 
   
  const rf = Number(getLastDataRow()/4-0.75);
  const rn = Math.floor(Math.random() * rf) + 1;
  sh.getRange('G3').setValue(rn);
  SpreadsheetApp.flush();
  sh.getRange('G4').setValue(rf);
}

function getLastDataRow(sh) {
  var lastRow = ss.getLastRow();
  var range = ss.getRange("A" + lastRow);
  if (range.getValue() !== "") {
    return lastRow;
  } else {
    return range.getNextDataCell(SpreadsheetApp.Direction.UP).getRow();
  }              
}