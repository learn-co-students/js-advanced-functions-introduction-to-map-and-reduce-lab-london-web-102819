// Your code here
function mapToNegativize(arr) {return arr.map(m => -m)}
function mapToNoChange(arr) {return arr.map(m => m)}
function mapToDouble(arr) { return arr.map(m => 2*m)}
function mapToSquare(arr) { return arr.map(m => m**2)}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint;
    for (let i=0; i<sourceArray.length;i++) {
        total = total + sourceArray[i]
    }
    return total
}

function reduceToAllTrue(sourceArray) {
    let a = 0
    for (let i=0; i<sourceArray.length; i++) {
        if (!!sourceArray[i]) {a = a + 1}
    }
    if (a === sourceArray.length) {return true}
    else {return false}
}

function reduceToAnyTrue(sourceArray) {
    let a = 0
    for (let i=0; i<sourceArray.length; i++) {
        if (!!sourceArray[i]) {a = a + 1}
    }
    if (a > 0) {return true}
    else {return false}
}