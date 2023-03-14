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
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}






