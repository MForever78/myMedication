$('#submitNewDrug').on('click', function() {
  $('#newDrug').submit();
});

$('button[name=addReminder]').on('click', function() {
  $(this).parent().prevAll('.modal-body').children('form').submit();
});

$(':checkbox').on('click', function() {
  var drugId = $(this).attr('name').toString().slice(8);
}); 
