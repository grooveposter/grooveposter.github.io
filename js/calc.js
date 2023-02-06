//Uses calculation listed on BEMANIWIKI http://bemaniwiki.com/index.php?SOUND%20VOLTEX%20IV%20HEAVENLY%20HAVEN%2FVOLFORCE
//25 * (scoreLv + 1) * (score/10 million) * (GRADE Coefficient)
function volforceCalc() {

  var chartScore_1 = parseFloat(document.getElementById("chartScore_1").value);
  var chartLevel_1 = parseFloat(document.getElementById("chartLevel_1").value);
  if (isNaN(chartScore_1) || isNaN(chartLevel_1)) {
    volforce_1 = 0;
  }
  else {
    var volforce_1 = Math.floor(25*(chartLevel_1 + 1)*(chartScore_1/10000000)*gradeCheck(chartScore_1));
  }


  var chartScore_2 = parseFloat(document.getElementById("chartScore_2").value);
  var chartLevel_2 = parseFloat(document.getElementById("chartLevel_2").value);
  if (isNaN(chartScore_2) || isNaN(chartLevel_2)) {
    volforce_2 = 0;
  }
  else {
    var volforce_2 = Math.floor(25*(chartLevel_2 + 1)*(chartScore_2/10000000)*gradeCheck(chartScore_2));
  }


  var chartScore_3 = parseFloat(document.getElementById("chartScore_3").value);
  var chartLevel_3 = parseFloat(document.getElementById("chartLevel_3").value);
  if (isNaN(chartScore_3) || isNaN(chartLevel_3)) {
    volforce_3 = 0;
  }
  else {
    var volforce_3 = Math.floor(25*(chartLevel_3 + 1)*(chartScore_3/10000000)*gradeCheck(chartScore_3));
  }


  var chartScore_4 = parseFloat(document.getElementById("chartScore_4").value);
  var chartLevel_4 = parseFloat(document.getElementById("chartLevel_4").value);
  if (isNaN(chartScore_4) || isNaN(chartLevel_4)) {
    volforce_4 = 0;
  }
  else {
      var volforce_4 = Math.floor(25*(chartLevel_4 + 1)*(chartScore_4/10000000)*gradeCheck(chartScore_4));
  }

  var chartScore_5 = parseFloat(document.getElementById("chartScore_5").value);
  var chartLevel_5 = parseFloat(document.getElementById("chartLevel_5").value);
  if (isNaN(chartScore_5) || isNaN(chartLevel_5)) {
    volforce_5 = 0;
  }
  else {
    var volforce_5 = Math.floor(25*(chartLevel_5 + 1)*(chartScore_5/10000000)*gradeCheck(chartScore_5));
  }


  var chartScore_6 = parseFloat(document.getElementById("chartScore_6").value);
  var chartLevel_6 = parseFloat(document.getElementById("chartLevel_6").value);
  if (isNaN(chartScore_6) || isNaN(chartLevel_6)) {
    volforce_6 = 0;
  }
  else {
    var volforce_6 = Math.floor(25*(chartLevel_6 + 1)*(chartScore_6/10000000)*gradeCheck(chartScore_6));
  }

  var chartScore_7 = parseFloat(document.getElementById("chartScore_7").value);
  var chartLevel_7 = parseFloat(document.getElementById("chartLevel_7").value);
  if (isNaN(chartScore_7) || isNaN(chartLevel_7)) {
    volforce_7 = 0;
  }
  else {
    var volforce_7 = Math.floor(25*(chartLevel_7 + 1)*(chartScore_7/10000000)*gradeCheck(chartScore_7));
  }

  var chartScore_8 = parseFloat(document.getElementById("chartScore_8").value);
  var chartLevel_8 = parseFloat(document.getElementById("chartLevel_8").value);
  if (isNaN(chartScore_8) || isNaN(chartLevel_8)) {
    volforce_8 = 0;
  }
  else {
    var volforce_8 = Math.floor(25*(chartLevel_8 + 1)*(chartScore_8/10000000)*gradeCheck(chartScore_8));
  }

  var chartScore_9 = parseFloat(document.getElementById("chartScore_9").value);
  var chartLevel_9 = parseFloat(document.getElementById("chartLevel_9").value);
  var volforce_9 = Math.floor(25*(chartLevel_9 + 1)*(chartScore_9/10000000)*gradeCheck(chartScore_9));
  if (isNaN(chartScore_9) || isNaN(chartLevel_9)) {
    volforce_9 = 0;
  }
  else {
    var volforce_9 = Math.floor(25*(chartLevel_9 + 1)*(chartScore_9/10000000)*gradeCheck(chartScore_9));
  }

  var chartScore_10 = parseFloat(document.getElementById("chartScore_10").value);
  var chartLevel_10 = parseFloat(document.getElementById("chartLevel_10").value);
  if (isNaN(chartScore_10) || isNaN(chartLevel_10)) {
    volforce_10 = 0;
  }
  else {
    var volforce_10 = Math.floor(25*(chartLevel_10 + 1)*(chartScore_10/10000000)*gradeCheck(chartScore_10));
  }

  var chartScore_11 = parseFloat(document.getElementById("chartScore_11").value);
  var chartLevel_11 = parseFloat(document.getElementById("chartLevel_11").value);
  if (isNaN(chartScore_11) || isNaN(chartLevel_11)) {
    volforce_11 = 0;
  }
  else {
    var volforce_11 = Math.floor(25*(chartLevel_11 + 1)*(chartScore_11/10000000)*gradeCheck(chartScore_11));
  }

  var chartScore_12 = parseFloat(document.getElementById("chartScore_12").value);
  var chartLevel_12 = parseFloat(document.getElementById("chartLevel_12").value);
  if (isNaN(chartScore_12) || isNaN(chartLevel_12)) {
    volforce_12 = 0;
  }
  else {
    var volforce_12 = Math.floor(25*(chartLevel_12 + 1)*(chartScore_12/10000000)*gradeCheck(chartScore_12));
  }

  var chartScore_13 = parseFloat(document.getElementById("chartScore_13").value);
  var chartLevel_13 = parseFloat(document.getElementById("chartLevel_13").value);
  if (isNaN(chartScore_13) || isNaN(chartLevel_13)) {
    volforce_13 = 0;
  }
  else {
    var volforce_13 = Math.floor(25*(chartLevel_13 + 1)*(chartScore_13/10000000)*gradeCheck(chartScore_13));
  }

  var chartScore_14 = parseFloat(document.getElementById("chartScore_14").value);
  var chartLevel_14 = parseFloat(document.getElementById("chartLevel_14").value);
  if (isNaN(chartScore_14) || isNaN(chartLevel_14)) {
    volforce_14 = 0;
  }
  else {
    var volforce_14 = Math.floor(25*(chartLevel_14 + 1)*(chartScore_14/10000000)*gradeCheck(chartScore_14));
  }

  var chartScore_15 = parseFloat(document.getElementById("chartScore_15").value);
  var chartLevel_15 = parseFloat(document.getElementById("chartLevel_15").value);
  if (isNaN(chartScore_15) || isNaN(chartLevel_15)) {
    volforce_15 = 0;
  }
  else {
    var volforce_15 = Math.floor(25*(chartLevel_15 + 1)*(chartScore_15/10000000)*gradeCheck(chartScore_15));
  }

  var chartScore_16 = parseFloat(document.getElementById("chartScore_16").value);
  var chartLevel_16 = parseFloat(document.getElementById("chartLevel_16").value);
  if (isNaN(chartScore_16) || isNaN(chartLevel_16)) {
    volforce_16 = 0;
  }
  else {
    var volforce_16 = Math.floor(25*(chartLevel_16 + 1)*(chartScore_16/10000000)*gradeCheck(chartScore_16));
  }

  var chartScore_17 = parseFloat(document.getElementById("chartScore_17").value);
  var chartLevel_17 = parseFloat(document.getElementById("chartLevel_17").value);
  if (isNaN(chartScore_17) || isNaN(chartLevel_17)) {
    volforce_17 = 0;
  }
  else {
    var volforce_17= Math.floor(25*(chartLevel_17 + 1)*(chartScore_17/10000000)*gradeCheck(chartScore_17));
  }

  var chartScore_18 = parseFloat(document.getElementById("chartScore_18").value);
  var chartLevel_18 = parseFloat(document.getElementById("chartLevel_18").value);
  if (isNaN(chartScore_18) || isNaN(chartLevel_18)) {
    volforce_18 = 0;
  }
  else {
    var volforce_18 = Math.floor(25*(chartLevel_18 + 1)*(chartScore_18/10000000)*gradeCheck(chartScore_18));
  }

  var chartScore_19 = parseFloat(document.getElementById("chartScore_19").value);
  var chartLevel_19 = parseFloat(document.getElementById("chartLevel_19").value);
  if (isNaN(chartScore_19) || isNaN(chartLevel_19)) {
    volforce_19 = 0;
  }
  else {
    var volforce_19 = Math.floor(25*(chartLevel_19 + 1)*(chartScore_19/10000000)*gradeCheck(chartScore_19));
  }

  var chartScore_20 = parseFloat(document.getElementById("chartScore_20").value);
  var chartLevel_20 = parseFloat(document.getElementById("chartLevel_20").value);
  if (isNaN(chartScore_20) || isNaN(chartLevel_20)) {
    volforce_20 = 0;
  }
  else {
    var volforce_20 = Math.floor(25*(chartLevel_20 + 1)*(chartScore_20/10000000)*gradeCheck(chartScore_20));
  }

  totalVolforce = volforce_1 + volforce_2 + volforce_3 + volforce_4 + volforce_5 + volforce_6 + volforce_7 + volforce_8 + volforce_9 + volforce_10 + volforce_11 + volforce_12 + volforce_13 + volforce_14 + volforce_15 + volforce_16 + volforce_17 + volforce_18 + volforce_19 + volforce_20;

  document.getElementById("volforce_1").innerHTML = volforce_1;
  document.getElementById("volforce_2").innerHTML = volforce_2;
  document.getElementById("volforce_3").innerHTML = volforce_3;
  document.getElementById("volforce_4").innerHTML = volforce_4;
  document.getElementById("volforce_5").innerHTML = volforce_5;
  document.getElementById("volforce_6").innerHTML = volforce_6;
  document.getElementById("volforce_7").innerHTML = volforce_7;
  document.getElementById("volforce_8").innerHTML = volforce_8;
  document.getElementById("volforce_9").innerHTML = volforce_9;
  document.getElementById("volforce_10").innerHTML = volforce_10;
  document.getElementById("volforce_11").innerHTML = volforce_11;
  document.getElementById("volforce_12").innerHTML = volforce_12;
  document.getElementById("volforce_13").innerHTML = volforce_13;
  document.getElementById("volforce_14").innerHTML = volforce_14;
  document.getElementById("volforce_15").innerHTML = volforce_15;
  document.getElementById("volforce_16").innerHTML = volforce_16;
  document.getElementById("volforce_17").innerHTML = volforce_17;
  document.getElementById("volforce_18").innerHTML = volforce_18;
  document.getElementById("volforce_19").innerHTML = volforce_19;
  document.getElementById("volforce_20").innerHTML = volforce_20;
  document.getElementById("totalVolforce").innerHTML = totalVolforce;

  if (totalVolforce>=10075) {
    document.getElementById("wawa").innerHTML="<img src='img/wawa.png' />";
  }
  else {
    document.getElementById("wawa").innerHTML="";
  }


}


