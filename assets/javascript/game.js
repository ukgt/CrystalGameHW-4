<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Crystal Game!</title>
<link rel="stylesheet" href="assets\css\style.css">
</head>
<body>
  <h1>Target Number: </h1>
    <div id="number">
    </div>

    <div class="gem" data-value=""><img src = assets\images\1.jpg></div>
    <div class="gem" data-value=""><img src = assets\images\snowflake2.jpg></div>
    <div class="gem" data-value=""><img src = assets\images\3.jpg></div>
    <div class="gem" data-value=""><img src =assets\images\snowflake4.jpg></div>
    <p id="onGoingSum">Current Sum:</p>  
    <p id="wins">Wins:</p>
    <p id="losses">Losses:</p>
    <div id="reset"></div>
    


<!-- SCRIPT STARTS HERE -->
<!-- Psuedo Code:
1. Page loads for start
2.  -->

    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript">
    
    let displayNumber;
    let onGoingSum=0;
    let wins=0;
    let losses=0;
    

    $(document).ready(function(){ 
        displayNumber=Math.floor(Math.random()*70)+30;
        $("#number").text(displayNumber);

        for (let i = 0; i < 4; i++){
            let temp = Math.floor(Math.random()*25);
            $(".gem").eq(i).attr("data-value", temp);
        }

       
        $(".gem").on("click", function(){
          let val =  parseInt($(this).attr("data-value"))
            onGoingSum = onGoingSum + val;
        //    let sum= parseInt($("data-value").val(), onGoingSum); 
             $("#onGoingSum").html("Current Sum: " + onGoingSum); 
           
            // console.log($(this).data("value"));
            // console.log(this);
            console.log(onGoingSum);
             console.log($(this).attr("data-value"));
             score();
        })
       
   function reset() {
                displayNumber = Math.floor(Math.random() * 70) + 30;
                onGoingSum = 0;
                for (let i = 0; i < 4; i++) {
                    let temp = Math.floor(Math.random() * 25)
                    $(".gem").eq(i).attr("data-value", temp);
                }

                $("#number").text(displayNumber);
                $("#onGoingSum").html("Current Sum: " + onGoingSum);
            }
       
        function score() {
            if (onGoingSum === displayNumber) {
               wins++;
               $("#wins").text("Wins: " + wins);
              reset();               
         }
       
         else if (onGoingSum > displayNumber) {

             losses--;
             $("#losses").html("Losses: " + losses);
            reset();
          }
        }
       
    });

    
    </script>
    </body>
</html>