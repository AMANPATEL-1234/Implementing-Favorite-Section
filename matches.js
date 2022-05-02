// write js code here corresponding to matches.html
var aer=JSON.parse(localStorage.getItem("schedule"))||[];
myfunction(aer)
function myfunction(aer){
aer.forEach(function(ele){
var tr1=document.createElement("tr");
var td1=document.createElement("td");
td1.innerText=ele.matchnumber;
var td2=document.createElement("td");
td2.innerText=ele.selectteamA;
var td3=document.createElement("td");
td3.innerText=ele.selectteamB;
var td4=document.createElement("td");
td4.innerText=ele.selectdate;
var td5=document.createElement("td");
td5.innerText=ele.selectvenue;
var td6=document.createElement("td");
td6.innerText="Add as Favourites"
td6.style.color="green"
td6.addEventListener("click",function(){
bookmarks( ele,index)
})
tr1.append(td1,td2,td3,td4,td5,td6);
document.querySelector("tbody").append(tr1);

})}

function bookmarks( ){
localStorage.setItem("favourites",JSON.stringify(aer))
window.location.href="favourites.html";
}
    