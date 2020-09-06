$(document).ready(function() {
	//hide show toggle
	$(".btn1").click(function() {
		$(".ph").hide(200);
	$(".btn2").click(function() {
		$(".ph").show(500);
	$(".btn3").click(function() {
		$(".ph").toggle(1000);

	});
	});
	});
	//fade in out toggle	
	$(".btn4").click(function(){
	  $(".div1").fadeOut(1000);
	});	
	$(".btn5").click(function(){
	  $(".div1").fadeIn("fast");
	});	
	$(".btn6").click(function(){
	  $(".div1").fadeToggle();
	});	
	$(".btn7").click(function(){
	  $(".div1").fadeTo("slow",.5);
	});	//slide down up toggle	
	$(".btn8").click(function(){
	  $(".div2").slideDown(3000);
	});	
	$(".btn9").click(function(){
	  $(".div2").slideUp("fast");
	});	
	$(".btn10").click(function(){
	  $(".div2").slideToggle(2000);
	});	
	// animate
	$(".anmtbt").click(function(){
	  var div = $(".amate");
	  div.animate({width: '10%', opacity: '0.1'}, "slow");
	  div.animate({width: '20%', opacity: '0.2'}, "slow");
	  div.animate({width: '30%', opacity: '0.4'}, "slow");
	  div.animate({width: '40%', opacity: '0.6'}, "slow");
	  div.animate({width: '60%', opacity: '0.8'}, "slow");
	  div.animate({width: '80%', opacity: '0.9'}, "slow");
	  div.animate({width: '100%', opacity: '1'}, "slow");
	  div.animate({width: '10%', opacity: '0.1'}, "slow");
	  div.animate({width: '20%', opacity: '0.2'}, "slow");
	  div.animate({width: '30%', opacity: '0.4'}, "slow");
	  div.animate({width: '40%', opacity: '0.6'}, "slow");
	  div.animate({width: '60%', opacity: '0.8'}, "slow");
	  div.animate({width: '80%', opacity: '0.9'}, "slow");
	  div.animate({width: '100%', opacity: '1'}, "slow");
	  div.animate({width: '10%', opacity: '0.1'}, "slow");
	  div.animate({width: '20%', opacity: '0.2'}, "slow");
	  div.animate({width: '30%', opacity: '0.4'}, "slow");
	  div.animate({width: '40%', opacity: '0.6'}, "slow");
	  div.animate({width: '60%', opacity: '0.8'}, "slow");
	  div.animate({width: '80%', opacity: '0.9'}, "slow");
	  div.animate({width: '100%', opacity: '1'}, "slow");
	  div.animate({width: '10%', opacity: '0.1'}, "slow");
	  div.animate({width: '20%', opacity: '0.2'}, "slow");
	  div.animate({width: '30%', opacity: '0.4'}, "slow");
	  div.animate({width: '40%', opacity: '0.6'}, "slow");
	  div.animate({width: '60%', opacity: '0.8'}, "slow");
	  div.animate({width: '80%', opacity: '0.9'}, "slow");
	  div.animate({width: '100%', opacity: '1'}, "slow");

	});
	// call back
	$(".cbk").click(function(){
	  $(".calbak").hide("slow", function(){
	    alert("I am hidden now");
	  });
	});

	$(".ncbk").click(function(){
	  $(".calbak").hide(1000);
	  alert("its without call back");
	});
});