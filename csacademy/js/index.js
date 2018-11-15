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

$("#sign-up-form").submit(function(event) {
    event.preventDefault();

    let url = "https://backend.academy.cs.cmu.edu/api/v0/users/guest-register/";
    let data = {
        user_type: $('.user_type_radio:checked').val(),
        name: $('#name').val(),
        email: $('#email').val(),
        school_name: $('#schoolname').val(),
        password: $('#password').val()
    };

    let request = $.post(
        url,
        data,
        function(x){console.log(x)},
        "json"
    );
    console.log("hello")
});