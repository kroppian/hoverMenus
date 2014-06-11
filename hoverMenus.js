// drop down menu js page

$(document).ready(function(){

  $("ul :first-child").removeClass("dropdown-menu-item");
  $("ul :first-child").addClass("dropdown-menu-item-top");

  $("ul").hide();

  function dropPointMouseIn() {
      $(this).children("ul").show()
  }

  function dropPointMouseOut() {
      $(this).children("ul").hide();
  }

  function listMouseIn() {
      $(this).css("background-color", "#BABABA");
      //$(this).children("ul").show()
  }

  function listMouseOut() {
      $(this).css("background-color", "#E3E3E3");
      //$(this).children("ul").hide();
  }

  $(".drop-point").hover(dropPointMouseIn, dropPointMouseOut);

  $(".dropdown-menu-item,.dropdown-menu-item-top").hover(listMouseIn, listMouseOut);

});


