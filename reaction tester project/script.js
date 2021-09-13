//get starting time first
var start = new Date().getTime();



//get random color using function
function getRandomColor() {
  var letters = "0123456789ABCDEF".split("");

  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}


// use function to make shapes and use all attributes
function makeShapeAppear() {
  var top = Math.random() * 400;

  var left = Math.random() * 400;

  var width = Math.random() * 200 + 100;

  var right = Math.random() * 200 + 100;

  // if else statement to get random shape - circle or square with time condition
  if (Math.random() > 0.5) {
    document.getElementById("shape").style.borderRadius = "50%";
  } else {
    document.getElementById("shape").style.borderRadius = "0";
  }
  // js to use randomcolor function
  document.getElementById("shape").style.backgroundColor = getRandomColor();

  // document.getElementById("shape").style.width = width + "px";

  // document.getElementById("shape").style.top = top + "px";

  // document.getElementById("shape").style.left = left + "px";

  // document.getElementById("shape").style.right = right + "px";

  // document.getElementById("shape").style.display = "block";

  start = new Date().getTime();

}

//create function so shape appears after delay
function appearAfterDelay() {
  setTimeout(makeShapeAppear, Math.random() * 2000);
}

appearAfterDelay();


//onclick function using js - what all action sshould happen after clicking the shape
document.getElementById("shape").onclick = function () {
  //all style should go away
  document.getElementById("shape").style.display = "none";

  // caculate end time after click
  var end = new Date().getTime();
// cretae varibale to caculate timetaken at start and end
  var timetaken = (end - start) / 1000;
//display the same 
  document.getElementById("timetaken").innerHTML = timetaken + "s";
//use function so shape appears again after delay - google it
  appearAfterDelay();
};
