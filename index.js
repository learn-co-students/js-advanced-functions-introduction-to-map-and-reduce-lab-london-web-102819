// Your code here
const mapToNegativize = function(ary){
    let result = [ ];
    ary.forEach(item => result.push(item * -1));
    return result; 
};

const mapToDouble = function(ary){
    let result = [ ];
    ary.forEach(item => result.push(item * 2));
    return result; 
};

const mapToNoChange = function(ary){
    let result = [ ];
    ary.forEach(item => result.push(item));
    return result; 
};

const mapToSquare = function(ary){
    let result = [ ];
    ary.forEach(item => result.push(item ** 2));
    return result; 
};

const reduceToTotal = function(ary, startingPoint = 0){
    let result = parseInt(startingPoint);
    ary.forEach(item => result +=item);
    return result;
};

const reduceToAllTrue = function(ary){
    let returnValue = true;  
    ary.forEach(item => returnValue = (Boolean(item)) && returnValue);
    return returnValue; 
};

const reduceToAnyTrue = function(ary){
    let returnValue = false;
    for (let i = 0; i < ary.length; i++){
        if (Boolean(ary[i])){
            returnValue = true;
            break 
        }
    }
    return returnValue;
};

/