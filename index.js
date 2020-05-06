var rect = require('./rectangle');

function solveRect(l,b){
    console.log("Solving the rectangle with l = "+l+" and b = "+b);
    rect(l,b, (err,rectangle) => {
        if(err){
            console.log("ERROR: "+err.message);
        }
        else{
            console.log("The area is"+ rectangle.area());
            console.log("The perimeter is"+ rectangle.perimeter());
        }
    });
    console.log("This statement is written are the callback!");
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,6);
solveRect(-3,4);