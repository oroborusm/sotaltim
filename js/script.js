$(function() {
    var cober = $('.cobertor');
    var frame = $('.contieneVid');
    $(cober).on('click', function(){
    		$(cober).slideToggle();
    		$(frame).css( 'opacity', '1');
    });

    var botom = $(".click");
    var back = $(".volver");
    var i=0;

    $(botom).each(function(i) {
        i++;
        $(this).on("click", function() {
          $(".fuera").hide();
          $(".bu"+i).slideToggle();
        })
        $(".volver").on('click',function(){
    		$(".fuera").fadeOut();
    	})
    });



    var $container  = $('#ib-container'),
        $articles   = $container.children('article'),
        timeout;

    $articles.on( 'mouseenter', function( event ) {

        var $article    = $(this);
        clearTimeout( timeout );
        timeout = setTimeout( function() {

            if( $article.hasClass('active') ) return false;

            $articles.not( $article.removeClass('blur').addClass('active') )
                     .removeClass('active')
                     .addClass('blur');

        }, 30 );

    });

    $container.on( 'mouseleave', function( event ) {

        clearTimeout( timeout );
        $articles.removeClass('active blur');

    });
});
