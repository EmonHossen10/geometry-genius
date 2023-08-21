//  *************************  Triangle area
function calculateTriangleArea() {
  // get the base by id
  const baseField = document.getElementById("triangle-base");
  const baseValueString = baseField.value;
  const base = parseFloat(baseValueString);
  baseField.value = "";
  // get the height by id
  const heightField = document.getElementById("triangle-height");
  const heightValueString = heightField.value;
  const height = parseFloat(heightValueString);
  heightField.value = "";
  // console.log(base, height)

  // calculate area
  const area = 0.5 * base * height;
  const areaField = document.getElementById("triangle-area");
  areaField.innerText = area;
}
// ********************* rectangle area

function calculateRectangleArea() {
  // get width by id
  const widthField = document.getElementById("rectangle-width");
  const widthValueString = widthField.value;
  const width = parseFloat(widthValueString);
  widthField.value = "";

  // get length by id
  const lengthField = document.getElementById("rectangle-length");
  const lengthValueString = lengthField.value;
  const length = parseFloat(lengthValueString);
  lengthField.value = "";

  // calculation

  const area = width * length;
  const areaField = document.getElementById("rectangle-area");
  areaField.innerText = area;
}

// parallelogram area calculation
function parallelogramAreaCalculation() {
  const base = getInput("parallelogram-base");
  const height = getInput("parallelogram-height");
  area = base * height;
  setAreaInnerText("parallelogram-area", area);
}
//  ellipse area calculation
function ellipseAreaCalculation() {
  const majorRadius = getInput("ellipse-major-radius");
  const minorRadius = getInput("ellipse-minor-radius");
  area = 3.14 * majorRadius * minorRadius;
   setAreaInnerText("ellipse-area",area)
}

//                    -------------------------------------------------------
// ************* reusable function -->  get input
function getInput(id) {
  const inputField = document.getElementById(id);
  const inputValueText = inputField.value;
  const input = parseFloat(inputValueText);
  inputField.innerText = "";
  return input;
}
// set area value
function setAreaInnerText(elementId, area) {
  const areaId = document.getElementById(elementId);
  areaId.innerText = area;
}
