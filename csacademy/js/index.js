function showTeachersFeatures(){
    document.getElementById("features-list-students").style.display = "none";
    document.getElementById("features-list-teachers").style.display = "block";

    var factive = document.getElementById('factive-toggle');
    var finactive = document.getElementById('finactive-toggle');
    factive.setAttribute('id', 'finactive-toggle');
    finactive.setAttribute('id', 'factive-toggle');

}

function showStudentsFeatures(){
    document.getElementById("features-list-students").style.display = "block";
    document.getElementById("features-list-teachers").style.display = "none";

    var factive = document.getElementById('factive-toggle');
    var finactive = document.getElementById('finactive-toggle');
    factive.setAttribute('id', 'finactive-toggle');
    finactive.setAttribute('id', 'factive-toggle');
}