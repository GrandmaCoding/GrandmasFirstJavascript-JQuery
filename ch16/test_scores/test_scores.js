"use strict";

$(document).ready( () => {

    

    $("#add_score").click( () => {
        //Parse, validate, and add score.
        const score = parseFloat($("#score").val());
        testStores.add(score);
        $("#add_score").next().text("");  

        // display all scores
        $("#all").text(testStores.toString());
        for(const score of testStores) {
            console.log(score);
        }
        //display average
        $("#avg").text(testStores._avg);
        // display last 3 scores
        let lastThree = testStores._lastThree.slice();
        lastThree.reverse();
        $("#last").text(lastThree);
        
        
        // get text box ready for next entry
        $("#score").val("");
        $("#score").focus(); 
    });

    // set focus on initial load
    $("#score").focus();
});