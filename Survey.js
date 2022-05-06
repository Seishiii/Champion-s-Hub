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

//Feedback
$("#anon, resp").hide();

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

//Feedback
// function get(){
//   var input = document.getElementById("text").value;
//
//   document.getElementById("resp").innerHTML = (input);
//
//   document.getElementById("text").value=null;
// }
