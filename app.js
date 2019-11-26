$(document).ready(function(){
    $('head').append('<style type="text/css">span{-webkit-transition:all 10s ease-in;transition:all 10s ease-in;display:inline-block;}.fallen{-webkit-transform:translate(0,1000px);transform:translate(0,1000px);}p{margin:3em 5em;}</style>');
    var p = $('p');
    p.each(function(){
        var t = $(this).text().replace(/\s/g, unescape('%a0')); 
        var o = '';
        for(var i = 0; i< t.length; i++){o += '<span class="normal">' + t[i] + '</span>';}
        $(this).html(o);
    });
    function drop(){
     var s = $('span.normal');
      if (s.length == 0){
       return;
    } 
    s.eq(Math.floor(Math.random() * s.length)).addClass('fallen').removeClass('normal');
	  window.setTimeout(drop, 60);
    }
    drop();
});
