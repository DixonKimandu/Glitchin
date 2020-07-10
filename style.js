$(document).ready(function(){
    flag = 0;
    $(".menuIcon").click(function(){
        if(flag==0){
          $(".open").hide();
          $(".close").show();

          $(".main").fadeIn(1000);
          flag=1;
        }
        else{
          $(".open").show();
          $(".close").hide();

          $(".main").fadeOut(1000);
          flag=0;
        }
    });
});

/*Loader Start*/
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}
/*Loader End*/

/*Glitch Loader*/
function domloaded() {

  var c = document.getElementById("canvas");
  var ctx = c.getContext('2d');
  var j = 0, pixSize = 3, pixCount = 100;
  for(var r = 0; r < pixCount; r++){
    for(var i = 0; i < pixCount; i++){
      if(i % pixCount === 0) {
        j++;
      }

      ctx.fillStyle = 'hsl(' + 360 * Math.random() + ' , 50%, 50%)';
      ctx.fillRect(i * pixSize, j * pixSize, 10, 10);
    }
  }
}

setInterval(domloaded, 150);
/*Glitch Loader*/
$(function() {
    $(".glitch-img").mgGlitch({
      destroy: false,
      glitch: true,
      scale: true,
      blend: true,
      blendModeType: 'hue',
      glitch1TimeMin: 200,
      glitch1TimeMax: 400,
      glitch2TimeMin: 10,
      glitch2TimeMax: 100,
    });
  });
