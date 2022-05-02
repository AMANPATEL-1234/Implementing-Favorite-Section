// write js code here corresponding to favourites.html


var ar=JSON.parse(localStorage.getItem("favourites"))||[];
ar.forEach(function(el,index){
var tr1=document.createElement("tr")
var td1=document.createElement("td")
td1.innerText=el.matchnumber;
var td2=document.createElement("td")
td2.innerText=el.selectteamA;
var td3=document.createElement("td")
td3.innerText=el.selectteamB;
var td4=document.createElement("td")
td4.innerText=el.selectdate;
var td5=document.createElement("td")
td5.innerText=el.selectvenue;
var td6=document.createElement("td")
 td6.innerText="Delete"
 })
tr1.append(td1,td2,td3,td4,td5,td6);
document.querySelector("tbody").append(tr1)