function gradeCheck(score) {
  //S
  if (score>=9900000) {
    scoreCoef = 1.00;
    return scoreCoef;
  }

  //AAA+
  else if (score>=9800000) {
    scoreCoef = 0.99;
    return scoreCoef;
  }

  //AAA
  else if (score>=9700000) {
    scoreCoef = 0.98;
    return scoreCoef;
  }

  //AA+
  else if (score>=9500000) {
    scoreCoef = 0.97;
    return scoreCoef;
  }

  //AA
  else if (score >=9300000) {
    scoreCoef = 0.96;
    return scoreCoef;
  }

  //A+
  else if (score>=9000000) {
    scoreCoef = 0.95;
    return scoreCoef;
  }

  //A
  else if (score>=8700000) {
    scoreCoef = 0.94;
    return scoreCoef;
  }

  //B
  else if (score>=7500000) {
    scoreCoef = 0.93;
    return scoreCoef;
  }

  //C
  else if (score>=6500000) {
    scoreCoef = 0.92;
    return scoreCoef;
}
  //D
  else if (score>0 && score<6500000) {
    scoreCoef = 0.91;
    return scoreCoef;
  }
}

function formClear() {

  document.getElementById("totalVolforce").innerHTML = "";
  document.getElementById("volforce_1").innerHTML = "";
  document.getElementById("volforce_2").innerHTML = "";
  document.getElementById("volforce_3").innerHTML = "";
  document.getElementById("volforce_4").innerHTML = "";
  document.getElementById("volforce_5").innerHTML = "";
  document.getElementById("volforce_6").innerHTML = "";
  document.getElementById("volforce_7").innerHTML = "";
  document.getElementById("volforce_8").innerHTML = "";
  document.getElementById("volforce_9").innerHTML = "";
  document.getElementById("volforce_10").innerHTML = "";
  document.getElementById("volforce_11").innerHTML = "";
  document.getElementById("volforce_12").innerHTML = "";
  document.getElementById("volforce_13").innerHTML = "";
  document.getElementById("volforce_14").innerHTML = "";
  document.getElementById("volforce_15").innerHTML = "";
  document.getElementById("volforce_16").innerHTML = "";
  document.getElementById("volforce_17").innerHTML = "";
  document.getElementById("volforce_18").innerHTML = "";
  document.getElementById("volforce_19").innerHTML = "";
  document.getElementById("volforce_20").innerHTML = "";
  document.getElementById("wawa").innerHTML="";

  document.getElementById("chartName1").value = "";
  document.getElementById("chartName2").value = "";
  document.getElementById("chartName3").value = "";
  document.getElementById("chartName4").value = "";
  document.getElementById("chartName5").value = "";
  document.getElementById("chartName6").value = "";
  document.getElementById("chartName7").value = "";
  document.getElementById("chartName8").value = "";
  document.getElementById("chartName9").value = "";
  document.getElementById("chartName10").value = "";
  document.getElementById("chartName11").value = "";
  document.getElementById("chartName12").value = "";
  document.getElementById("chartName13").value = "";
  document.getElementById("chartName14").value = "";
  document.getElementById("chartName15").value = "";
  document.getElementById("chartName16").value = "";
  document.getElementById("chartName17").value = "";
  document.getElementById("chartName18").value = "";
  document.getElementById("chartName19").value = "";
  document.getElementById("chartName20").value = "";

  document.getElementById("chartScore_1").value = "";
  document.getElementById("chartScore_2").value = "";
  document.getElementById("chartScore_3").value = "";
  document.getElementById("chartScore_4").value = "";
  document.getElementById("chartScore_5").value = "";
  document.getElementById("chartScore_6").value = "";
  document.getElementById("chartScore_7").value = "";
  document.getElementById("chartScore_8").value = "";
  document.getElementById("chartScore_9").value = "";
  document.getElementById("chartScore_10").value = "";
  document.getElementById("chartScore_11").value = "";
  document.getElementById("chartScore_12").value = "";
  document.getElementById("chartScore_13").value = "";
  document.getElementById("chartScore_14").value = "";
  document.getElementById("chartScore_15").value = "";
  document.getElementById("chartScore_16").value = "";
  document.getElementById("chartScore_17").value = "";
  document.getElementById("chartScore_18").value = "";
  document.getElementById("chartScore_19").value = "";
  document.getElementById("chartScore_20").value = "";

  document.getElementById("chartLevel_1").value = "";
  document.getElementById("chartLevel_2").value = "";
  document.getElementById("chartLevel_3").value = "";
  document.getElementById("chartLevel_4").value = "";
  document.getElementById("chartLevel_5").value = "";
  document.getElementById("chartLevel_6").value = "";
  document.getElementById("chartLevel_7").value = "";
  document.getElementById("chartLevel_8").value = "";
  document.getElementById("chartLevel_9").value = "";
  document.getElementById("chartLevel_10").value = "";
  document.getElementById("chartLevel_11").value = "";
  document.getElementById("chartLevel_12").value = "";
  document.getElementById("chartLevel_13").value = "";
  document.getElementById("chartLevel_14").value = "";
  document.getElementById("chartLevel_15").value = "";
  document.getElementById("chartLevel_16").value = "";
  document.getElementById("chartLevel_17").value = "";
  document.getElementById("chartLevel_18").value = "";
  document.getElementById("chartLevel_19").value = "";
  document.getElementById("chartLevel_20").value = "";

}
