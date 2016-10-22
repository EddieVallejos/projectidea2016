$( document ).ready(function(){
    $(".button-collapse").sideNav();
});

$(document).ready(function(){
	$('.modal-trigger').leanModal();

	$('#addRecruit').on('click', function (){
	$('#modal1').openModal();
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

});

// modal
$(document).ready(function(){
// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
	$('.modal-trigger').leanModal();
});
