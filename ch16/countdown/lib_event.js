"use strict"

class Event {
    constructor(name,dateString) {
        this.name = name;
        this.dateString = dateString;
        this.date = new Date(dateString);

        const today = new Date();
        const oneDayMS = 24*60*60*1000; // hours * minutes * seconds * milliseconds    
        let days = (this.date.getTime() - today.getTime()) / oneDayMS;
        this._days = Math.ceil(days);
    }
    get days() {
        return this._days;
    }
    getCountdownMessage = function() {
        //create and display message 
        if (this.days === 0) {
             return "Hooray! Today is ".concat(this.name, 
                "!\n(", this.date.toDateString(), ")") ;
        }
        if (this.days < 0) {
            //make sure this name is capitalized
            this.name = this.name.substring(0,1).toUpperCase() + this.name.substring(1); 
            return this.name.concat(" happened ", Math.abs(this.days), 
                " day(s) ago. \n (", this.date.toDateString(), ")");
        }
        if (this.days > 0) {
            return this.days.toString().concat(" day(s) until ", 
                this.name, "!\n(", this.date.toDateString(), ")") ;
        }
    }
}