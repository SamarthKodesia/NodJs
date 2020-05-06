var rect = require('./rectangle');

function solveRect(l,b){
    console.log("Solving the rectangle with l = "+l+" and b = "+b);
    if( l <=0 || b<=0 ){
        console.log("Invalid dimensions");
    }
    else{
        console.log("Area of the rectangle is "+ rect.area(l,b));
        console.log("The perimeter of the rectangle is "+rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,6);
solveRect(-3,4);