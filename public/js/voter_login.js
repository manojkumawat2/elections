$(document).ready(function() {
    validate_login_form();
})
function validate_login_form() {
    $('#voter_login_form').validate({
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

function form_success(data) {
    if (data.status == 'success') {
        window.location.href = baseURL + 'voter/';
    }
}
