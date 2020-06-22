function validationJob() {

  name               = document.getElementById("form-name").value;
  email              = document.getElementById("form-email").value;
  file              = document.getElementById("form-file").value;

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

  if( file == null || file.length == 0 || /^\s+$/.test(file) ) {
    $('.file.error').css('display','block');
    $('.btn-file').css('bottom','60px');
    return false;
  } else {
    $('.file.error').css('display','none');
    $('.btn-file').css('bottom','40px');
  }


  return true;
}
