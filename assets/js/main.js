
// ----------- getting next digit after maxlength
 $(".input").keyup(function () {
        if (this.value.length == this.maxLength) {
          $(this).next('.input').focus();
        }
  });
 /////------------- accepting only num

$('.input').keypress
(
    function(event)
    {
        if (event.keyCode == 46 || event.keyCode == 8)
        {
        
        }
        else 
        {
            if (event.keyCode < 48 || event.keyCode > 57 ) // ascii character (0 t0 9)
            {
                event.preventDefault(); 
            }   
        }
    }
);

// ------------ after deleting focus in previous key
$(document).ready(function(){

  $(".input").keyup(function ()
    {
      var key = event.keyCode || event.charCode;
      var input = $('.input');
      if( key == 8 || key == 46 ) //dlt and backspace key
      {
        var indexNum = input.index(this);
        if(indexNum != 0)
        {
        input.eq(input.index(this) - 1).val('').focus();
        }
      }

    });
  }); 
// ---------keyside arrow
$(document).ready(function(){

  $(".input").keyup(function ()
    {
      var key = event.keyCode || event.charCode;
      var input = $('.input');
      if( key == 37  ) 
      {
        var indexNum = input.index(this);
        if(indexNum != 0)
        {
        input.eq(input.index(this) - 1).focus();
        }
      }
      else{
           if( key == 39 ) 
            {
              var indexNum = input.index(this);
              if(indexNum != 0)
              {
              input.eq(input.index(this) + input.length).focus();
              }
            }
       }

    });
  });
// document.querySelector('input').addEventListener('keyside', function(e) {
//     if (e.which === 37 || e.which === 39) {
//         e.preventDefault();
//     }
// });
// -------------
