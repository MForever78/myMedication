suite('Global Tests', function() {
  test('page has a valid title', function() {
    assert(document.title && document.title.match(/\S/));
  });
  test('jQuery has successfully loaded', function() {
    assert(document.title === $("title").text());
  });
  test('Bootstrap script has successfully loaded', function() {
    assert($.fn.modal !== 'undefined');
  });
});
