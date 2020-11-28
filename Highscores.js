// hS = high Score
// sL = score list
var restart = document.querySelector("button.restart"),
    clear = document.querySelector("button.clear"),
    hS = JSON.parse(localStorage.getItem("highScores") || "()"),
    sL = document.getElementById("score-list");
    hS.sort(function (a,b){
        return b.score - a.score
    })
    for (var s = 0; s < hS.length; s++) {
        var newLi = document.createElement("li")
        newLi.textContent = hS[s].name + " - " + hS[s].score
        sL.appendChild(newLi)
    }
clear.addEventListener("click", function () {
    localStorage.clear();
    history.back()
});
restart.addEventListener("click", function () {
    history.back();
});