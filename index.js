// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",myfunction)

var arr=JSON.parse(localStorage.getItem("schedule")||[]);

function myfunction(){
    event.preventDefault()
    var objarr={matchnumber:document.querySelector("#matchNum").value,
    selectteamA:document.querySelector("#teamA").value,
    selectteamB:document.querySelector("#teamB").value,
    selectdate:document.querySelector("#date").value,
    selectvenue:document.querySelector("#venue").value,
}
arr.push(objarr);
localStorage.setItem("schedule",JSON.stringify(arr))
window.location.href="matches.html"







    }





