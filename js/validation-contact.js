function validationContact() {

  subjet             = document.getElementById("form-subjet").value;
  name               = document.getElementById("form-name").value;
  email              = document.getElementById("form-email").value;
  tel1               = document.getElementById("form-phone").value;
  message            = document.getElementById("form-comment").value;

  if( subjet == null || subjet.length == 0 || /^\s+$/.test(subjet) ) {
    $('.subjet.error').css('display','block');
    return false;
  } else {
    $('.subjet.error').css('display','none');
  }

  if( name == null || name.length == 0 || /^\s+$/.test(name) ) {
    $('.name.error').css('display','block');
    return false;
  } else {
    $('.name.error').css('display','none');
  }

  if( email == null || email.length == 0 || /^\s+$/.test(email) ) {
    $('.email1.error').css('display','block');
    return false;
  } else {
    $('.email1.error').css('display','none');
  }

  expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!expr.test(email)) {
    $('.email2.error').css('display','block');
    return false;
  } else {
    $('.email2.error').css('display','none');
  }

  if( tel1 == null || tel1.length == 0 || /^\s+$/.test(tel1) ) {
    $('.phone.error').css('display','block');
    return false;
  } else {
    $('.phone.error').css('display','none');
  }

  if( message == null || message.length == 0 || /^\s+$/.test(message) ) {
    $('.message.error').css('display','block');
    return false;
  } else {
    $('.message.error').css('display','none');
  }

  return true;
}
