
$(document).ready(function() {
  var image = $.url().param('viz');
  if (!image) throw 'image required';

  const FIVE_MIN = 300000;

  var reload = function relaod() {
    $('img.viz-img').attr('src', image + '?$=' + Math.random());
  };

  setInterval(reload, FIVE_MIN);
  reload();
});
