function postToGoogle() {
    var field1 = $("#name").val();
    var field2 = $("#mail").val();
    var field3 = $("#subject").val();
    var field4 = $("#message").val();
  
  
    $.ajax({
      url: "https://docs.google.com/forms/u/1/d/e/1FAIpQLSfr1ds7GrbZ2AKe7HORNCS44Uqs789Awark7-jKpxmJv102YQ/formResponse",
      data: { "entry.453513623": field1, "entry.298953389": field2, "entry.2101648231": field3,"entry.923952544":field4 },
      type: "POST",
      dataType: "xml",
      
      success: function (d) {
        // document.getElementById("form").reset();
        
      },
      error: function() {
        window.location.reload();
        document.getElementById("form").reset();
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        
      }
    });
    return false;
}


var btn = $('#buttonToTop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// var el=document.getElementById("img1");
// window.onload = function(){

//   //this will check everytime a resize happens
//   if(window.innerWidth < 1003)
//     {
//       //if width is still bigger than 630, keep the element visible
//       el.style.visibility =  "hidden";
//       el.style.height='0px';
//       el.style.width="0px"
//       console.log("hello")
      
//       //exit the funtion
//       return;
//     }
    
//     //At this point, the width is less than or equals to 630, so hide the element
//     el.style.display =  "block";
// }


