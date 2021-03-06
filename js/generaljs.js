//  ------------------ CODE FOR THE MODAL ------------------ //

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


// -------------- CODE FOR GALLERY CAROUSEL ---------- // 

$(document).ready(function () {
  $('.carousel[data-type="multi"] .item').each(function () {
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < 6; i++) {
      next = next.next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }

      next.children(':first-child').clone().appendTo($(this));
    }
  });
});

// ------------- THIS IS FOR GALLERY WHEN YOU CLICK A PICTURE ---------------

$(document).ready(function () {
  $('.img-responsive').on('click', function () {
    var num_thumbnails = $('.img-responsive').children().length;
    var sr = $(this).children('img').attr('src');
    var clicked_thumbnail_index = $($('.img-responsive')).index(this);
    if (num_thumbnails > 1) {
      $('nav').html('<button type="button" class="previous">Prev</button><button type="button" class="next">Next</button>');
    }

    var caption = $(this).children('img').attr('alt');
    $('#modal-image').attr('src', sr);
    $('h4.modal-image-caption').html(caption);
    $('#myModal').modal('show');
  });

});