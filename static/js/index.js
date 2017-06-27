
$(document).ready(function() {

  const submitFeedback = function submitFeedback(token) {
    const feedbackKey = $.url().param('key');
    if (!feedbackKey) throw 'Feedback key required';

    $.ajax({
      url: '/api/save?r=' + Math.random(),
      data: {
        pos: token,
        key: feedbackKey
      },
    }).done(function() {
    });
  };

  $('.btn.btn-feedback').click(function() {
    submitFeedback($(this).attr('feedback-token'));
  });

  // Dynamic height adjustment
  var adjustButtons = function adjustButtons() {
      const height = $(window).height() * .8;

      $('a').css('height', height);
      $('a span').css('padding-top', height * .4);

      $('.fa-4').css('font-size', (height * .02) + 'em')
  };
  adjustButtons();
  $(window).resize(adjustButtons);

  // Add the query content.
  // Must be in the form ?h1=<something>;p=<lead content>
  const h1 = $.url().param('h1') || '<Title Missing>';
  const p = $.url().param('p') || '<Lead content missing>';

  $('div.row.title-row h1').text(h1);
  $('div.row.description-row p').text(p);
});
