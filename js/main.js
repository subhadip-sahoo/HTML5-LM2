jQuery(document).ready(function () {

	// if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	//     var msViewportStyle = document.createElement("style");
	//     msViewportStyle.appendChild(
	//       document.createTextNode("@-ms-viewport{width:auto!important}")
	//     );
	//     document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
	//   }
	  
	//MENU CLICK GO LINK SECTION
	// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
	jQuery('.table-nav-menu li a').click(function(e){
		e.preventDefault();

		jQuery('.table-nav-menu ul li a').removeClass('active');
		jQuery(this).addClass('active');

		jQuery(this).parent().parent().parent().slideUp(500);

		var target_link = this.hash;
		console.log(target_link);
		var target_linkID = jQuery(target_link);



		jQuery('html, body').stop().animate({
			'scrollTop': target_linkID.offset().top
		}, 2400, 'swing');
		jQuery('.main-page.current-section').removeClass('current-section');
		target_linkID.addClass('current-section');
	});
    
	//MENU CLICK GO TO SECTION
	// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    jQuery('.go-to-section').click(function(e){
	e.preventDefault();

	//		jQuery('.table-nav-menu ul li a').removeClass('active');
	//		jQuery(this).addClass('active');
	//
	//		jQuery(this).parent().parent().parent().slideUp(500);

		var target_link = this.hash;
		console.log(target_link);
		var target_linkID = jQuery(target_link);



		jQuery('html, body').stop().animate({
			'scrollTop': target_linkID.offset().top
		}, 2400, 'swing');
	//		jQuery('.main-page.current-section').removeClass('current-section');
	//		target_linkID.addClass('current-section');
	});

	//SCROLL TO TOP
	// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	jQuery(window).scroll(function(){
		if (jQuery(this).scrollTop() > 400) {
			jQuery('.scroll-top').fadeIn();
		} else {
			jQuery('.scroll-top').fadeOut();
		};
	});

	jQuery('.scroll-top').click(function (e) {
		e.preventDefault();

		jQuery('.table-nav-menu ul li').removeClass('active');

		jQuery('html, body').animate({
			'scrollTop': 0
		}, 800);
		jQuery('.main-page.current-section').removeClass('current-section')
		jQuery('.main-page').first().addClass('current-section');

		return false;
	});

	// MENU DROPDOWN LINK 
	// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	jQuery('.dropdown').hide();
	jQuery('.dropdown-link').click(function (e) {
		e.preventDefault();

		jQuery(this).toggleClass('show-dropdown');
		jQuery(this).next('.dropdown').slideToggle();

		jQuery('.search-dropdown').slideUp();

		return false;		
	});

	// NAV BAR FIXED WHEN SCROLL
	// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	var navbar = jQuery('.full-nav-container');

	var navbarPOS = navbar.offset().top;

	console.log(navbarPOS);

	jQuery(window).scroll(function(event) {
            var fixedNAVbar = (jQuery(this).scrollTop() > navbarPOS) ? true : false;

            navbar.toggleClass('navbar-fixed', fixedNAVbar);
            jQuery('body').toggleClass('body-fixed', fixedNAVbar);
	});

	// FRONT PAGE HEIGHT
	// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	var pageHeight = jQuery(window).height()-jQuery('.header-container').height();
	jQuery('.main-front-page').css('height', pageHeight);

	console.log(jQuery(window).height()-jQuery('.header-container').height());
        
	jQuery( window ).resize(function() {
	  jQuery('.main-front-page').css('height', pageHeight);
	  console.log(pageHeight);
	});

	// SEARCH FEILD SEARCH TEXT
	// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	jQuery('#close_highlights').hide();

    jQuery('#search-form').bind({
        submit: function(ev){
            var searchTerm = jQuery('#text-search').val();

            jQuery('section.main-page').removeHighlight();
            if ( searchTerm ) {
                jQuery('section.main-page').highlight( searchTerm );
                jQuery('#close_highlights').fadeIn();
            }
        }
    });

	jQuery('#close_highlights').on('click', function(event) {
		jQuery('section.main-page').removeHighlight();
        jQuery('span.highlight').fadeOut(1000);
        jQuery("#search-lists").parent().slideUp();
        jQuery(this).fadeOut();
        
        jQuery("#text-search").attr("placeholder", "Search").val("").focus().blur();
		console.log('close click');
	});

    jQuery(document).delegate('#search-lists li a','click',function(e){
        jQuery("#search-lists").parent().slideUp();
        e.preventDefault();
        var target_link = this.hash;
        console.log(target_link);
        var target_linkID = jQuery(target_link);

        jQuery('html, body').stop().animate({
                'scrollTop': target_linkID.offset().top
        }, 2400, 'swing');

        jQuery('.main-page.current-section').removeClass('current-section');
		target_linkID.addClass('current-section');
    });

    jQuery(window).click(function () {
		jQuery('.dropdown').slideUp();
		jQuery('.dropdown-link').removeClass('show-dropdown');
		jQuery('.search-dropdown').slideUp();
	});
	// $(document).on('click touchleave', function () {
	// 	jQuery('.dropdown').slideUp();
	// 	jQuery('.dropdown-link').removeClass('show-dropdown');
	// 	jQuery('.search-dropdown').slideUp();
	// });
