$(document).ready(function(){
    data = function() {};

    $.get('./data.json', function(response) {
        data = response;

        Utilities.init();
        Navigation.init();
        Questions.init();
        Result.init();
    }, 'json');

    var location = window.location.pathname.split("/").pop();
    if (location != "personality"){
      $('#animation').load('assets/animations/' + location + '.html', function () {
          animationInit();
      });
    }
});
