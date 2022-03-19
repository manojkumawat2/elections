$(document).ready(function () {
    $('.sidenav-toggle').on('click', () => {
        $('.sidebar').show();
        $('#body').removeClass('full-width-body');
    });
    $('.sidebar-close').on('click', () => {
        $('.sidebar').hide();
        $('#body').addClass('full-width-body');
    });
});

function form_error(error) {
    $('.form_error_msg').text(error);
    $('#form_error').modal('show');
}

function show_success_modal(successMsg, redirectLink) {
    $('#form_success_msg').text(successMsg);
    $('.form_success_link').attr('href', redirectLink);
    $('#form_success').modal('show');
}