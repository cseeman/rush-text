// Rush Text Generator - Main JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // Get DOM elements
  const textInput = document.getElementById('text-input');
  const fontSelect = document.getElementById('font-select');
  const sizeSlider = document.getElementById('size-slider');
  const sizeValue = document.getElementById('size-value');
  const textPreview = document.getElementById('text-preview');

  // Update preview text
  const updateText = () => {
    const text = textInput.value || 'Working Man';
    textPreview.textContent = text;
  };

  // Update font
  const updateFont = () => {
    const selectedFont = fontSelect.value;

    // Remove all font classes
    textPreview.className = 'text-preview';

    // Add selected font class
    textPreview.classList.add(`font-${selectedFont}`);
  };

  // Update font size
  const updateSize = () => {
    const size = sizeSlider.value;
    sizeValue.textContent = size;
    textPreview.style.fontSize = `${size}px`;
  };

  // Event listeners
  textInput.addEventListener('input', updateText);
  fontSelect.addEventListener('change', updateFont);
  sizeSlider.addEventListener('input', updateSize);

  // Initialize with default values
  updateText();
  updateFont();
  updateSize();
});