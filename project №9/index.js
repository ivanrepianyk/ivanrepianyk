const calculateArea = function (width, height) {
    return width * height;
  };
  
const area1 = calculateArea(5, 10);
console.log(area1); 

const calculateAreaArrow = (width, height) => width * height;
const area2 = calculateAreaArrow(5, 10);
console.log(area2);
