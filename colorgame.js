var colors = generateRandomColor(6)


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay")
var message = document.querySelector("#message");
var h1 = document.querySelector("h1")
var resetButton = document.querySelector("#reset");

resetButton.addEventListener(
    "click",
    function()
    {
    	//generate new colors
    	colors = generateRandomColor(6)
    	//pick a new random color from array
    	pickedColor = pickColor();
    	//change colorDisplay to match picked color
    	colorDisplay.textContent = pickedColor;
    	//change colors of squares
    	for(var i = 0; i< squares.length ; i++)
    	{
    		squares[i].style.backgroundColor = colors[i];
    	}
    	h1.style.backgroundColor = "#232323"
    }
	)

colorDisplay.textContent = pickedColor;

for(var i=0 ; i<squares.length; i++)
{  
   //add initial colors to squares
   squares[i].style.backgroundColor = colors[i]
   //add click listeners to squares
   squares[i].addEventListener(
   "click",
   function click()
   {
   	//grab color of clicked square 
   	//compare color to pickedColor
   	var clickedColor = this.style.backgroundColor;
   	if(clickedColor === pickedColor)
   	{
   		message.textContent = "Correct"
   		resetButton.textContent = "Play Again?"
   	    changecolors(clickedColor);
   	    h1.style.backgroundColor = clickedColor;
   	}
   	else{
   		this.style.backgroundColor = "#232323"
   		message.textContent = "Try Again"
   	}
    }
   
   	)

}


function changecolors(color)
{
	//loop through all squares
     for(var i = 0; i < squares.length ; i++)
     {
     	squares[i].style.backgroundColor = color;
     }
	//change color to match given color
}



function pickColor()
{
	//pick A RANDOM NUMBER
	var random = Math.floor(Math.random()*colors.length)
	return colors[random];
}

function generateRandomColor(num)
{
	var arr = [];
   //add num random colors to arrys
   for(var i = 0 ; i < num ; i++)
         {
         	//get random color and push to array
         	arr.push(randomColor())

         }
         //return the array
	return arr;
}

function randomColor()
{
	//pick a "red from 0 - 255"
		var r = Math.floor(Math.random() * 256);
	//pick green from 0 to 255
	   var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 to 255"
        var b = Math.floor(Math.random() * 256);
        
      return  "rgb(" + r + ", " + g + ", " + b + ")";
} 