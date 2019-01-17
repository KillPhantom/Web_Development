var numSquares=6;
var colors = [];
var pickedcolor;
var squares = document.querySelectorAll(".square");
var colordisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");

var h1=document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easybtn=document.querySelector('#easybtn');
var hardbtn=document.querySelector('#hardbtn');

var modebutton=document.querySelectorAll(".mode");

init();

function init(){

	for(var i =0; i<squares.length; i++){
	squares[i].addEventListener("click",function(){
		var clickedcolor = this.style.backgroundColor
		if (clickedcolor===pickedcolor){
			messageDisplay.textContent= "Correct !";
			changeColors(pickedcolor);
			resetButton.textContent="Play Again?"

		}else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}
	})
	}
	for (var i=0;i<modebutton.length;i++){
		modebutton[i].addEventListener("click",function(){
			modebutton[0].classList.remove("selected")
			modebutton[1].classList.remove("selected")
			this.classList.add("selected")

			this.textContent==="Easy"? numSquares=3: numSquares=6;
			reset();
		})
}
	reset();
}

function reset(){
	colors=generateRandomColors(numSquares);
	//pick a new random color
	pickedcolor=pickColor();

	//display the picked color:
	colordisplay.textContent=pickedcolor;

	// change all the color to new colors
	for (var i=0; i< squares.length;i++){
		if (colors[i]){
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i]}
		else{
			squares[i].style.display="none";
		}
	}
	//reset the h1 color to be black
	h1.style.backgroundColor="steelblue";
	resetButton.textContent="New Colors"
	messageDisplay.textContent= "";
}

// easybtn.addEventListener("click",function(){
// 	easybtn.classList.add("selected");
// 	hardbtn.classList.remove("selected");
// 	numSquares=3;
// 	colors=generateRandomColors(numSquares);
// 	pickedcolor=pickColor();
// 	for (var i=0;i<squares.length;i++){
// 		if (colors[i]){
// 			squares[i].style.backgroundColor=colors[i];
// 		}else{
// 			squares[i].style.display="none";
// 		}
// 	}
// })
// hardbtn.addEventListener("click",function(){
// 	easybtn.classList.remove("selected")
// 	hardbtn.classList.add("selected")
// 	numSquares=6;
// 	colors=generateRandomColors(numSquares);
// 	pickedcolor=pickColor();
// 	for (var i=0;i<squares.length;i++){
// 			squares[i].style.backgroundColor=colors[i];
// 			squares[i].style.display="block";
// 	}
// })




resetButton.addEventListener("click",function(){
	reset();
})


function changeColors(color){
	for(var i = 0 ; i<squares.length; i++){
		squares[i].style.backgroundColor=color;
	}
	h1.style.backgroundColor=pickedcolor;
}



function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	colordisplay.textContent=colors[random];
	return colors[random]
}


function generateRandomColors(num){
	var arr=[];

	for (var i=0; i<num; i++){
		arr.push(randomColor())

	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";
}

