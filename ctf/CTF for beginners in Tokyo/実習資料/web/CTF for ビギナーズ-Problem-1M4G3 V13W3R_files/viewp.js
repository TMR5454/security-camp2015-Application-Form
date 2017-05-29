window.onload = (function(){
  $("#submit").click(function(){
    var q="";
    var input = $("input");
    for(var i=0;i<input.length;++i){
      q += input[i].name + "=" + encodeURIComponent(input[i].value) + "&";
    }
    q = q.substr(0,q.length-1);
    $.ajax({
      type: "POST",
      url: "./userapi.php",
      data: q,
      dataType: "json",
      headers: {'X-CSRF-Token': location.href},
      success: function(msg){
        $("#result").empty();
        if(msg["clear"] == 0){
          $("#image_bad").attr("src","./img/bad"+(Math.floor(Math.random() * 6) + 1)+".jpg");
          $("#errorModal").modal("show");
          $('#submit').attr('disabled', false);
          $('#submit').removeAttr('disabled');
        } else if(msg["clear"] == 1){
          $("#clearModal").modal("toggle");
        } else {
          $("#result").append($("<div class=\"alert alert-error\">").append($("<p>").text("Error!")));
        }
      },
    error:function(){
      alert("unknown error");
      $('#submit').attr('disabled', false);
      $('#submit').removeAttr('disabled');
    }
    });
    $('#submit').attr('disabled', true);
    $("#input_flag").val("");
  });

  $("#closeClearModal").click(function(){
    $("#clearModal").modal("hide");
  });

  $("#closeErrorModal").click(function(){
    $("#errorModal").modal("hide");
  });

  $('#clearModal').on('hidden', function () {
    location.href = "./problems.php";
  });

  $("#input_flag").focus();

});