(function() {
  var i, images, imgElem, imgElements, items, len, options, pswpElement;

  pswpElement = document.querySelectorAll('.pswp')[0];

  images = {
    nailstyle: [
      {
        src: 'images/nailstyle/1.png',
        w: 1250,
        h: 630
      }, {
        src: 'images/nailstyle/2.png',
        w: 1250,
        h: 630
      }, {
        src: 'images/nailstyle/3.png',
        w: 1250,
        h: 630
      }
    ],
    frepi: [
      {
        src: 'images/frepi/1.png',
        w: 1250,
        h: 630
      }, {
        src: 'images/frepi/2.png',
        w: 1250,
        h: 630
      }, {
        src: 'images/frepi/3.png',
        w: 1250,
        h: 630
      }, {
        src: 'images/frepi/4.png',
        w: 1250,
        h: 630
      }, {
        src: 'images/frepi/5.png',
        w: 1250,
        h: 630
      }, {
        src: 'images/frepi/6.png',
        w: 1250,
        h: 630
      }
    ],
    nu3: [
      {
        src: 'images/nu3/1.jpg',
        w: 1440,
        h: 2560
      }, {
        src: 'images/nu3/2.jpg',
        w: 1440,
        h: 2560
      }, {
        src: 'images/nu3/3.jpg',
        w: 1440,
        h: 2560
      }
    ],
    izinotas: [
      {
        src: 'images/izinotas/1.png',
        w: 1775,
        h: 3000
      }, {
        src: 'images/izinotas/2.png',
        w: 1775,
        h: 3000
      }, {
        src: 'images/izinotas/3.png',
        w: 1775,
        h: 3000
      }, {
        src: 'images/izinotas/4.png',
        w: 1775,
        h: 3000
      }
    ]
  };

  options = {
    history: false,
    index: 0,
    shareEl: false
  };

  items = [];

  imgElements = document.querySelectorAll('#work img');

  for (i = 0, len = imgElements.length; i < len; i++) {
    imgElem = imgElements[i];
    imgElem.addEventListener('click', function(event) {
      var gallery;
      items = images[event.target.id];
      gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
      return gallery.init();
    });
  }

}).call(this);
