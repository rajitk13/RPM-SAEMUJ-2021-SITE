// Contact Form button Success Green
$(".contact-submit").bind("click", (function () {
  $(".contact-submit").removeClass('btn-outline-secondary');
  $(".contact-submit").addClass('btn-success');

  setTimeout(function(){
    $(".contact-submit").removeClass('btn-success');
    $(".contact-submit").addClass('btn-outline-secondary');
  }, 10000);

}));

//Contact Form button Success Green -END

//Membership Alert
$(".membership-btn").bind("click",(function(){
  alert("Membership Currently Closed");
}));
