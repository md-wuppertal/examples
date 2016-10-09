var oldMouse = {x:0, y:0};
var oldR = {x: 0, y:0};
var newR = {x: 0, y:0};

var myTrans = 100;
$(document).ready(function() {

  console.log("dom is ready");
  $('.cube').css({"transform": "translateZ(" + myTrans + "px) rotateY(" + oldR.x + "deg) rotateZ(0deg) rotateX(" + oldR.y + "deg)"});

  $(window).mousedown(function(e) {
    oldMouse.x = e.clientX;
    oldMouse.y = e.clientY;
    console.log('mousedown');
    $(window).on('mousemove', rotateIt);

  }).on('mouseup', function(e) {
    oldR = newR;
    newR = {x:0, y:0};
    $(window).off('mousemove', rotateIt);
  });

  // setInterval(function() { rotateIt();}, 5000);

  function rotateIt(el) {
    var deltaX = el.clientX - oldMouse.x;
    var deltaY = el.clientY - oldMouse.y;
    console.log(deltaX);
    console.log(deltaY);
    newR.x = deltaX + oldR.x;
    newR.y = deltaY + oldR.y;
    
    if(newR.x > 360 || newR.x < -360) deltaX = 0;
    if(newR.y > 360 || newR.y < -360) deltaY = 0;
    console.log(newR);
    $('.cube').css({"transform": "translateZ(" + myTrans + "px) rotateY(" + newR.x + "deg) rotateZ(20deg) rotateX(" + newR.y + "deg)"});
  }
});

/**
 * org position speichern 0
 * 
 * maus delta berechnen ~ 400
 * zu org position addieren 300
 * 
 * bei loslassen org position updaten 
 */

