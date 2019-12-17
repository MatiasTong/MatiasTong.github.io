var isMouseTracking = false;

function updateMousePosition(){
if (isMouseTracking){
  var positionX=document.getElementById("mousePositionX");
  positionX.innerText= event.clientY;
  var positonY = document.getElementById("mousePositionY");
  positionY.innerText = event.clientY;
  }
}

function toggleTracking(){
  isMouseTracking = !isMouseTracking;

  if(isMouseTracking){
    document.getElementsById("trackingStatus").innerText="TRACKING";
  }else{
    document.getElementById("trackingStatus").innerTEXT = "NOT TRACKING";
  }
}
