var listedSections = [];

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(".container").on('resize scroll', function() {
  $('.section').each(function() {
    var activeSection = $(this).attr('id');
    if($(this).isInViewport()) {
      if(listedSections.indexOf(activeSection) == -1) { //element not in list
        // add the element to the cli
        $('.text').append('<p>>>> arman the <b>'+activeSection+'</b></p>')
        listedSections.push(activeSection);

        console.log(activeSection)

        // if(activeSection == 'photographer') addPhotos(); //photographer.js
      }
    } else {
      if(listedSections.indexOf(activeSection) == listedSections.length - 1) {
        // remove the element from the cli
        $('.text').children().last().remove();
        listedSections.splice(-1,1);
      }
    }
  });
});