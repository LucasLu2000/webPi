// JavaScript for Name Data Lookup Demo
// Jim Skon, Kenyon College, 2020



    $("#pi-btn").click(getMatches);

    $('#piresults').append("Hello");





function processResults(results) {
    $('#piresults').empty();
    $('#piresults').append(results);
}

function clearResults() {
    $('#searchresults').empty();
}

function getMatches() {
    if ($('#digits').val().length < 1) return;
    $('#piresults').empty();
    digits = $("#digits").val();
    console.log("digits:"+digits);
    $.ajax({
        url: '/cgi-bin/skon_pi.py?digits='+digits,
	type: "get",
        dataType: 'text',
        success: processResults,
	error: function(request, ajaxOptions, thrownError)
          {
              $("#debug").text("error with get:"+request+thrownError);
          }
    });
}
