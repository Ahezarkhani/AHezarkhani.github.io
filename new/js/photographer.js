var shoots = [
    {
      'location':'Land\'s End, San Francisco',
      'date':'6.10.18',
      'id':'0',
      'photos': [
          'golden_state_lookout_sf/1.JPG',
          'golden_state_lookout_sf/2.JPG',
          'golden_state_lookout_sf/3.JPG',
          'golden_state_lookout_sf/4.JPG',
          'golden_state_lookout_sf/5.JPG',
          'golden_state_lookout_sf/6.JPG'
    ]},
    {
      'location':'Mount Si, Seattle',
      'date':'8.2.18',
      'id':'1',
      'photos': [
        'mount_si_seattle/1.JPG',
        'mount_si_seattle/2.JPG',
        'mount_si_seattle/3.JPG',
        'mount_si_seattle/4.JPG',
        'mount_si_seattle/5.JPG',
        'mount_si_seattle/6.JPG',
        'mount_si_seattle/7.JPG',
        'mount_si_seattle/8.JPG',
        'mount_si_seattle/9.JPG',
        'mount_si_seattle/10.JPG',
    ]},
];
var activePhotos = [];

function addPhotos() {
  for(var i=0; i < shoots.length; i++){
    shoot = shoots[i];
    console.log(shoot)

    $('#photographer').append('<h1>'+shoot.location+' <span class="thin">'+shoot.date+'</span></h1>');

    $('#photographer').append('<div class="photo-gallery" id="'+shoot.id+'"></div>');
    for(var j=0; j < shoot.photos.length; j++){
      $('#'+shoot.id).append('<div><img src="photos/'+shoot.photos[j]+'"></div>');
    }
  }
}

addPhotos();