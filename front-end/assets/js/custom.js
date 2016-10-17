/* home page main tabs */
$(document).ready(function(){
  $('#mainTabs').tabs();
});
/* dropdown menu in sign up */
$(document).ready(function() {
  $('select').material_select();
});
/* home page slider background */
$(document).ready(function(){
  $('#imgslider').slider({full_width: true});
});

$( document ).ready(function(){
    $(".button-collapse").sideNav();
});

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('#addRecruiter').on('click', function(){
        $('#modal2').openModal();
    });
    $('#addRecruit').on('click', function(){
        $('#modal1').openModal();
    });
});

$(document).ready(function(){
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 10, // Spacing from edge
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'right' // Displays dropdown with edge aligned to the left of button
    });
});