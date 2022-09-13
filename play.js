var $video = document.getElementById('videoplayerhtml');

$(window).scroll(function() {
    var speed = 100;
    var scroll = $(this).scrollTop() / speed;
    $video.currentTime = scroll;
});