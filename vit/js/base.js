function closeModal() {
    $(".modal-container").hide();
    $(".modal").hide();
}

function showModal() {
    $(".modal-container").show();
    $(".modal").show();
}


window.onload = function() {
    window.setTimeout(showModal, 5000)

};