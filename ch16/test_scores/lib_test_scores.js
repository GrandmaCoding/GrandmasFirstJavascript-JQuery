"use strict"

const scores = "scores";

let testStores = {
    _scores : [],
    _total : 0,
    _length: 0,
    _avg: 0,
    _lastThree: [],

    add(score) {
        if(score >= 0 && score <= 100) {
            
            this._scores.push(score);
            this._total += score;
            this._length++;
            this._avg = this._total/this._length;
            this._lastThree = (this._length <= 3) ? this._scores.slice() : this._scores.slice(this._length-3, this._length);
        }
        else throw new RangeError("The score must be between 0 and 100.");
    },
    toString() {

        return this._scores.join(", ");
    },
    *[Symbol.iterator]() {
        for(let score of this._scores) {
            yield score;
        }
    }

};