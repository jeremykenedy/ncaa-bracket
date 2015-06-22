$(document).ready(function(){

  //LETS START HERE FOR CLARITY
  googleSpreadsheetsTournamentBracket();

});

//FUNCTION TO PULL AND DISPLAY GOOGLE SPREADSHEET INFORMATION AND MAKE INTERACTIVE
function googleSpreadsheetsTournamentBracket(){

  //VARIABLES
  var googleSpreadSheetMisoAPIkey = "0Ain7zrCBNzCIdElJU0s3TW40VElQdU1oZzVDZnJlU0E";
  var ds;
  var totalEntries;
  var allData = [];
  var sheetCount = 1;
  var dataBoardFields = $(".slot");
  var dataColumnField = 'data-col';
  var gameDataField = 'data-game';
  var firstDataField = "#c";
  var secondDataField = "s";
  var dataFieldWinner = "#c6s0";
  var dataFieldSecondPlace = "#c6s2";
  var dataFieldThirdPlace = "#c6s1";
  var theFinalFour = "#ff";

  //LOAD THE FUNCTIONS
  loadGoogleSpeadsheetData(sheetCount);
  interactiveTournamentBoard();
  printTheWindow();

  //LOAD DATA FUNCTION - POPULATE DATA FROM GOOGLE SPREADSHEET
  function loadGoogleSpeadsheetData(which) {
 
    //LOAD DATA WITH MISO
    ds = new Miso.Dataset({
        importer : Miso.Dataset.Importers.GoogleSpreadsheet,
        parser : Miso.Dataset.Parsers.GoogleSpreadsheet,
        key : googleSpreadSheetMisoAPIkey,
        worksheet : which 
    });

    ds.fetch({ 
      success : function() {
        //console.log(ds.column("thetalk").data);
        parseGoogleSpreadsheetData();
      },
      error : function() {
        console.error("ds.fetch failed", ds);
      }
    });
  }

  //LOAD DATA FUNCTION - PARSE THE SPREADSHEET DATA
  function parseGoogleSpreadsheetData() {

    var $len = ds.column("id").data.length;
    totalEntries = $len;
    
    //LOOP THRU GOOGLE DATA AND PUT INTO OBJECT
    for (var j=0; j<$len; j++) {
      var counter = ds.column("id").data[j];
      allData[counter] = [ {
                  myid: ds.column("id").data[j],
                  seed: ds.column("seed").data[j],
                  name: ds.column("name").data[j]
                  }];
    }
    //console.log(allData);
    
    //if (sheetCount < 6) {
    if (sheetCount < 5) {
      sheetCount ++;
      loadGoogleSpeadsheetData(sheetCount);
    } else {
      showSpreadSheetTournamentData();
    }
  }

  //LOAD DATA FUNCTION - SHOW THE SPREADSHEET DATA
  function showSpreadSheetTournamentData() {
  //console.log(allData.length, ds.column("id").data.length);
    for (var k=0; k<allData.length; k++) {
      //console.log(k, allData[k][0].seed, allData[k][0].myid, allData[k][0].name);
      if (k <= 31) {
         $("#c1" + secondDataField + (k + 1)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
         continue;
      }
      if (k >= 32 && k <= 63) {
         $("#c11" + secondDataField + (k - 31)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
         continue;
      } 
      if (k >= 63 && k <= 75) {
        $("#c12" + secondDataField + (k - 63)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
         continue;
      }
      if (k == 76) {
        $("#r1").text(allData[k][0].name);
         continue;
      }
      if (k == 77) {
        $("#r2").text(allData[k][0].name);
         continue;
      }
      if (k == 78) {
        $("#r3").text(allData[k][0].name);
         continue;
      }
      if (k == 79) {
        $("#r4").text(allData[k][0].name);
         continue;
      }

      if (k == 80) {
        $("#fflabel1").text(allData[k][0].name);
         continue;
      }
      if (k == 81) {
        $("#fflabel2").text(allData[k][0].name);
         continue;
      }
      if (k == 82) {
        $("#fflabel3").text(allData[k][0].name);
         continue;
      }
      if (k == 83) {
        $("#fflabel4").text(allData[k][0].name);
         continue;
      }

      // WINNER BRACKET LOGIC 
      // (this is optional: if you just want to publish the first round you can just publish the first round.)
      // Note: the if ( allData[k][0].seed === null ) { continue; } code is what makes sure we don't publish
      // any slot's data before we have data in the spreadsheet for that round and slot.

      // *******************************
      // ROUND OF 32
      // *******************************
      if (k > 83 && k < 92 ) {
          if ( allData[k][0].seed === null ) { continue; }
          $("#c2" + secondDataField + (k - 83)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
          continue;
      }
      if (k > 101 && k < 110 ) {
          if ( allData[k][0].seed === null ) { continue; }
          $("#c2" + secondDataField + (k - 93)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
          continue;
      }
      if (k > 116 && k < 125 ) {
          if ( allData[k][0].seed === null ) { continue; }
          $("#c10" + secondDataField + (k - 116)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
          continue;
      }
      if (k > 131 && k < 140 ) {
          if ( allData[k][0].seed === null ) { continue; }
          $("#c10" + secondDataField + (k - 123)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
          continue;
      }

      // **************** 
      // SWEET 16
      // **************** 
      if (k > 91 && k < 96 ) {
          if ( allData[k][0].seed === null ) { continue; }
          $("#c3" + secondDataField + (k - 91)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
          continue;
      }
      if (k > 109 && k < 114 ) {
          if ( allData[k][0].seed === null ) { continue; }
          $("#c3" + secondDataField + (k - 105)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
          continue;
      }
      if (k > 124 && k < 129 ) {
          if ( allData[k][0].seed === null ) { continue; }
          $("#c9" + secondDataField + (k - 124)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
          continue;
      }
      if (k > 139 && k < 144 ) {
          if ( allData[k][0].seed === null ) { continue; }
          $("#c9" + secondDataField + (k - 135)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
          continue;
      }

      // ********
      // ELITE 8
      // ********
      if (k == 96 || k == 97 ) {
          if ( allData[k][0].seed === null ) { continue; }
          $("#c4" + secondDataField + (k - 95)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
          continue;
      }
      if (k == 114 || k == 115 ) {
          if ( allData[k][0].seed === null ) { continue; }
          $("#c4" + secondDataField + (k - 111)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
          continue;
      }
      if (k == 129 || k == 130 ) {
          if ( allData[k][0].seed === null ) { continue; }
          $("#c8" + secondDataField + (k - 128)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
          continue;
      }
      if (k == 144 || k == 145 ) {
          if ( allData[k][0].seed === null ) { continue; }
          $("#c8" + secondDataField + (k - 141)).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
          continue;
      }

      // ****
      // FINAL FOUR
      // ****
      if (k == 98 ) {
          if ( allData[k][0].seed === null ) { continue; }
          $("#c5s1").text("(" + allData[k][0].seed + ") " + allData[k][0].name);
          continue;
      }
      if (k == 116 ) {
          if ( allData[k][0].seed === null ) { continue; }
          $("#c5s2").text("(" + allData[k][0].seed + ") " + allData[k][0].name);
          continue;
      }
      if (k == 131 ) {
          if ( allData[k][0].seed === null ) { continue; }
          $("#c7s1").text("(" + allData[k][0].seed + ") " + allData[k][0].name);
          continue;
      }
      if (k == 146 ) {
          if ( allData[k][0].seed === null ) { continue; }
          $("#c7s2").text("(" + allData[k][0].seed + ") " + allData[k][0].name);
          continue;
      }

      // **
      // CHAMPIONSHIP
      // **
      if (k == 99 ) {
          if ( allData[k][0].seed === null ) { continue; }
          $(dataFieldThirdPlace).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
          continue;
      }
      if (k == 100 ) {
          if ( allData[k][0].seed === null ) { continue; }
          $(dataFieldSecondPlace).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
          continue;
      }

      // **
      // CHAMPION
      // **
      if (k == 101 ) {
          if ( allData[k][0].seed === null ) { continue; }
          $(dataFieldWinner).text("(" + allData[k][0].seed + ") " + allData[k][0].name);
          continue;
      }
    }
  }

  //ACTION FUNCTION - INTERACTIVE TOURNAMENT BOARD
  function interactiveTournamentBoard(){
    dataBoardFields.click(function() {
      if (parseInt($(this).attr(dataColumnField)) <= 5) {

        var tmpTxtA = $(firstDataField + (parseInt($(this).attr(dataColumnField)) + 1 ) + secondDataField + $(this).attr(gameDataField)).text();
        var tmpColA = $(this).attr(dataColumnField);

        $(firstDataField + (parseInt($(this).attr(dataColumnField)) + 1 ) + secondDataField + $(this).attr(gameDataField)).text($(this).text());

        dataBoardFields.each(function() {
            var text = $(this).text();
            if (text == tmpTxtA) {
              if ($(this).attr(dataColumnField) > tmpColA && $(this).attr(dataColumnField) <=6 ) {
                $(this).text('');
              }
            }
        });
      
      } else if (parseInt($(this).attr(dataColumnField)) >= 7 && parseInt($(this).attr(dataColumnField)) < 12) {
          
          var tmpTxtB = $(firstDataField + (parseInt($(this).attr(dataColumnField)) - 1 ) + secondDataField + $(this).attr(gameDataField)).text();
          var tmpColB = $(this).attr(dataColumnField);

          $(firstDataField + (parseInt($(this).attr(dataColumnField)) - 1 ) + secondDataField + $(this).attr(gameDataField)).text($(this).text());

          dataBoardFields.each(function() {
              var text = $(this).text();
              if (text == tmpTxtB) {
                if (parseInt($(this).attr(dataColumnField)) < tmpColB) {
                    $(this).text('');
                }
              }
          });
        
      }

      if (parseInt($(this).attr(dataColumnField)) == 6) {
        $(dataFieldWinner).text($(this).text());
      }

      if (parseInt($(this).attr(dataColumnField)) > 11) {
        var tmpTxtC = $(firstDataField + (parseInt($(this).attr(dataColumnField))) + secondDataField + $(this).attr(gameDataField)).text();
        
        $(firstDataField + (parseInt($(this).attr(dataColumnField))) + secondDataField + $(this).attr(gameDataField)).text($(this).text());
        $(theFinalFour + $(this).attr(gameDataField)).text($(this).text());

        dataBoardFields.each(function() {
            var text = $(this).text();
            if (text == tmpTxtC) {
              if ($(this).attr(dataColumnField) < 11) {
                $(this).text('');
              }
            }
        });
      }
    });  
  }

  //ACTION FUNCTION - PRINT TOURNAMENT BOARD
  function printTheWindow() {
    var printButtons = $("#printbtn, .printbtn");
    printButtons.click(function() {
      window.print();
    });
  }

}