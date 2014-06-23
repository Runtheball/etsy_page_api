var itemPic, itemTitle, itemDesc, itemCurr, itemPrice;

payload.results.forEach(function(result){
    itemPic = result.Images[0].url_170x135;
    itemTitle = result.title;
    itemDesc = result.description;
    itemCurr = result.currency_code;
    itemPrice = result.price;
    // var output = '<div class="item">' + item_pic + item_title + item_desc + item_price + item_curr + '</div>'
    // document.getElementById("item").innerHTML=output;

    var item = '<div class="item"><img src=' + itemPic + ' /><p>' + itemTitle + '</p><br><span class="item_price">' + itemPrice + " " + itemCurr + '</span></div>';
    $('#items').append(item);
});



