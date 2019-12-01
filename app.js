/*!
 * jQuery Cascade plugin boilerplate
 * Original author: @fullzero5
 * this joke plugin
 * Licensed under the MIT license
 */
;(function($, window, document, undefined ){
    let pluginName = 'Cascade',
        defaults = {
            el: $('p')
        };
    function Plugin( element, options ) {
        this.element = element;    
        this.options = $.extend( {}, defaults, options) ;    
        this._defaults = defaults;
        this._name = pluginName;    
        this.init();
    }
    Plugin.prototype.init = function () {
        // Run Code
        let t = $(this.element).text().replace(/\s/g, unescape('%a0')),
            o = '';
        for(let i = 0; i< t.length; i++) {
            o += '<span class="normal">' + t[i] + '</span>';
        }
        $(this.element).html(o);
        function drop(){
            let s = $('span.normal');
            if (s.length == 0) {
                return;
            }
            s.eq(Math.floor(Math.random() * s.length)).addClass('fallen').removeClass('normal');
            window.setTimeout(drop, 60);
        }    
        drop();
    };
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Plugin( this, options ));
            }
        });
    }
  })(jQuery, window, document );

$(document).ready(function(){
  $("p").Cascade();
});
