/* Media Fire Direct Link Generate*/
function direct(url) {
    let link = `https://mmaoapi.vercel.app/mediafire?link=${url}`;
    return link;
}
/* Request Video */
function requestVideo(api, s, e) {
    $.get(api)
        .done(function(data) {
            var videos = ''
            for (i = s; i <= e; i++) {
                let videoUrl = data[i].link
                let photo = data[i].image;
                let name = data[i].title;
                videos = `${videos}<div class="bg-secondary border border-1 border-dark p-2 pt-0 mb-4 shadow" id="vd">
      <video src="https://htetkoko.vercel.app/api/mediafire?url=${videoUrl}" controls width="100%" height="250px" class="mb-0 mt-1" poster="${photo}"></video>
      <div class="text-light  p-3  rounded m-0">${name}</div>
    </div>`;
            }
            $('#vdView').html(videos);
            $('#more').show();
            $('#list').text(data.length - e - 7);
        })
        .fail(function(xhr, status, error) {
            alert('Sorry : Error404//contact us => (https://htetkoko.info)');
            console.error('Error:', error);
        });
}
