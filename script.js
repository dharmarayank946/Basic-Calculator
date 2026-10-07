/**
 * VEDA Technology — Task 7: Basic Calculator
 * JavaScript State Management & Event Handling
 * Built cleanly without dynamic code execution.
 */

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const mainDisplay = document.getElementById('main-display');
  const historyDisplay = document.getElementById('history-display');
  const keypad = document.querySelector('.calculator-grid');

  // Calculator State Variables
  let currentInput = '0';
  let previousInput = null;
  let operator = null;
  let shouldResetDisplay = false;
  let isError = false;
  let lastExpression = '';

  /**
   * Update the UI screen displays
   */
  function updateDisplay() {
    mainDisplay.textContent = currentInput;

    if (isError) {
      historyDisplay.textContent = '';
      return;
    }

    if (previousInput !== null && operator !== null) {
      historyDisplay.textContent = `${previousInput} ${operator}`;
    } else if (lastExpression) {
      historyDisplay.textContent = lastExpression;
    } else {
      historyDisplay.textContent = '';
    }

    // Highlight active operator button if waiting for second operand
    document.querySelectorAll('.btn-operator').forEach((btn) => {
      const btnOp = btn.getAttribute('data-val');
      if (operator === btnOp && shouldResetDisplay && !isError) {
        btn.classList.add('active-op');
      } else {
        btn.classList.remove('active-op');
      }
    });
  }

  /**
   * Reset calculator state completely (Clear - C)
   */
  function clearAll() {
    currentInput = '0';
    previousInput = null;
    operator = null;
    shouldResetDisplay = false;
    isError = false;
    lastExpression = '';
    updateDisplay();
  }

  /**
   * Delete the last typed character (Backspace - ⌫)
   */
  function deleteLastDigit() {
    if (isError || shouldResetDisplay) {
      currentInput = '0';
      shouldResetDisplay = false;
      isError = false;
    } else {
      currentInput = currentInput.slice(0, -1);
      if (currentInput === '' || currentInput === '-') {
        currentInput = '0';
      }
    }
    updateDisplay();
  }

  /**
   * Append digit (0-9) to current input
   */
  function appendNumber(numberStr) {
    if (isError) {
      clearAll();
    }

    if (shouldResetDisplay) {
      currentInput = numberStr;
      shouldResetDisplay = false;
    } else {
      if (currentInput === '0') {
        currentInput = numberStr;
      } else if (currentInput.length < 15) {
        currentInput += numberStr;
      }
    }

    updateDisplay();
  }

  /**
   * Append decimal point (.) while preventing multiple decimals
   */
  function appendDecimal() {
    if (isError) {
      clearAll();
    }

    if (shouldResetDisplay) {
      currentInput = '0.';
      shouldResetDisplay = false;
    } else if (!currentInput.includes('.')) {
      currentInput += '.';
    }

    updateDisplay();
  }

  /**
   * Handle Operator selection (+, -, ×, ÷)
   */
  function handleOperator(selectedOperator) {
    if (isError) return;

    // If an operator is already queued and user clicks another operator without typing a new number
    if (previousInput !== null && operator !== null && !shouldResetDisplay) {
      computeResult();
    }

    previousInput = currentInput;
    operator = selectedOperator;
    shouldResetDisplay = true;
    lastExpression = '';
    updateDisplay();
  }

  /**
   * Perform calculation using standard JS arithmetic operators
   */
  function computeResult() {
    if (isError || operator === null || previousInput === null) return;

    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let result = 0;

    // Divide by zero check
    if ((operator === '÷' || operator === '/') && num2 === 0) {
      currentInput = 'Cannot divide by zero';
      isError = true;
      previousInput = null;
      operator = null;
      shouldResetDisplay = true;
      lastExpression = '';
      updateDisplay();
      return;
    }

    // JS arithmetic operators
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '×':
      case '*':
        result = num1 * num2;
        break;
      case '÷':
      case '/':
        result = num1 / num2;
        break;
      default:
        return;
    }

    // Fix JavaScript floating point precision issues (e.g. 0.1 + 0.2 = 0.3, 2.5 + 3.5 = 6)
    result = Math.round(result * 1e10) / 1e10;

    lastExpression = `${previousInput} ${operator} ${currentInput} =`;
    currentInput = String(result);
    previousInput = null;
    operator = null;
    shouldResetDisplay = true;
    isError = false;

    updateDisplay();
  }

  /**
   * Keypad Click Event Delegation
   */
  keypad.addEventListener('click', (e) => {
    const target = e.target.closest('button');
    if (!target) return;

    const action = target.getAttribute('data-action');
    const val = target.getAttribute('data-val');

    switch (action) {
      case 'number':
        appendNumber(val);
        break;
      case 'decimal':
        appendDecimal();
        break;
      case 'operator':
        handleOperator(val);
        break;
      case 'equals':
        computeResult();
        break;
      case 'clear':
        clearAll();
        break;
      case 'delete':
        deleteLastDigit();
        break;
    }
  });

  /**
   * Keyboard Support for Usability
   */
  document.addEventListener('keydown', (e) => {
    if (e.key >= '0' && e.key <= '9') {
      appendNumber(e.key);
    } else if (e.key === '.') {
      appendDecimal();
    } else if (e.key === '+') {
      handleOperator('+');
    } else if (e.key === '-') {
      handleOperator('-');
    } else if (e.key === '*') {
      handleOperator('×');
    } else if (e.key === '/') {
      e.preventDefault();
      handleOperator('÷');
    } else if (e.key === 'Enter' || e.key === '=') {
      e.preventDefault();
      computeResult();
    } else if (e.key === 'Backspace') {
      deleteLastDigit();
    } else if (e.key === 'Escape' || e.key.toLowerCase() === 'c') {
      clearAll();
    }
  });

  // Initial display setup
  updateDisplay();
});
