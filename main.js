$(document).ready( function (){

	// initiate set availability button
	$('#btnSetAvail').click(function(){
		var fullName   = $('input#fullName').val(); 
		var slotADays  = $('select#slotADays').val();
		var slotATimes = $('select#slotADays').val();
		var slotBDays  = $('select#slotBDays').val();
		var slotBTimes = $('select#slotBDays').val();		
		var slotCDays  = $('select#slotCDays').val();
		var slotCTimes = $('select#slotCDays').val();

		var nameMessage = " for " + fullName;
		$('span#availableName').text(nameMessage).fadeIn();
	});




});
