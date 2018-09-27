$(document).ready(function() {
  
  $("#search").click(function(){
    var username = $('#user').val();
    $.getJSON("https://api.github.com/users/"+username+"/repos", function(result){

      var key, count = 0;
      for(key in result) {
        $(".repos").append("<tr>\
                          <td>"+result[count].name+"</td>\
                          <td>"+result[count].description+"</td>\
                          <td>"+result[count].watchers+"</td>\
                        </tr>");
        count++
      }
    });
});

});