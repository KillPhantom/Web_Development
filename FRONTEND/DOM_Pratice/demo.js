
var b1=document.querySelector("#p1");
var b2=document.getElementById("p2");
var b3=document.getElementById("reset");

var p1display=document.querySelector("#p1_display")
var p2display=document.querySelector("#p2_display")

var score=document.querySelector("p strong");

var ninput = document.querySelector("input");

var p1_score=0;
var p2_score=0;

var gameover=false;
var winning_score=5;

b1.addEventListener("click",function(){
	if (!gameover){
	p1_score++;
	p1display.textContent=p1_score;
	if(p1_score===winning_score){
		gameover=true;
		p1display.classList.add("winner");
	}}

})

b2.addEventListener("click",function(){
	if(!gameover){
	p2_score++;
	p2display.textContent=p2_score;
	if(p2_score===winning_score){
		gameover=true;
		p2display.classList.add("winner");
	}
	}

})

b3.addEventListener("click",function(){
	reset();
})

ninput.addEventListener("change",function(){
	score.textContent=this.value;
	winning_score=Number(this.value);
	reset();
})

function reset(){
	p1_score=0;
	p2_score=0;
	p1display.textContent=0;
	p2display.textContent=0;
	gameover=false;
	p1display.classList.remove('winner');
	p2display.classList.remove('winner');
}