var hiwSelectedItem = 0;
setInterval(changeHowItWorksItem, 5000)


function learnMoreScroll(){
    var info = document.getElementsByClassName("reasons")[0];
    info.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

function hiwSelect(e) {
    children = $(".hiw-item-list").children();
    children[hiwSelectedItem].removeAttribute("id");
    hiwSelectedItem = children.index(e);
    children[hiwSelectedItem].id = "hiw-active"
}


function changeHowItWorksItem() {
    children = $(".hiw-item-list").children();
    children[hiwSelectedItem].removeAttribute("id");
    hiwSelectedItem++;
    hiwSelectedItem %= 4;
    children[hiwSelectedItem].id = "hiw-active"
}


window.onload = function() {
    
};