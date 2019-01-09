/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore;
        
        
        /* Question 1 */
        
        function MakingGames(Answer) {
            if (Answer == "Yes") {
            alert("Q1 Yes");
            return 20;
            
        } else if (Answer == "No") {
            alert("Q1 No");
            return 2;
        
        }
        
        }
        
        
        
        /* Question 2 */
        
        function ShooterGames(Answer) {
            if (Answer == "Yes") {
             alert("Q1 Yes");
            return 20;
            
        } else if (Answer == "No") {
            console.log("Q1 No");
            return 2;
        
        }
        
        }
        
        /* Question 3 */
        
       function StoryGames(Answer) {
            if (Answer == "Yes") {
            console.log("Q1 Yes");
            return 20;
            
        } else if (Answer == "No") {
            console.log("Q1 No");
            return 2;
        
        }
        
        }
        
        /* Question 4 */
        
        function PlatformerGames(Answer) {
            if (Answer == "Yes") {
            console.log("Q1 Yes");
            return 20;
            
        } else if (Answer == "No") {
            console.log("Q1 No");
            return 2;
        
        }
        
        }
        
        
        function totalScore(Score) {
        
            
        
        }
    });

});
