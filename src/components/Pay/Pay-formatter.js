import jQuery from 'jquery';
import $ from 'jquery';


// <------------ Format Numbers to Money Format --------------->
export const autoFormat = () => {
    $(function () {
        var $form = $(".flex");
        var $input = $form.find("input");

        var $this = $input;
        var input = $this.val(); // Get the value.
        var input = input.replace(/[\D\s\._\-]+/g, "");

        input = input ? parseInt(input, 10) : 0;

        $this.val(function () {
            return(input === 0) ? "" : input.toLocaleString("en-US");
        });
    });
}


export const FormatListValues = () => {

    $(function () {
        $(".money-option-value").each(function (index) {
            var input = $(this).text(); // Get the value.
            var input = input.replace(/[\D\s\._\-]+/g, "");
            input = input ? parseInt(input, 10) : 0;

            $(this).text("$" + (
                input.toLocaleString("en-US")
            ));
        });

        /* var $money_option = $(".money-option-value");
         
      var input = $money_option.text(); // Get the value.
      var input = input.replace(/[\D\s\._\-]+/g, "");
      input = input ? parseInt(input, 10) : 0;

      $money_option.text( "$" + (input.toLocaleString("en-US")) ); */
    });
    
}







// Format the numbers to Money format (Example: 25100 to 25,100)
(function ($, undefined) {

    "use strict";

    // When ready.
    $(function () {
        var $form = $(".flex");
        var $input = $form.find("input");

        $input.on("keyup", function (event) { // When user select text in the document, also abort.
            var selection = window.getSelection().toString();
            if (selection !== '') {
                return;
            }

            // When the arrow keys are pressed, abort.
            if ($.inArray(event.keyCode, [38, 40, 37, 39]) !== -1) {
                return;
            }


            var $this = $(this);

            // Get the value.
            var input = $this.val();

            var input = input.replace(/[\D\s\._\-]+/g, "");
            input = input ? parseInt(input, 10) : 0;

            $this.val(function () {
                return(input === 0) ? "" : input.toLocaleString("en-US");
            });
        });

        // Cuando se manda el formulario
        $form.on("submit", function (event) {

            var $this = $(this);
            var arr = $this.serializeArray();

            for (var i = 0; i < arr.length; i++) {
                arr[i].value = arr[i].value.replace(/[($)\s\._\-]+/g, ''); // Sanitize the values.
            };

            console.log(arr);

            event.preventDefault();
        });

    });
})(jQuery);
// <--------------------------------------------------------->






// <------------ Show alert if focus on Field --------------->
var $form = $(".flex");
var $input = $form.find("input");

export const focusAlert = () => { // alert("Hello My Baby, Hello Ma Honey");
    $('#changue-amount').slideDown();
}

export const unfocusAlert = () => { // alert("Hello My Baby, Hello Ma Honey");
    $('#changue-amount').fadeOut(300);
}
// <--------------------------------------------------------->






//<---------------- Changue Current Value ------------------->
export const selectValue = () => {
  alert("Cambiando valor..");
  $('input[type=text].money_input').val('95000');
  $('.money_input').attr('value', '95000')
  autoFormat();
}
//<---------------------------------------------------------->