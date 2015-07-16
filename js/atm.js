$(function(){

  //start coding here...

  var balance = 0;

  $("#amount").hide();
  $("#submit").hide();

  $("#choice").change(function() {
    if ($(this).val() !== "-- select choice --") {
      $("#amount").show();
      $("#submit").show();
    }
    else {
      $("#amount").hide();
      $("#submit").hide();
    }
  });

  $("#submit").click(function(e){
    // we need this to prevent the form for resubmitting, specifically on the specrunner.html (we have our project's html in here so we don't have to include fixtures in the spec)
    e.preventDefault();

    var amount = parseInt($("#amount").val());

    if (isNaN(amount)) {
      $("#balance").text("Fool don't be playin!");
    }
    else {
      if ($("#choice").val() === "deposit") {
        balance += amount;
      }
      else if ($("#choice").val() === "withdrawal") {
        balance -= amount;
      }
      $("#balance").text("$" + balance.toFixed(2));
    }
  });
});
