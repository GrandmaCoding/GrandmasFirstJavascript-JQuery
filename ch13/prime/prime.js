"use strict";

const isPrimeNumber = (number) => {
    let isPrime = (number < 2) ? false: true;  // set default return value
    for (let i = 2; i < number; i++) {
        if ( number % i === 0 ) {
            isPrime = false;
            break;
        }
    }
    
    return isPrime;
};

$(document).ready( () => {
    
    $("#calculate").click( () => {
        const number = parseInt( $("#number").val() );
        if ( isNaN(number) ) {
            $("#message").text( "Please enter a number." );
        } else {
            let primeString = ""
            for(let i = 2; i <= number; i++) {
                let isPrime = isPrimeNumber(i);
                if(isPrime)
                    primeString += i + " ";
            }
            console.log(primeString);
            $("#message").text(primeString);

        }
        $("#number").focus();
        $("#number").select();
    });
    
    $("#number").focus();
});