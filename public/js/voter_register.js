$(document).ready(function() {
    $('#email_verification_button').on('click', () => {
        const email = $('#email').val();
        if(ValidateEmail(email)) {
            let url = baseURL + 'new_otp';
            let data = {
                'email': email,
                'type': 'mail'
            };

            $.ajax(url, {
                data: data,
                type: 'POST',
                success: (result) => {

                },
                error: () => {

                }
            });
        }
        return false;
    });
});

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}


function validate_voter_registration_form() {
    $('.voter_registration_form').validate({
        onfocusout: function (element) {
            $(element).valid();
        },
        errorClass: 'is-invalid',
        validClass: 'is-valid',
        errorElement: 'div',
        rules: {
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8
            }
        },
        errorPlacement: function (error, element) {
            $(error).addClass('small text-danger block');
            $(error).insertAfter($(element).parent());
        },
        submitHandler: function (form) {
            let url = $(form).attr('action');
            let data = $(form).serialize();
            $(".form_submit").attr('disabled', true);
            $.ajax(url, {
                data: data,
                type: 'POST',
                success: form_success,
                error: form_error,
            });
            return false;
        }
    });
}