
function init(){
	var mainContent = document.getElementById("mainContent");


		for(var i=1; i<30; i++)
			{
			var iDiv = document.createElement("div");			
			iDiv.id = "circle_"+i;
			iDiv.className = "circle_1";
			mainContent.appendChild(iDiv);



			var xpos = Math.floor(Math.random()*300)+1;
			var ypos = Math.floor(Math.random()*50)+250;
			var scale = Math.floor(Math.random()*5)+10;
				iDiv.style.width = scale+"px";
				iDiv.style.height = scale+"px";


				iDiv.style.left = xpos+scale+"px";
				iDiv.style.top = ypos+scale+"px";
				//iDiv.style.top = scale+"px";

				$("circle_"+i,2,{delay:0.1+i, opacity:0.5,y:-300,ease:"easeInSine"});
				//$("circle_"+i,5,{delay:0.1+i, opacity:0,y:-600, rotate:-30,scale:1 ,ease:"easeInSine"});				

			}
}

