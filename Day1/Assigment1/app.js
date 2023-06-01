console.log("Start App")
const child_prosses = require("child_process")
const new_process = 
child_prosses.spawn("node",["fub.js"], {stdio : "inherit"})


console.log("End App")
