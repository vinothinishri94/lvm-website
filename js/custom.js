function startDownload (dynamicContent_url) {
  document.getElementById("dlinitiate").src=[dynamicContent_url];
}

var timeOut=19500
var dltimeOut=21000
function tF(anim,main,dynamicContent_url,mywaitmessage) {
    anim.style.display = 'none';
    main.style.display = 'block';
    document.getElementById('mywaitmessage').style.display = 'none';
 var dlElement = document.getElementById('dllink');
 dlElement.setAttribute('href', dynamicContent_url);
}

function cF(dynamicContent,dynamicContent_url){
  var anim = document.getElementById(dynamicContent + 'anim');
  var main = document.getElementById(dynamicContent + 'main');
  setTimeout(tF, timeOut, anim, main,dynamicContent_url);
  setTimeout(startDownload,dltimeOut,dynamicContent_url);
}

function lF(dynamicContent) {
    var anim = dynamicContent + 'anim'
// document.getElementById(anim).innerHTML = "<img id='myimg' style='width:20%;height:20%' src='/img/download.gif'>"
$("<div id='mywaitmessage' style='margin:30px'>Please wait until the download link appears</div>").insertAfter('#myimg');
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var dynamicContent = getParameterByName('link');

	jQuery(document).ready(function() {


	if (dynamicContent !== '' && dynamicContent !== null) {
			jQuery('#imagediv').show();
      var dynamicContent_url = dynamicContent;
      var dynamicContent_t = 'image';
      cF(dynamicContent_t,dynamicContent_url);
      window.onload = lF(dynamicContent_t);
}
		else {
			jQuery('#default-content').show();
      document.getElementById("download-ad1").remove();
      document.getElementById("download-ad2").remove();
		}
	});


  (function($) {
  jQuery(window).load(function(){

  $(".fotitems").click(function(){
  $("#ads_showhide").hide();
  })

  });
  }(jQuery));
