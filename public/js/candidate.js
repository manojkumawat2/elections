$(document).ready(function () {
    $(document).ready(function () {
        $("#candidate_search").on("keyup", function () {
            var value = $(this).val().toLowerCase();
            $("#candidate_table_body tr").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
    validate_candidate_form();
});

function validate_candidate_form() {
    $('#candidate_form').validate({
        onfocusout: function (element) {
            $(element).valid();
        },
        errorClass: 'is-invalid',
        validClass: 'is-valid',
        errorElement: 'div',
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            mobile_number: {
                required: true
            },
            party_name: {
                required: true
            },
            constituency: {
                required: true
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
    console.log(data);
    if (data.success == 'success') {
        show_success_modal(data.successMsg, '');
    } else {
        form_error(data.errorMsg);
    }
}
