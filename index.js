// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  const hq = 42;
  const distanceInBlocks = Math.abs(block- hq);
  return distanceInBlocks;
}


function distanceFromHqInFeet(feet) {
  const length = 264; 
  const distanceInBlocks = distanceFromHqInBlocks(feet);
  const distanceInFeet = distanceInBlocks * length;
  return distanceInFeet;
}
function distanceTravelledInFeet(start, destination) {
  const length = 264; 
  const distanceInBlocks = Math.abs(start - destination);
  const distanceInFeet = distanceInBlocks * length;
  return distanceInFeet;
}
function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);

  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}






