var w=new Audio("sounds/tom-1.mp3");
var a=new Audio("sounds/tom-2.mp3");
var s=new Audio("sounds/tom-3.mp3");
var d=new Audio("sounds/tom-4.mp3");
var j=new Audio("sounds/snare.mp3");
var k=new Audio("sounds/kick-bass.mp3");
var l=new Audio("sounds/crash.mp3");
for (i=0;i<document.querySelectorAll(".drum").length;i++){
	document.querySelectorAll('.drum')[i].addEventListener("click", function(){
		var btn= this.innerHTML;
		playSound(btn);
		buttonAnimation(btn);
	})
}

document.addEventListener("keydown", function(){
	var btn=event.key;
	playSound(btn);
	buttonAnimation(btn);
})


function playSound(btn){
	switch(btn){
		case "w":
			w.play();
			break;
		case "a":
			a.play();
			break;
		case "s":
			s.play();
			break;
		case "d":
			d.play();
			break;
		case "j":
			j.play();
			break;
		case "k":
			k.play();
			break;
		case "l":
			l.play();
			break;
		default:
			break;	
									
		}
}

function buttonAnimation(btn){

	var clickedBtn = document.querySelector("." + btn);
	clickedBtn.classList.add("pressed");

	setTimeout(function(){
		clickedBtn.classList.remove("pressed");
	},100)

}

