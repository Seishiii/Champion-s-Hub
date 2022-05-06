//navigation for highlighted button (Navigation bar)
$(function(){
  $("#home").click(function(){
    window.location = "index.html";
  });
});
$(function(){
  $("#lol").click(function(){
    window.location = "LOL.html";
  });
});
$(function(){
  $("#survey").click(function(){
    window.location = "Survey.html";
  });
});
$(function(){
  $("#about").click(function(){
    window.location = "About Us.html";
  });
});

//navigation for highlighted button (Footer)
$(function(){
  $("#homefooter").click(function(){
    window.location = "index.html";
  });
});
$(function(){
  $("#lolfooter").click(function(){
    window.location = "LOL.html";
  });
});
$(function(){
  $("#surveyfooter").click(function(){
    window.location = "Survey.html";
  });
});
$(function(){
  $("#aboutfooter").click(function(){
    window.location = "About Us.html";
  });
});

//Survey link
$(function(){
  $("#link").click(function(){
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScotN-TD7OsICzYIZ6bzxL5qx2sUwY0QrJz-ng8GdkDG_TT1A/viewform?usp=sf_link", "_blank");
  });
});
//appearing result link
$("#link2").hide();

$("#link").click(function(){
  $("#link2").show();
});

//Result link
$(function(){
  $("#link2").click(function(){
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScotN-TD7OsICzYIZ6bzxL5qx2sUwY0QrJz-ng8GdkDG_TT1A/viewanalytics", "_blank");
  });
});

//feedback
$("#anon, #resp").hide();
$(function(){
  $("#subm").click(function(){

    $("#noFeedback").text("2 Feedbacks");
    $("#resp").text($("#text").val());


    $("#anon, #resp").show();
  });
});

//fullscreen function
$('#patch1').on('click', function(){
  if (document.fullscreenElement){
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  } else {
    element = $('#patch1').get(0);
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  }
});
$('#patch2').on('click', function(){
  if (document.fullscreenElement){
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  } else {
    element = $('#patch2').get(0);
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  }
});
$('#patch3').on('click', function(){
  if (document.fullscreenElement){
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  } else {
    element = $('#patch4').get(0);
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  }
});
$('#patch4').on('click', function(){
  if (document.fullscreenElement){
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  } else {
    element = $('#patch4').get(0);
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
  }
});
