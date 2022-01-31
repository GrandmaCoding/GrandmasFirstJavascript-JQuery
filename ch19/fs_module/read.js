"use strict";

const fs = require("fs").promises;

const fname = "names.txt";

fs.readFile("names.txt", "utf8")
    .then(list => {
        console.log(list);
    })
    .catch(error => console.log(error));

