const albums = document.querySelectorAll('#newAlbum ul li');
const albumControls = document.querySelectorAll('#newAlbum div a');

albums.forEach((album, index) => {
    album.style.opacity = index === 0 ? '1' : '0';
});
function switchAlbum(event) {
    const albumId = event.target.id;
    albums.forEach((album, index) => {
        album.style.opacity = '0';
    });
    albumControls.forEach(control => {
        control.style.backgroundColor = '#000';
    });
    if (albumId === 'album1') {
        albums[0].style.opacity = '1';
        document.querySelector('#album1').style.backgroundColor = '#3680FB';
    } else if (albumId === 'album2') {
        albums[1].style.opacity = '1';
        document.querySelector('#album2').style.backgroundColor = '#3680FB';
    } else if (albumId === 'album3') {
        albums[2].style.opacity = '1';
        document.querySelector('#album3').style.backgroundColor = '#3680FB';
    }
}
albumControls.forEach(control => {
    control.addEventListener('click', switchAlbum);
});
