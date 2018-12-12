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
        var Yes;
        var No;
        
        if (q1Result == Yes) {
            console.log("Q1 Yes");
            
            
        } else if (q1Result == No) {
            console.log("Q1 No");
        
        
        }
        
        if (q2Result == Yes) {
            console.log("Q2 Yes");
            
            
        } else if (q2Result == No) {
            console.log("Q2 No");
        
        
        }
        
        if (q3Result == Yes) {
            console.log("Q3 Yes");
            
            
        } else if (q3Result == No) {
            console.log("Q3 No");
        
        
        }
        
        
    });

});
