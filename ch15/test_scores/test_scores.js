"use strict";
function getAverage(scores) {
    const total = scores.reduce((tot,val) => tot + val);
    const avg = total/scores.length;
    return avg;
}

function getLastScores(scores) {
    const len = scores.length;
    const lastThree = (len <= 3) ? scores.slice() : scores.slice(len-3, len);
    lastThree.reverse();
    return lastThree;
}


$(document).ready( () => {

    const scores = [];

    $("#add_score").click( () => {
        
        const score = parseFloat($("#score").val());
                
        if (isNaN(score) || score < 0 || score > 100) {
            $("#add_score").next().text("Score must be between 0 and 100."); 
            // $("#message").text("Score must be between 1 and 100.");
        }
        else {
            $("#add_score").next().text("");  
            // $("#message").text("");  // remove any previous error message

            // add score to scores array 
            scores.push(score);

            // display all scores
            $("#all").text(scores.join(", "));

            // display average score

            const total = scores.reduce( (tot, val) => tot + val, 0 );
            const avg = total/scores.length;
            $("#avg").text(avg.toFixed(2));

            // display last 3 scores
            const len = scores.length;
            const copy = (len <= 3) ? scores.slice() : scores.slice(len - 3, len); // copy last three
            copy.reverse();

            const avg = getAverage(scores);
            $("#avg").text(avg.toFixed(2));

            // display last 3 scores
            const copy = getLastScores(scores);

            $("#last").text(copy.join(", "));
        }
        
        // get text box ready for next entry
        $("#score").val("");
        $("#score").focus(); 
    });

    $("#delete_score").click( () => {


        let index = $("#index").val();
        if(isNaN(index) || index < 0 || index > scores.length-1)
            $("#delete_score").next().text("Gonna need a valid value there, chief.");
        else{
            //Delete score
            $("#delete_score").next().text("");
            scores.splice(index,1);
            //Refresh scores display
            $("#all").text(scores.join(", "));
            //Refresh average display.
            const avg = getAverage(scores);
            $("#avg").text(avg.toFixed(2));
            //Refresh last scores
            const copy = getLastScores(scores);
            $("#last").text(copy.join(", "));
        }


    }); 

    // set focus on initial load
    $("#score").focus();
});