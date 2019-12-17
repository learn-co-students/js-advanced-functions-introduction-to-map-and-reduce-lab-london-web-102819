// Your code here


function mapToNegativize(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = -arr[i];
    }
    return arr;
}

function mapToNoChange(arr) {
    return arr;
}

function mapToDouble(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = 2*arr[i];
    }
    return arr;
}

function mapToSquare(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i]**2;
    }
    return arr;
}

function reduceToTotal(arr, start = 0) {
    let total = start;

    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

function reduceToAllTrue(arr) {
    
    for(let i = 0; i < arr.length; i++) {
        if (!arr[i]) return false;
    }
    return true;
}

function reduceToAnyTrue(arr) {
    
    for(let i = 0; i < arr.length; i++) {
        if (arr[i]) return true;
    }
    return false;
}