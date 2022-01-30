"use strict"

let validation = {

    isEmpty(val) {
        //make sure val name and date are entered
        if (val.name.length === 0 || val.dateString.length === 0) {
            return true;
        } 
        return false;
    },
    hasNoSlashes(val) {
        //make sure due date string has slashes and a 4-digit year
        if (val.dateString.indexOf("/") === -1) { 
            return true;
        } 
        return false;
    },
    isInvalidYear(val) {
        const year = val.dateString.substring(val.dateString.length - 4); 
        if (isNaN(year)) {
            return true;
        } 
        return false;
    },
    isInvalidDate(val) {
        //convert due date string to Date object and make sure date is valid
        if (val.date.toString() === "Invalid Date") {
            return true;
        }
        return false;
    }

}