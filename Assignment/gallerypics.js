$(document).ready(function(){

var url =
    "https://api.flickr.com/services/feeds/photos_public.gne?" +
    "id=188077811@N04&format=json&jsoncallback=?";

$.getJSON(url, function(data) {
    var html = "";

    $.each(data.items, function(i, item){
        html += "<a href=" + item.media.m + " data-lightbox='pics' data-title='" + item.title + "'> <img src=" + item.media.m + "></a>";
    });
    $("#flickr").html(html);

});
});