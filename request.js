/*Video Json Api Link*/
const apiUrl = 'https://pronweb.vercel.app/data.json';
/* Media Fire Direct Link Generate*/
function direct(url) {
  let link = `https://mmaoapi.vercel.app/mediafire?link=${url}`
      return link;
}
 /* Request Video Api */
function requestVideo(api,s,e) {
  var videoView = ''
  fetch(api)
  .then(response  => response.json())
  .then(data => {
    for(i=s;i<=e;i++){
      let video = direct(data[i].link);
      let photo = data[i].image;
      let name = data[i].title;
      videoView = videoView + `<div class="bg-secondary border border-1 border-dark rounded-3 p-2 pt-0 mb-4 shadow">
      <video src="${video}" controls autoplay="false" width="100%" height="250px" class="mb-0 mt-0 rounded-3" poster="${photo}"></video><div class="text-light  p-3  rounded m-0">${name}</div>
    </div>`;
    document.getElementById('more').style.display = 'block';
  }
  let next = ``
  document.getElementById('vdView').innerHTML = videoView;
  })
  .catch(error => {
    alert('Sorry : Error404//contact us => (https://t.me/htetkokotelegram)')
    console.error(error)
  });
}
