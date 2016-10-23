$( document ).ready(function(){
    $(".button-collapse").sideNav();
});

$(document).ready(function(){
    $('#login-btn').on('click', function(){
        $('#login').openModal();
    });
    $('#editup-btn').on('click', function(){
        $('#editup').openModal();
    });
    $('#editprofile-btn').on('click', function(){
        $('#editprofile').openModal();
    });
});

$('#addRecruiter').on('click', function (){
	$('#modal2').openModal();
});

$('select').material_select();

$('#addRec').click(function (e) {
    // prevent default anchor behavior
    // store anchor href
    Materialize.toast('Applicant added!', 4000);
}); 

$('#addRecr').click(function (e) {
    // prevent default anchor behavior
    // store anchor href
    Materialize.toast('Admin added!', 4000);
}); 

$('.collapsible popout').collapsible({
accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
});

$('label').addClass('active');

$('.dropdown-button').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    gutter: 0, // Spacing from edge
    alignment: 'left' // Displays dropdown with edge aligned to the left of button
});

$(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
});

$(document).ready(function(){
    $('.carousel.carousel-slider.center').carousel({full_width: true});
});