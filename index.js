
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImgSrc1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImgSrc2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

if ( randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "<img class ='flag' src='images/flag.png'> Player 1 Wins!";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins! <img class ='flag' src='images/flag.png'> ";
}else{
    document.querySelector("h1").innerHTML = "<img class ='flag' src='images/flag.png'>  It's a Draw! <img class ='flag' src='images/flag.png'> ";
}

/*var imagesArray = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

function displayImage1() {
    var rndNum1 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("player1").setAttribute("src", imagesArray[rndNum1]);
}
function displayImage2() {
    var rndNum2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("player2").setAttribute("src", imagesArray[rndNum2]);
}
function compare(){
   if ( displayImage2 > displayImage1){
       document.querySelector("h1").innerHTML = "Player 2 Wins! <img class ='flag' src='images/flag.png'> ";
   }else if(displayImage1 > displayImage2){
       document.querySelector("h1").innerHTML = "<img class ='flag' src='images/flag.png'> Player 1 Wins!";
   }else{
       document.querySelector("h1").innerHTML = "<img class ='flag' src='images/flag.png'>  It's a Draw! <img class ='flag' src='images/flag.png'> ";
   }
   compare();
}
function display() {
    displayImage1();
    displayImage2();
}
document.onload = display();
*/
