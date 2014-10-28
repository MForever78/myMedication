$('#submitNewDrug').on('click', function() {
  $('#newDrug').submit();
});

$('button[name=addReminder]').on('click', function() {
  $(this).parent().prevAll('.modal-body').children('form').submit();
});

$(':checkbox').on('click', function() {
  var drugId = $(this).attr('name').toString().slice(8);
}); 

var tags = [ "Diltiazem", "Verapamil", "Hydrochlorothiazide", "Propranolol", "Atenolol"];

$( "#searchBox" ).autocomplete({
  source: function( request, response ) {
          var matcher = new RegExp( "^" + $.ui.autocomplete.escapeRegex( request.term ), "i" );
          response( $.grep( tags, function( item ){
              return matcher.test( item );
          }) );
      }
});

var editor = new Simditor({
  textarea: $('#description')
});
