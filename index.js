$(document).ready(function(){
  $('video').each(function(){
    this.pause();
  });
});

let drawerOpen = false;
function toggleDrawer(){
  const $drawer = $('#drawer');
  const $body = $('#bd');
  const $openbtn = $('#open');
  if (drawerOpen) {
    $drawer.css('left','-75%');
    $body.css('overflow', '');
    $openbtn.css('transform','rotate(360deg)');
  }else {
    $drawer.css('left', '0');
    $body.css('overflow', 'hidden');
    $openbtn.css('transform', 'rotate(90deg)');
  }
  drawerOpen = !drawerOpen;
}
$(document).ready(function(){
  /*Video Json*/
  const jsonFile = '/data.json'
  var pos = 10;
  var posEnd;
  $('#seebtn').click(function(){
  $('#hideVd').hide();
  //Request
  requestVideo(jsonFile,0,pos);
  });
  $('#open').click(function(){
    toggleDrawer();
  });
  //See more
  $('#more').click(function(){
    if (pos < 3410) {
      location.href = '#';
      posEnd = pos + 10;
      requestVideo(jsonFile, pos, posEnd);
      pos += 10;
      } else {
        alert('This is all videos!')
      }
  });
})