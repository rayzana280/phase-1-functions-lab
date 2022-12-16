const headquarter = 42
function distanceFromHqInBlocks(someValue){
    if(headquarter>=someValue){
        return headquarter-someValue
    }else{
        return someValue - headquarter
    }

}

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264
}

function distanceTravelledInFeet(start, destination){
    if(start>=destination){
        return (start-destination)*264
    }else{
        return (destination-start)*264
    }
}
function calculatesFarePrice(start, destination){
    const feet = distanceTravelledInFeet(start, destination);
    if(feet<=400){
        return 0;
    }else if(feet > 400 && feet < 2000){
        return (feet - 400) * .02;
    }else if(feet > 2000 && feet < 2500){
        return 25;
    }else if(feet>=2500){
        return 'cannot travel that far'
    }
    
    //add if statement 400 is free
    //add else if for charinging 2 cent between 400 - 2000 feet 
    //add else if charging flat fare over 2000-2500 ft
    // over 2500 'cannot travel that far' else
}

console.log(calculatesFarePrice(34, 32));