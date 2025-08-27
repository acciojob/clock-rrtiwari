let timerDisplay=document.getElementById("timer");
let clock=new Date();
setInterval(
	function(){
		clock=new Date();
		timerDisplay.innerHTML=clock.toLocaleString();
	},1000);
