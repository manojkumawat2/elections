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

    $('.select_constituency').select2();

    $('.candidate_edit').on('click', function(event) {
        const constituency_id = $(this).attr('data-constituency_id');
        $('#addCandidateModalLabel').text('Edit Candidate Detail');
        $('#name').val($(this).attr('data-candidate_name'));
        $('#candidate_id').val($(this).attr('data-candidate_id'));
        $('#email').val($(this).attr('data-candidate_email'));
        $('#mobile_number').val($(this).attr('data-mobile_number'));
        $('#party_name').val($(this).attr('data-party_name'));
        $(".select_constituency option[value=" + constituency_id + "]").attr("selected", true).trigger('change');
        $('#addCandidateModal').modal('show');
    });

    $('.add_new_candidate_btn').on('click', () => {
        $('#addCandidateModalLabel').text('Add New Candidate');
        $('#name').val('');
        $('#candidate_id').val('');
        $('#email').val('');
        $('#mobile_number').val('');
        $('#party_name').val('');
        $('#addCandidateModal').modal('show');
    });

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
                success: candidate_form_success,
                error: form_error,
            });
            return false;
        }
    });
}

function candidate_form_success(data) {
    if (data.success == 'success') {
        $('#addCandidateModal').modal('hide');
        show_success_modal(data.successMsg, '');
    } else {
        form_error(data.errorMsg);
    }
}
