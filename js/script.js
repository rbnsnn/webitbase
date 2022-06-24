$(document).ready(function() {

    $(window).scroll( function(){

        $('.fadein').each( function(i){



            var bottom_of_element = $(this).offset().top + $(this).outerHeight();

            var bottom_of_window = $(window).scrollTop() + $(window).height();



            if( bottom_of_window > bottom_of_element ){

                $(this).animate({'opacity':'1'},1000);

            }


        });

    });

});


(function ($) {
    "use strict";

    /*==================================================================
    [ Validate after type ]*/
    $('.validate-input .input100').each(function(){
        $(this).on('blur', function(){
            if(validate(this) == false){
                showValidate(this);
            }
            else {
                $(this).parent().addClass('true-validate');
            }
        })
    })


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $(document).ready(function(){
    $("#reused_form").submit(function(event){

      function val(){
      var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;

            }
        }
        return check;
      }

      event.preventDefault();

      if (val() == true){
      $.ajax({
        type: "POST",
        url: "../php/contact-form-handler.php",
        data: $("#reused_form").serialize(),
        success: function(){
          $('.validate-form').fadeOut(400);
          $('.message').fadeIn(1000);
        }
      });
    }});
  });




    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
           $(this).parent().removeClass('true-validate');
        });
    });

     function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');

        $(thisAlert).append('<span class="btn-hide-validate">&#xf057;</span>')
        $('.btn-hide-validate').each(function(){
            $(this).on('click',function(){
               hideValidate(this);
            });
        });
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();
        $(thisAlert).removeClass('alert-validate');
        $(thisAlert).find('.btn-hide-validate').remove();
    }


})(jQuery);
