document.addEventListener('DOMContentLoaded', function() {
    var videos = document.querySelectorAll('video');
    videos.forEach(function(video) {
        video.pause();
    });
});


let drawerOpen = false;

function toggleDrawer() {
    const drawer = document.getElementById("drawer");
    const body = document.getElementById('bd');
    const openbtn = document.getElementById('open');
    if (drawerOpen) {
        drawer.style.left = "-75%";
        body.style.overflow = '';
        openbtn.style.transform = 'rotate(360deg)';
    } else {
        drawer.style.left = "0";
        body.style.overflow = 'hidden';
        openbtn.style.transform = 'rotate(90deg)';
    }

    drawerOpen = !drawerOpen; // Toggle the state
}
