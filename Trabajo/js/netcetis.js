$( document ).ready(function() {
    $("#like").click(function(){
        var likes = $("#reactions").text();
        likes++;
        $("#reactions").text(likes);
    });

    $("#comment").click(function(){
        $("#comentario").toggle("slow");
    });

    $("#like2").click(function(){
        var likes = $("#reactions2").text();
        likes++;
        $("#reactions2").text(likes);
    });

    $("#comment2").click(function(){
        $("#comentario2").toggle("slow");
    });

    $("#like3").click(function(){
        var likes = $("#reactions3").text();
        likes++;
        $("#reactions3").text(likes);
    });

    $("#comment3").click(function(){
        $("#comentario3").toggle("slow");
    });
});