// $('body').on('click tap', function () {
// 		jQuery('.dropdown').slideUp();
// 		jQuery('.dropdown-link').removeClass('show-dropdown');
// 		jQuery('.search-dropdown').slideUp();
// 	});
	// $('.dropdown').bind('clickoutside', function (event) {
	//     $(this).slideUp();
	// });
   /* jQuery('.dropdown').parents('body').on('click touchstrat', function(e) {
        jQuery('.dropdown').slideUp();
		jQuery('.dropdown-link').removeClass('show-dropdown');
		jQuery('.search-dropdown').slideUp();
    });*/

    jQuery('.full-area').on('click touchstart', function(e) {
        jQuery('.dropdown').slideUp();
		jQuery('.dropdown-link').removeClass('show-dropdown');
		jQuery('.search-dropdown').slideUp();
    });


// FOR IPHONE SEARCH FIELD 
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	if (Modernizr.touch) {
	    var $body = jQuery('body'); 

	    $(document)
	    .on('focus', 'input', function(e) {
	        $body.addClass('fixfixed');
	    })
	    .on('blur', 'input', function(e) {
	        $body.removeClass('fixfixed');
	    });
	    jQuery('.dropdown').slideUp();
	}

	// jQuery(window).scroll(function(){
		

	// 	if (jQuery(this).scrollTop() > firstApper) {

	// 		jQuery('.scroll-next-section').fadeIn();

	// 		return false;
	// 	};
	// 	if (jQuery(this).scrollTop() > lastApper) {
	// 		jQuery('.scroll-next-section').fadeOut();

	// 		return false;
	// 	}

	// 	console.log(firstApper);
	// 	console.log(lastApper);
	// });
	
	// jQuery(window).scroll(function(){
	// 	if (jQuery(this).scrollTop() > firstApper) {
	// 		jQuery('.scroll-next-section').fadeIn();
	// 	} else {
	// 		jQuery('.scroll-next-section').fadeOut();
	// 	}
	// });

	//$('section.main-page').first();

	// jQuery(window).scroll(function(){
	// 	if (jQuery(this).scrollTop() > 500) {
	// 		jQuery('.go-to-section').fadeIn();
	// 	} else {
	// 		jQuery('.go-to-section').fadeOut();
	// 	};
	// });

	// $('a.scroll-next-section').on('click', function(e) {
	//     e.preventDefault();

	// 	var target_link = this.hash;
	// 	console.log(target_link);
	// 	var target_linkID = jQuery(target_link);



	// 	jQuery('html, body').stop().animate({
	// 		'scrollTop': target_linkID.offset().top
	// 	}, 2400, 'swing');

	// });

});

jQuery(function() {
    jQuery(document).on('click', function(e) {
        if (e.target.id != 'btnSearch') {
            jQuery('.search-dropdown').slideUp();

        }

    });
});

// FOR GO TO SECTION AND PAGE SCROLL MENU SELECT
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

$(document).ready(function() {
   
  $(".go-to-section").hide();
  $(document).scroll(function(){

    var docScroll = $(document).scrollTop(), 
        boxCntOfset = $(".main-front-page2").offset().top - 100;
    if(docScroll >= boxCntOfset ) {
      $(".go-to-section").fadeIn(200);
      $('.go-to-section').attr('href', '#section01');
    
    } else {
     $(".go-to-section").fadeOut(200)
    
    }
  })   
});

$(document).ready(function(){

	if (Modernizr.touch) {

		$('#text-search').on('focus', function(){
		    $('.full-nav-container').css({position:'absolute'});
		    $(window).scrollTop(0);
		    $('.dropdown').slideUp();
		});
		$('#text-search').on('blur', function(){
		    $('.full-nav-container').css({position:'fixed'});
		    $('.dropdown').slideUp();
		});
	}

    var aChildren = $(".table-link li").children(); 
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } 

    $(window).scroll(function(){
        var windowPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var docHeight = $(document).height();

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var $sectionID = theID;
            var divPos = $(theID).offset().top-300;
            var divHeight = $(theID).height(); 
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("active");
                var goToID = aArray[i + 1];
                $('.go-to-section').attr('href', goToID);
                console.log($(this));

            } else {
                $("a[href='" + theID + "']").removeClass("active");
            }
        }
        if(windowPos + windowHeight == docHeight) {
            if (!$(".table-link li:last-child a").hasClass("active")) {
                var navActiveCurrent = $(".nav-active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("active");
                $("#top-menu li:last-child a").addClass("active");
            }
        }
    });
});


