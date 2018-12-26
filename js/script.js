/*===================================
              preloader
===================================*/
$(window).on('load', function() { // make sure that whole site is loaded
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});

/*===================================
              Team
===================================*/
$(function() {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 1
      },
      // breakpoint from 480 up
      480: {
        items: 2
      }
    }
  });
});

/*===================================
              Progress Bars
===================================*/
$(function() {

  $("#progress-elements").waypoint(function() {

    $(".progress-bar").each(function() {
      $(this).animate({
        width: $(this).attr("aria-valuenow") + "%"
      }, 1000);
    });

    this.destroy();
  }, {
    offset: 'bottom-in-view'
  });

});
/*===================================
          Responsive Tabs
===================================*/
$(function() {
  $("#services-tabs").responsiveTabs({
    animation: 'slide'
  });
});

/*===================================
              Portfolio
===================================*/
$(window).on('load', function() {
  // Initialize isotope
  $("#isotope-container").isotope({});
  // filter items on button click
  $("#isotope-filters").on('click', 'button', function() {
    //  get filter value
    var filterValue = $(this).attr('data-filter');

    // filter portfolio
    $("#isotope-container").isotope({
      filter: filterValue
    });

    // active button
    $("#isotope-filters").find('.active').removeClass('active');
    $(this).addClass('active');
  });
});

/*===================================
              Magnifiler
===================================*/
$(function() {
  $("#portfolio-wrapper").magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});
/*===================================
              Testimonials
===================================*/
$(function() {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });
});
/*===================================
              Stats
===================================*/
$(function() {
  $(".counter").counterUp({
    delay: 10,
    time: 3000
  });
});
/*===================================
              Clients
===================================*/
$(function() {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 2
      },
      // breakpoint from 480 up
      480: {
        items: 3
      },
      // breakpoint from 768 up
      768: {
        items: 6
      }
    }
  });
});
/*===================================
            Google Map
===================================*/

$(window).on('load', function() {
  // Map variables
  var addressString = '230 Broadway, NY, New York 10007, USA';
  var myLatlng = {
    lat: 40.712742,
    lng: -74.005966
  };

  // 1. Render Google Map
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: myLatlng,
    styles: [{
        elementType: 'geometry',
        stylers: [{
          color: '#242f3e'
        }]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#242f3e'
        }]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#746855'
        }]
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#d59563'
        }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#d59563'
        }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{
          color: '#263c3f'
        }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#6b9a76'
        }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{
          color: '#38414e'
        }]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#212a37'
        }]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#9ca5b3'
        }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{
          color: '#746855'
        }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#1f2835'
        }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#f3d19c'
        }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{
          color: '#2f3948'
        }]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#d59563'
        }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
          color: '#17263c'
        }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#515c6d'
        }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#17263c'
        }]
      }
    ]
  });
  // 2. Add marker
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: "Click To See Address"
  });
  // 3. Add Info Window
  var infowindow = new google.maps.InfoWindow({
    content: addressString
  });

  // Show info window when user clicks marker
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  // 4. resize Function
  google.maps.event.addDomListener(window, 'resize', function() {

    var center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);
  });

});
/*===================================
            Google Map
===================================*/
/* Show & Hide White Navigation */
$(function() {

  // show/hide nav on page load
  showHideNav();

  $(window).scroll(function() {

    // show/hide nav on window's scroll
    showHideNav();
  });

  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      // Show white nav
      $("nav").addClass("white-nav-top");

      // Show Dark logo
      $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");

      //Show back to top botton
      $("#back-to-top").fadeIn();
    } else {
      // Hide white nav
      $("nav").removeClass("white-nav-top");

      // Show logo
      $(".navbar-brand img").attr("src", "img/logo/logo.png");

      //Hide back to top botton
      $("#back-to-top").fadeOut();
    }
  }
});

// Smooth Scrolling
$(function() {
  $("a.smooth-scroll").click(function(even) {
    event.preventDefault();
    // get section id like #about, #services, #work, #team and etc.
    var section_id = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(section_id).offset().top - 64
    }, 1250, "easeInOutExpo");
  });
});

/*===================================
            Mobile Menu
===================================*/
$(function() {

  // Show mobile nav
  $("#mobile-nav-open-btn").click(function() {
    $("#mobile-nav").css("height", "100%");
  });

  // Hide mobile nav
  $("#mobile-nav-close-btn, #mobile-nav a").click(function() {
    $("#mobile-nav").css("height", "0%");
  });

});
