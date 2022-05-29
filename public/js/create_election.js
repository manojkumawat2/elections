$(document).ready(function () {
    $('#summernote').summernote({
        placeholder: 'Enter Description',
        tabsize: 2,
        height: 400
    });
    $(".select_constituency").chosen({no_results_text: "Oops, nothing found!"}); 
    //$(".select_candidates").chosen({no_results_text: "No Candidate found in this constituency!"});

    $(".select_constituency").on('change', function() {
        const selected_constituency = $(".select_constituency").find(":selected").val();
        const url = "http://localhost:8080/admin/get_candidates/" + selected_constituency;

        $.ajax(url, {
            type: 'GET',
            success: (result) => {
                let candidates = result.candidates;
                candidates.forEach(element => {
                    $('.select_candidates').append(`<option value=${element.id}>${element.candidate_name}</option>`);
                });
            },
            error: () => {

            }
        });
    });
    create_election_form();
});

function create_election_form() {
    $("#add_new_election").validate({
        onfocusout: function (element) {
            $(element).valid();
        },
        errorClass: 'is-invalid',
        validClass: 'is-valid',
        errorElement: 'div',
        rules: {
            title: {
                required: true,
            },
            constituency: {
                required: true,
            },
            candidates: {
                required: true,
            },
            description: {
                required: true,
            },
            start_time: {
                required: true,
            },
            end_time: {
                required: true,
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
        show_success_modal(data.successMsg, '');
    } else {
        form_error(data.errorMsg);
    }
}
