var p1 = document.getElementById("p1")
var p2 = document.getElementById("p2")
var p3 = document.getElementById("p3")
var pro1 = document.getElementById("pro1")
var pro2 = document.getElementById("pro2")
var pro3 = document.getElementById("pro3")
var one = document.getElementById("one")
var two = document.getElementById("two")
var three = document.getElementById("three")
var hr1 = document.getElementById("hr-1")
var hr2 = document.getElementById("hr-2")
var hr3 = document.getElementById("hr-3")
p1.onclick = function (){
    pro1.style.display = "flex"
    pro2.style.display = "none"
    pro3.style.display = "none"
    one.style.color = "#dc4f72"
    hr1.style.backgroundColor ="#dc4f72"
    two.style.color = "#4E5B61"
    hr2.style.backgroundColor = "#2C303857"
    three.style.color = "#4E5B61"
    hr3.style.backgroundColor = "#2C303857"
    
}
p2.onclick = function (){
    pro2.style.display = "flex"
    pro1.style.display = "none"
    pro3.style.display = "none"
    two.style.color = "#dc4f72"
    hr2.style.backgroundColor = "#dc4f72"
    one.style.color = "#4E5B61"
    hr1.style.backgroundColor ="#2C303857"
    three.style.color = "#4E5B61"
    hr3.style.backgroundColor = "#2C303857"
}
p3.onclick = function (){
    pro2.style.display = "none"
    pro1.style.display = "none"
    pro3.style.display = "flex"
    three.style.color = "#dc4f72"
    hr3.style.backgroundColor = "#dc4f72"
    two.style.color = "#4E5B61"
    hr2.style.backgroundColor = "#2C303857"
    one.style.color = "#4E5B61"
    hr1.style.backgroundColor ="#2C303857"
}
