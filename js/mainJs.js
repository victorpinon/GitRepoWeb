$(document).ready(function() {
  $("#search").click(function(){
    var username = $('#user').val();
    $.ajax({ 
      type: 'GET', 
      url: "https://api.github.com/users/"+username+"/repos", 
      data: { get_param: 'value' }, 
      dataType: 'json',
      success: function (result) {
        $(".repos").html("");
        var key, count = 0;
        for(key in result) {
          $(".repos").append("<tr>\
                            <td>"+result[count].name+"</td>\
                            <td>"+result[count].description+"</td>\
                            <td>"+result[count].watchers+"</td>\
                          </tr>");
          count++
        }
          
      }
    });
  });


});