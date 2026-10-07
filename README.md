# Basic Calculator — VEDA Technology Task 7

A clean, modern, and mobile-responsive Basic Calculator built using pure **HTML5**, **CSS3**, and **JavaScript** for the VEDA Technology Internship.

---

## 📌 Project Overview
- **Project Title:** Basic Calculator
- **Task:** VEDA Technology Internship — Task 7
- **Tech Stack:** HTML5, CSS3 (CSS Grid), JavaScript (ES6)

---

## 🎯 Objective
The objective of this project is to create a beginner-friendly, clean, and intuitive web calculator using core front-end technologies without external libraries or frameworks. The calculator handles fundamental arithmetic operations, state management, decimal validation, and divide-by-zero edge cases safely without relying on `eval()`.

---

## 💻 Technologies Used
1. **HTML5**: Semantic elements for structure, accessibility attributes, and clear keypad layout.
2. **CSS3**: CSS Grid for keypad layout, Flexbox for alignment, clean light color palette, responsive typography, subtle button hover and active click feedback.
3. **JavaScript (ES6)**: Event-driven calculation logic, DOM manipulation, explicit state tracking (`currentInput`, `previousInput`, `operator`), keyboard shortcuts, and strict validation.

---

## ✨ Features
- 🎨 **Light & Professional UI**: Crisp white and slate theme with smooth shadows and clear button typography.
- 📐 **CSS Grid Keypad**: Clean 4-column layout for uniform button sizing and layout balance.
- 📱 **Fully Responsive**: Adapts seamlessly to mobile, tablet, and desktop screens.
- 🚫 **No `eval()`**: Calculations are performed strictly using standard JavaScript arithmetic operators (`+`, `-`, `*`, `/`).
- 🛑 **Input Validation**: Prevents invalid numbers such as multiple decimal points in a single value.
- ⚡ **Error Safety**: Prevents application crashes when attempting division by zero.
- ⌨️ **Keyboard Support**: Full keyboard control including number keys, standard operators (`+`, `-`, `*`, `/`), `Enter` / `=`, `Backspace`, and `Escape` / `C`.

---

## ➕ Supported Operations
| Operation | Button Symbol | JS Operator | Description |
| :--- | :---: | :---: | :--- |
| **Addition** | `+` | `+` | Adds two numbers (e.g., `10 + 5 = 15`) |
| **Subtraction** | `-` | `-` | Subtracts second number from first (e.g., `10 - 5 = 5`) |
| **Multiplication** | `×` | `*` | Multiplies two numbers (e.g., `10 × 5 = 50`) |
| **Division** | `÷` | `/` | Divides first number by second (e.g., `10 ÷ 5 = 2`) |
| **Decimal** | `.` | `.` | Inserts decimal point (prevents duplicate decimals) |
| **Clear** | `C` | N/A | Resets all calculator state & display to initial state |
| **Backspace** | `⌫` | N/A | Deletes the last entered digit |
| **Equals** | `=` | N/A | Computes the result of the queued operation |

---

## 🛡️ Divide-by-Zero Handling
When division by zero (`X ÷ 0`) is attempted:
1. The calculator catches the division by zero condition before performing `num1 / 0`.
2. The main screen displays a clear error message: **`Cannot divide by zero`**.
3. The internal state enters an error lock state so subsequent operation attempts do not corrupt state.
4. Pressing any number button or the **Clear (C)** button safely clears the error and resets the calculator for new calculations.

---

## 🚀 How to Run the Project

### Prerequisites
A modern web browser (e.g., Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).

### Steps
1. **Clone or Download** the repository:
   ```bash
   git clone https://github.com/dharmarayank946/Syntechhub_Portfolio_Website.git
   ```
2. **Navigate** to the Task 7 folder:
   ```bash
   cd Task7-Basic-Calculator
   ```
3. **Open `index.html`** in your browser by double-clicking the file or serving it via a local static web server (e.g., Live Server extension in VS Code, or python http.server):
   ```bash
   python -m http.server 8000
   ```
4. Access the application in your browser at `http://localhost:8000`.

---

## ✅ Test Cases Verified
- [x] `10 + 5 = 15`
- [x] `10 - 5 = 5`
- [x] `10 × 5 = 50`
- [x] `10 ÷ 5 = 2`
- [x] `2.5 + 3.5 = 6`
- [x] `5 ÷ 0` → Shows `"Cannot divide by zero"`
- [x] **Clear (C)** → Fully resets calculator display and state
- [x] **Decimal validation** → Prevents multiple decimals (`2.5.3` is prevented)
- [x] **Zero `eval()`** → No `eval()` call anywhere in the project
