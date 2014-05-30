// drop down menu js page

$(document).ready(function(){

  $("ul").hide();

  function cellMouseIn() {
      $(this).css("background-color", "#BABABA");
      $(this).children("ul").show()
  }

  function cellMouseOut() {
      $(this).css("background-color", "#E3E3E3");
      $(this).children().eq(1).hide();
  }

  function listMouseIn() {
      $(this).css("background-color", "#BABABA");
      $(this).children("ul").show()
  }

  function listMouseOut() {
      $(this).css("background-color", "#E3E3E3");
      $(this).children().eq(1).hide();
  }

  $(".cell").hover(cellMouseIn, cellMouseOut);

  $(".dropdown-menu-item").hover(listMouseIn, listMouseOut);

});


