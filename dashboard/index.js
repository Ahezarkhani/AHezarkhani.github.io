var db;
var storage;


function addRow(fileName, link) {
  $(".filesTable").append(
      '<tr>' +
        "<td>"+ fileName + "</td>" +
        "<td>"+ link + "</td>" +
      "</tr>"
  );
}


function uploadFile(){
  // store file in firebase storage
  var file = document.getElementById('file-input').files[0];
  var fileName = file.name;

  var storageRef = storage.ref();
  var ref = storageRef.child('pdfs/'+fileName);
  ref.put(file).then(function(snapshot) {
    console.log('Uploaded a blob or file!');
  });
  ref.getDownloadURL().then(function(url) {
    // store file path in cloud firestore
    db.collection("files").add({
      file: url,
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
    addRow(fileName, url, false)
  }).catch(function(error) {
    // Handle any errors
  });

}

function setCurrentPage(setPage){
  console.log(setPage)
  if (setPage === "file-upload-page") {
    $(".gallery-page").hide();
    $(".file-upload-page").show();
  } else if (setPage === "gallery-page"){
      $(".gallery-page").show();
      $(".file-upload-page").hide();
  }
}

$( document ).ready(function() {
  db = firebase.firestore();
  storage = firebase.storage();

  db.collection("files").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      var url = doc.data().file;
      var ref = storage.refFromURL(url);
      var fileName = ref.name;
      addRow(fileName, url)
    });
  });

  db.collection("screenshots").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        var img = $('<img>');
        img.attr('src', doc.data().img);
        img.attr('class','screenshot');
        img.appendTo('.gallery-page');
    });
  });


});

