var hiwSelectedItem = 0;
setInterval(changeHowItWorksItem, 5000)
$("#hiw-active-image").show();

var injuriesSlider = document.getElementById("injuries-per-year-range");
var injuriesValue = document.getElementById("injuries-per-year-val");
injuriesValue.innerHTML = injuriesSlider.value + " Strains and Sprains / year";
var profitMarginSlider = document.getElementById("business-profit-margin-range");
var profitMarginValue = document.getElementById("business-profit-margin-val");
profitMarginValue.innerHTML = profitMarginSlider.value + "% Profit Margin";
injuriesSlider.oninput = function() {
    injuriesValue.innerHTML = this.value + " Strains and Sprains / year";
}
profitMarginSlider.oninput = function() {
    profitMarginValue.innerHTML = this.value + "% Profit Margin";
}


function learnMoreScroll(){
    var info = document.getElementsByClassName("reasons")[0];
    info.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

function hiwSelect(e) {
    console.log(hiwSelectedItem)
    var children = $(".hiw-item-list").children();
    children[hiwSelectedItem].removeAttribute("id");
    var newHiwSelectedItem = children.index(e);
    console.log(hiwSelectedItem)

    children[newHiwSelectedItem].id = "hiw-active"

    children = $(".hiw-image-list").children();
    $("#hiw-active-image").hide();
    children[hiwSelectedItem].removeAttribute("id");
    children[newHiwSelectedItem].id = "hiw-active-image";

    $("#hiw-active-image").show();
    hiwSelectedItem = newHiwSelectedItem;
}


function changeHowItWorksItem() {
    children = $(".hiw-item-list").children();
    children[hiwSelectedItem].removeAttribute("id");
    hiwSelectedItem++;
    hiwSelectedItem %= 4;
    children[hiwSelectedItem].id = "hiw-active"

    children = $(".hiw-image-list").children();
    console.log(children)
    $("#hiw-active-image").hide();
    console.log(hiwSelectedItem)
    if (hiwSelectedItem !== 0){
        children[hiwSelectedItem - 1].removeAttribute("id");
    } else {
        children[3].removeAttribute("id");
    }
    children[hiwSelectedItem].id = "hiw-active-image";
    $("#hiw-active-image").show();
}

function toggleROICalc() {
    if($(".roi-calc").is(":visible")){
        $(".roi-calc").hide()
        $("#up-arrow").hide()
        $("#roi-calc-button").css("box-shadow", "0 4px 8px 0 rgba(0,0,0,0.2)")
    } else {
        $(".roi-calc").show()
        $("#up-arrow").show()
        $("#roi-calc-button").css("box-shadow", "none")
    }
}


function calculateROI(){
    var numInjuries = injuriesSlider.value
    var totalIndirectCosts = numInjuries * 35000;
    var totalDirectCosts = numInjuries * 30000;
    var totalCosts = totalDirectCosts + totalIndirectCosts;

    var profitMargin = profitMarginSlider.value;
    console.log(profitMargin)
    var salesCoverInDirectCosts = Math.floor(totalIndirectCosts / (profitMargin / 100));
    var salesCoverTotalCosts = Math.floor(totalCosts / (profitMargin / 100));

    $("#directCost").html("$" + totalIndirectCosts.toLocaleString())
    $("#indirectCost").html("$" + totalDirectCosts.toLocaleString())
    $("#combinedCost").html("$" + totalCosts.toLocaleString())
    $("#salesDirectCost").html("$" + salesCoverInDirectCosts.toLocaleString())
    $("#salesIndirectCost").html("$" + salesCoverTotalCosts.toLocaleString())

    $(".roi-results").show()
}

window.onload = function() {
};









