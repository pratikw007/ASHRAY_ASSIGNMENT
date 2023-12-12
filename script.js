let textArea = document.getElementById('textArea');
let colorPicker = document.getElementById('colorPicker');
let fontSelector = document.getElementById('fontSelector');
let undoStack = [];
let redoStack = [];

function importText() {
  let importedText = prompt('Enter the text:');
  if (importedText !== null) {
    textArea.value = importedText;
  }
}

function changeColor() {
  let selectedColor = colorPicker.value;
  textArea.style.color = selectedColor;
}

function increaseTextSize() {
  let currentSize = window.getComputedStyle(textArea, null).getPropertyValue('font-size');
  let newSize = (parseFloat(currentSize) * 1.2) + 'px';
  textArea.style.fontSize = newSize;
}
function decreaseTextSize() {
  let currentSize = window.getComputedStyle(textArea, null).getPropertyValue('font-size');
  let newSize = (parseFloat(currentSize) / 1.2) + 'px';
  textArea.style.fontSize = newSize;
}


function changeFont() {
  let selectedFont = fontSelector.value;
  textArea.style.fontFamily = selectedFont;
}

function saveState() {
  undoStack.push(textArea.value);
}

function undo() {
  if (undoStack.length > 1) {
    redoStack.push(undoStack.pop());
    textArea.value = undoStack[undoStack.length - 1];
  }
}

function redo() {
  if (redoStack.length > 0) {
    undoStack.push(redoStack.pop());
    textArea.value = undoStack[undoStack.length - 1];
  }
}

textArea.addEventListener('input', saveState);