var itemPic, itemTitle, itemDesc, itemCurr, itemPrice;

payload.results.forEach(function(result){
    itemPic = result.Images[0].url_170x135;
    itemTitle = result.title;
    itemDesc = result.description;
    itemCurr = result.currency_code;
    itemPrice = result.price;
    // var output = '<div class="item">' + item_pic + item_title + item_desc + item_price + item_curr + '</div>'
    // document.getElementById("item").innerHTML=output;

    var item = '<div class="item"><img src=' + itemPic + ' /><p>' + itemTitle + '</p><br><span class="text-right">' + itemPrice + itemCurr + '</span></div>';
    $('#items').append(item);
});


 //Tims solution for soundcloud https://gist.github.com/twhitacre/e896f433f5221ecb6a57  
    // var track, title, artwork;
    //     rocktracks.forEach (function (a) {
    //       title = '<p>' + a.title + '</p>';
    //       artwork = '<img src="' + a.artwork_url + '" />';
    //       track = '<li>' + artwork + title;
    //       track += '</li>';
    //       $('#tracks').append(track);
    // });
