Utilities=function(){function e(){t&&$.each(t,function(e,s){clearTimeout(s),t.splice(e,1)}),t.push(setTimeout(a,9e4))}var t=[],s=function(){$(document).on("click tap",e),$(document).on("click tap",".start-quiz",i),$(document).on("click tap",".home-button",a)},a=function(){$attract=$("#introduction"),$("body").scrollTop(0),$attract.hasClass("hidden")&&($attract.removeClass("hidden").removeClass("fade").addClass("in"),$(".home-button").addClass("fade").removeClass("in"),$("#logo-image").removeClass("smaller"),Questions.clearQuiz(),Questions.resetWaterLevel(),Result.clearCalculate(),Result.clearResults(),Result.fadeAnimation(),o(),sendGAEvent("Home Screen"))},i=function(){$attract=$("#introduction"),$attract.hasClass("hidden")||($attract.addClass("hidden").removeClass("in"),$(".home-button").removeClass("fade").addClass("in"),$("#logo-image").addClass("smaller"),Questions.buildQuestions())},o=function(){($("#gui").hasClass("fade")||$("#gui").css("height","0px"))&&($("#gui").removeClass("hidden").removeClass("fade").addClass("in"),$("#gui").css("height","auto"),$(".logo").removeClass("fade").addClass("in").removeClass("smaller"))};return{init:function(){s()},resetTimeout:e,resetInteractive:a}}();