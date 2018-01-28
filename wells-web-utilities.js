// wells-utilities
// https://github.com/giathienpham/wells-web-utilities


$(document).ready(function () {

    $('.selected_rows_counter').html('0');
    $('.wells-selectable thead tr:first-child th:first-child input[type="checkbox"]').click(function(event) {
        $(this).closest('table').find('td:first-child input:checkbox').prop('checked', this.checked);
        $(".selected_rows_counter[data-target=" + $(this).closest('table').attr('id') + "] ").html($('tr td:first-child :checkbox:checked').length)
    });

    $('tr td:first-child :checkbox').click( function () {
        $(".selected_rows_counter[data-target=" + $(this).closest('table').attr('id') + "] ").html($('tr td:first-child :checkbox:checked').length)
    });
});

