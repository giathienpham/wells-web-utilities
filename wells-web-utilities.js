// wells-utilities
// https://github.com/giathienpham/wells-web-utilities

/*
* Select all rows by clicking checkbox in the first row of thead
* This also update the .selected_rows_counter
*/
$(document).ready(function () {
    $('.selected_rows_counter').html('0');
    $('.wells-selectable thead tr:first-child th:first-child input[type="checkbox"]').click(function(event) {
        $(this).closest('table').find('td:first-child input:checkbox').prop('checked', this.checked);
        $(".selected_rows_counter[data-target=" + $(this).closest('table').attr('id') + "] ").html($('tr td:first-child :checkbox:checked').length)
    });

});

/*
* Update the .selected_rows_counter
*/
$(document).ready(function () {
    $('.wells-selectable tbody tr td:first-child :checkbox').click( function () {
        $(".selected_rows_counter[data-target=" + $(this).closest('table').attr('id') + "] ").html($('tr td:first-child :checkbox:checked').length)
    });
});

