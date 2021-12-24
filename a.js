var red = [{ x: 0.18, y: 0.38 }, { x: 0.82, y: 0.38 }, { x: 0.82, y: 0.62 }, { x: 0.18, y: 0.62 }];
console.log(red, "\n");
let numCol = 5;
let numRow = 2;

// var totalNumBox = numCol * numRow;

let startX = red[0].x;
let startY = red[0].y;

let distX = Math.abs((red[0].x - red[1].x) / numCol);
let distY = Math.abs((red[0].y - red[3].y) / numRow);

//Math.round((num + Number.EPSILON) * 100) / 100 --> rounding upto 3 digits
// rounding ---->
distX = Math.round((distX + Number.EPSILON)*1000) / 1000;
distY = Math.round((distY + Number.EPSILON)*1000) / 1000;

console.log("distX:", distX);
console.log("distY:", distY);

var topLeft= [];

for(var i=0; i<numRow; i++){
    for(var j=0; j<numCol; j++){
        let tempX = startX + j*distX;
        let tempY = startY + i*distY;
        tempX = Math.round((tempX + Number.EPSILON)*1000) / 1000;
        tempY = Math.round((tempY + Number.EPSILON)*1000) / 1000;
        var data = {x:tempX, y:tempY};
        topLeft.push(data);
    }
}
console.log("\nTopLeftCordinates:-----------------------------------------")
console.log(topLeft);
console.log("\n");

var allCordinates = [];

for(var i=0; i<topLeft.length; i++){
    var topRight = {x:topLeft[i].x + distX, y:topLeft[i].y};
    var bottomLeft = {x:topLeft[i].x, y:topLeft[i].y+distY};
    var bottomRight = {x:topLeft[i].x + distX, y:topLeft[i].y+distY};

    topLeft[i].x = Math.round((topLeft[i].x + Number.EPSILON)*1000) / 1000;
    topLeft[i].y = Math.round((topLeft[i].y + Number.EPSILON)*1000) / 1000;

    topRight.x = Math.round((topRight.x + Number.EPSILON)*1000) / 1000;
    topRight.y = Math.round((topRight.y + Number.EPSILON)*1000) / 1000;

    bottomLeft.x = Math.round((bottomLeft.x + Number.EPSILON)*1000) / 1000;
    bottomLeft.y = Math.round((bottomLeft.y + Number.EPSILON)*1000) / 1000;

    bottomRight.x = Math.round((bottomRight.x + Number.EPSILON)*1000) / 1000;
    bottomRight.y = Math.round((bottomRight.y + Number.EPSILON)*1000) / 1000;

    var allVertices = [ {x:topLeft[i].x, y:topLeft[i].y}, //topleft
                        {x:topRight.x, y:topRight.y}, //topright
                        {x:bottomRight.x, y:bottomRight.y}, //bottomRight
                        {x:bottomLeft.x, y:bottomLeft.y}, //bottomLeft
                        {x:topLeft[i].x, y:topLeft[i].y} ]; // topleft
    
    allCordinates.push(allVertices);
}

console.log("All Cordinates -----------------------------------------\n");
console.log("[ (topLeft), ");
console.log(" (topRight), ");
console.log(" (bottomRight)");
console.log(" (bottomLeft),");
console.log(" (topLeft) ]");
console.log(allCordinates);