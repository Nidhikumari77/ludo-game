var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
var randomDice = "dice" + randomNumber1 + ".png";                    //selcting a random dice by considering the random number from 1-6
var randomImage = "images/" + randomDice;                           //selecting a random image by considering the random dice
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImage);
// player 2
var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
var randomImage2 = "./images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);
//deciding who wins
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins :)";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="player 2 wins :)";
}
else{
    document.querySelector("h1").innerHTML="match draw!!";
}