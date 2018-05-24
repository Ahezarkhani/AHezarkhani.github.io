var navShowing = true;

function closeModal() {
    $(".modal-container").hide();
    $(".modal").hide();
}

function showModal() {
    $(".modal-container").show();
    $(".modal").show();
}

function hideNav() {
    if($(".nav-icons-list").is(":visible") && !navShowing){
        $(".nav-icons-list").hide();
    }
}

function showNav() {
    console.log("showNav")
    if(! $(".nav-icons-list").is(":visible") && !navShowing){
        $(".nav-icons-list").show();
    }
}

function toggleNavHard() {
    if($(".nav-icons-list").is(":visible")){
        $(".nav-icons-list").hide();
        navShowing = false;
    } else {
        $(".nav-icons-list").show();
        navShowing = true;
    }
}

function hideNavHard() {
    $(".nav-icons-list").hide()
}

function showNavHard() {
    $(".nav-icons-list").show()
}


window.onload = function() {
    window.setTimeout(showModal, 8000)

};