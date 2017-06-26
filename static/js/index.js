
$(document).ready(function() {

  const submitFeedback = function submitFeedback(isPositive) {
    const feedbackKey = $.url().param('key');
    if (!feedbackKey) throw 'Feedback key required';

    $.ajax({
      url: '/api/save?r=' + Math.random(),
      data: {
        pos: isPositive,
        key: feedbackKey
      },
    }).done(function() {
    });
  };

  $('.btn.btn-feedback').click(function() {
    submitFeedback($(this).hasClass('btn-success'));
  });
});
