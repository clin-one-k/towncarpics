$(
function(){
console.log(dataJson);
    $("#selection").append("<ul id='picList'></ul>");
    for (var cnt = 0; cnt < dataJson.length; cnt++) {
          $("#picList").append("<li><span onclick='showPic("+cnt+")'>"+dataJson[cnt].title +"</span></li>");
    }

}
);
function showPic(n){
	$("#picture_div").html("<p>"+dataJson[n].description+"</p><img src='"+dataJson[n].url+"'>");
}