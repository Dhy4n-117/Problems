# Counter App - Debugging Report

## Overview
This project is a simple Counter Application that allows users to increment and decrement a displayed number. The original code contained several syntax and logic errors which have been resolved.

## Files
* `index.html`: The structure of the page.
* `style.css`: Styling and layout centering.
* `script.js`: Logic for the counter functionality.

## Bug Report & Fixes

### 1. JavaScript Logic Error (Critical)
* **Issue:** The `increase()` function attempted to target the element with the ID `counter`.
    * *Code:* `document.getElementById("counter")`
* **Diagnosis:** The HTML element displaying the number has the ID `count`. The class `counter` belongs to the parent container, not the number itself.
* **Fix:** Updated selector to `document.getElementById("count")`.

### 2. CSS Syntax Errors
* **Issue:** The CSS code was missing semicolons at the end of several property values.
    * *Location:* `body` (`align-items: center`) and `.counter` (`border: 2px solid black`).
* **Diagnosis:** In CSS, missing semicolons cause the subsequent property or the entire rule to be ignored by the browser.
* **Fix:** Added missing semicolons to ensure all styles render correctly.

### 3. JavaScript Inconsistency & Syntax
* **Issue:** The `decrease()` function utilized `.innerHTML`, whereas `increase()` used `.innerText`. Additionally, a semicolon was missing at the end of the statement.
* **Fix:** Standardized both functions to use `.innerText` (better for plain text) and added the missing semicolon.

### 4. HTML/CSS Best Practices
* **Issue:** The original page lacked a `DOCTYPE` declaration and CSS resets.
* **Fix:**
    * Added `<!DOCTYPE html>` and `meta` tags for proper rendering and viewport scaling.
    * Added `margin: 0` to the `body` in CSS to prevent scrollbars when using `100vh`.

## How to Run
1.  Download `index.html`, `style.css`, and `script.js` into the same folder.
2.  Open `index.html` in any modern web browser.
                                                            
