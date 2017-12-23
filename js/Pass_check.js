
$(document).ready(function() {
     
    var text = ["One uppercase letter?", "One number?", "One small letter?", "At least 8 characters?", "One special character?"];
    
        
     function drawTable() {
             var table = $("<table>");  
         $.each(text, function(index) {
             
             var tr = $("<tr>");
             var td = $("<td>");
             td.attr("id", "text_"+ index);
             td.html(text[index]);
             table.append(tr.append(td));
                       
             })
         
      $("#table").append(table);
         
     }
    
    drawTable();
/*});*/

$("#pass").keyup(function() {
    var eachVal = [];
        var values = $("#pass").val();
        values = values.split('');
        console.log(values);
        eachVal.push(values);
        console.log(eachVal);
        
    var temp;
    for ( var i = 0; i < values.length; i++ ) {
        temp = values[i];
        console.log(temp);
        if ( values.length > 7 ) {
            console.log("true length");
            $("#text_3").html("At least 8 characters? <i class='fa fa-check' aria-hidden='true'></i>");
            
        }
        if (!isNaN(Number(temp))) {
            console.log("true Num");
            $("#text_1").html("One number? <i class='fa fa-check' aria-hidden='true'></i>");
        }else  if (temp.toLowerCase() == temp.toUpperCase()) {
            
             {
               $("#text_4").html("One special character? <i class='fa fa-check' aria-hidden='true'></i>");  
            }
        }else if(temp == temp.toLowerCase())
        {
            console.log("small letter");
            
              $("#text_2").html("One small letter? <i class='fa fa-check' aria-hidden='true'></i>"); 
        }else {
            console.log("uppercase letter")
            $("#text_0").html("One uppercase letter? <i class='fa fa-check' aria-hidden='true'></i>"); 
        }
            
            }
    })
    
  });  


