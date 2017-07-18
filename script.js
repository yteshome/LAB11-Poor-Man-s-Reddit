$(document).ready(function() {

  $.get('https://www.reddit.com/r/aww/.json').done (function(json) {

    //Declaring variable payload
    var payload = json.data.children;
    payload.forEach(function(items){
      // console.log(items.data.title);

      $('body').append('<div><h3>' + items.data.title + '</h3><img src=' + items.data.thumbnail + '><p>' + items.data.author + '</p></div>');
    });

  })

});
