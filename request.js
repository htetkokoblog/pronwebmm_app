/*Video Json Api Link*/
const apiUrl = 'https://pronwebmm.vercel.app/data.json'
/* Media Fire Direct Link Generate*/
function direct(url) {
    let link = `https://mmaoapi.vercel.app/mediafire?link=${url}`
    return link;
}
/* Request Video Api */
function requestVideo(api, s, e) {
    var videoView = ''
    fetch(api)
        .then(response => response.json())
        .then(data => {
            for (i = s; i <= e; i++) {
                let video = direct(data[i].link)
                let photo = data[i].image;
                let name = data[i].title;
                videoView = videoView + `<div class="bg-secondary border border-1 border-dark p-2 pt-0 mb-4 shadow" id="vd">
      <video src="${video}" controls autoplay="false" width="100%" height="250px" class="mb-0 mt-1" poster="${photo}"></video><div class="text-light  p-3  rounded m-0">${name}</div>
    </div>`;
                document.getElementById('more').style.display = 'block';
            }
            document.getElementById('list').innerText = data.length - e - 7;
            document.getElementById('vdView').innerHTML = videoView;
        })
        .catch(error => {
            alert('Sorry : Error404//contact us => (https://t.me/htetkokotelegram)')
            console.error(error)
        });
}
// See More
var pos = 10;
var posEnd;

function seeMore() {
    if (pos < 3410) {
        location.href = '#bd';
        posEnd = pos + 10;
        requestVideo(apiUrl, pos, posEnd);
        pos += 10;
    } else {
        alert('This is all videos!');
    }
}
