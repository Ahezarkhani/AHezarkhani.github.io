var phrase1 = "Gobbling gorgoyles gobbled gobbling goblins."
var phrase2 = "Don't cry because it's over, smile because it happened."
var phrase3 = `The happy apple wrapped and happened to snap the wrapped chap.`


function addNewInputRow() {
    $("#compression-scheme-form").append(`
        <div class="row">
                <div class="col-md-6">
                    <div style="text-align:right">Turn This</div>
                    <input class="turn-this-input" style="text-align:right" type="text">
                </div>
                <div class="col-md-6">
                    <div>Into This</div>
                    <input class="into-this-input" style="text-align:left" type="text" >
                </div>
            </div>
            <br>
    `)
}

function checkScheme() {
    var problemNumber = $('input[name=radioName]:checked', '#myForm').val()
    console.log(problemNumber)
    // assign curr_phrase
    var curr_phrase;
    var phrase;
    if (problemNumber === '1') {
        curr_phrase = phrase1;
        phrase = phrase1;
    } else if (problemNumber === '2') {
        curr_phrase = phrase2;
        phrase = phrase2;
    } else {
        curr_phrase = phrase3;
        phrase = phrase3;
    }


    var turnThisInputs = $(".turn-this-input");
    var intoThisInputs = $(".into-this-input");

    for(var i = 0; i < turnThisInputs.length; i++){
        if (turnThisInputs[i].value.length > 5){
            alert("Your value is too long. It can be 5 characters max")
            return
        }
        curr_phrase = curr_phrase.replace(new RegExp(turnThisInputs[i].value, 'g'), intoThisInputs[i].value);
    }

    var decompressed;
    for(var i = 0; i < intoThisInputs.length; i++){
        decompressed = curr_phrase.replace(new RegExp(intoThisInputs[i].value, 'g'), turnThisInputs[i].value);
    }

    if ((curr_phrase.length <= phrase.length - 5) && (decompressed === phrase)) {
        $("#status").html("That Works!")
        $("#compressed-text").html("Compressed Text: " + curr_phrase)
    } else {
        $("#status").html("Try Again!")
        if(problemNumber != '3'){
            $("#compressed-text").html("Compressed Text: " + curr_phrase)
        } else {
            $("#compressed-text").html("")
        }
    }
    $("#compression-level").html("You compressed the phrase by " + (phrase.length - curr_phrase.length) + " letters.")
}