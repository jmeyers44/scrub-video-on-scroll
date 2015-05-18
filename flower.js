$( document ).ready(function() {
    console.log( "ready!" );
});

// select video element
var vid = document.getElementById('v0');
//var vid = $('#v0')[0]; // jquery option

// pause video on load
vid.pause();
 
// pause video on document scroll (stops autoplay once scroll started)
window.onscroll = function(){
    vid.pause();
};

// refresh video frames on interval for smoother playback
// pageXOffset/x will determine how fast a scroll will scrub through video
// the lower the number, the more frames will be covered in a scroll
setInterval(function(){
    vid.currentTime = window.pageYOffset/25;
}, 40);

// alternate between two specific locations on page with keystrokes 'f' and 'j'
document.body.onkeydown = function(event){
  event = event || window.event;
  var keycode = event.charCode || event.keyCode;
    if(keycode === 70){
        window.scrollTo(0,0);
    }
    else if (keycode === 74){
        window.scrollTo(0,800);
    }
}










