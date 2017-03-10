//read radius as user entered value //

var r = parseFloat (prompt("Enter radius of circle"));

if (typeof r =="number") {
    var area = 3.14*Math.pow(r,2);
    console.log("Area = "+area );
} else 
    console.log("Not a number")
