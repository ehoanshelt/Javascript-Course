$(document).ready(function(){
    $("blockquote").text("Hello World!");
    
    setTimeout(function(){
       $("blockquote").text("Are you still looking at me?");
    }, 2000);
});