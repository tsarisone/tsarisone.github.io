$(document).ready(function () {

  $('#tour > button').on('click', function () {
    $('.photos-tour').slideToggle();
    $('.vacation').slideToggle();
  });
  
  $('.photos-tour > div').mouseenter(function () {
      $(this).find('span').slideToggle();
  });
  $('.photos-tour > div').mouseleave(function () {
      $(this).find('span').slideToggle();
  });
  
  var bookHtml = 0, bookCss = 0, bookPhp = 0, booksAmount = 0;
  
  function totalBooksPrice() {
    return bookHtml * +$('#input-book-html').data('price') + bookCss * +$('#input-book-css').data('price') + bookPhp * +$('#input-book-php').data('price');
  } 
  
  function showBooksPrice() {
    return $(".total-books-price").text(totalBooksPrice());
  }
  
  $('.book').on('click', function () {
    if ($(this).data('name') === 'book-html') {
      $('#input-book-html').val(+$('#input-book-html').val() + 1);
      booksAmount++;
      bookHtml++;
      showBooksPrice();
    }
    else if ($(this).data('name') === 'book-css') {
      $('#input-book-css').val(+$('#input-book-css').val() + 1);
      booksAmount++;
      bookCss++;
      showBooksPrice();
    }
    else {
      $('#input-book-php').val(+$('#input-book-php').val() + 1);
      booksAmount++;
      bookPhp++;
      showBooksPrice();
    }
  });
  
  $('.books-price input').on('focus', function () {
    $(this).closest('p').find('span').addClass('selected-book-input');
  });
  
  $('.books-price input').on('blur', function () {
    $(this).closest('p').find('span').removeClass('selected-book-input');
  });
  
  $('.books-price input').on('keyup', function () {
    if ($(this).data('name') === 'book-html') {
      bookHtml = +$(this).val();
      booksAmount += bookHtml;
    }
    else if ($(this).data('name') === 'book-css') {
      bookCss = +$(this).val();
      booksAmount += bookCss;
    }
    else {
      bookPhp = +$(this).val();
      booksAmount += bookPhp;
    }
    $(".total-books-price").text(totalBooksPrice);  
  });
  
  $('.book').on('mouseenter', function () {
    $(this).find('.sale').show('fast');
  });
  $('.book').on('mouseleave', function () {
    $(this).find('.sale').hide('fast');
  });
  
  $('.download > a').on('click', function () {
    $('.download-books').text(+$('.download-books').text() + 1);
  });
  
});