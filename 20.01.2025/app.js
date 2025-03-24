// var s = 400;
// var v = 110;
// var t = 0;
// t = s / v;
// alert(t)

// var s = 1210;
// var t = 5;
// var v = 0;
// v = s / t;
// alert(v)

// var qash = prompt("Greq dzer qashy");
// var banadzev = qash * 0.03;
// document.write("Dzez anhrajesht e motavorapes" + banadzev + "litr jur orakan");
// alert("Dzez anhrajesht e motavorapes" + banadzev + "litr jur orakan")

var dram = prompt("Մուտքագրեք գումարը դրամով:");

var evro = 412;
var rubli = 3.82;
var gel = 140;

let EUR = (dram / evro).toFixed(2);
let RUB = (dram / rubli).toFixed(2);
let GEL = (dram / gel).toFixed(2);

document.write("Ձեր գումարը կազմում է՝ <br><br>" + "<br><br> EUR = " + EUR + "<br><br> RUB = " + RUB + "<br><br> GEL = " + GEL);


