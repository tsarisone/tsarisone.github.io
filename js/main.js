$(document).ready(function(){

  $('#tour > button').click(function() {
      $('.photos-tour').slideToggle();
      $('.vacation').slideToggle();
  });
  
  $('.photos-tour > div').mouseenter(function(){
      $(this).find('span').slideToggle();
    });
  $('.photos-tour > div').mouseleave(function(){
      $(this).find('span').slideToggle();
    });
  
  $('.vacation').on('keyup', '.quantity', function() {
    var price = +$(this).closest('.vacation').data('price'); /* + to convert string to a number */
    var quantity = +$(this).val();
    $('#total').text(price * quantity);
  });
  $('.quantity').on('focus', function() {
    $(this).val('1');
  });
  var amountBooks = 0;
  var totalBooksPrice = 0;
  $('.book').on('click', function(){
    amountBooks += 1;
    totalBooksPrice += $(this).data('price');
    $('.books-buy').append('<p>' + amountBooks + '. ' + $(this).data('name') + ' &mdash; ' + $(this).data('price') + '</p>');
    $('.total-books-price').addClass('price-blinked');
    $('.total-books-price').text(totalBooksPrice);
  });
  $('.book').on('mouseenter', function(){
    $(this).find('.sale').show('fast');
  });
  $('.book').on('mouseleave', function(){
    $(this).find('.sale').hide('fast');
  });
  
  
});