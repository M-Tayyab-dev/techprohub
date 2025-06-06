# ✅ TechPro Hub – Test Case Documentation

This document includes test cases for the **TechPro Hub** blog website, covering:

- Manual Testing Scenarios  
- HTML Validation Tests  
- CSS Responsiveness Tests  
- JavaScript Functionality Tests  
- User Acceptance Tests  

---

## 📌 1. Manual Testing Scenarios

### ✅ Article Browsing by Category
- **Steps**:
  1. Navigate to homepage.
  2. Click on a category (e.g., “Technology”).
- **Expected Result**: Only articles from that category should appear.
- **Pass/Fail Criteria**: Articles filtered correctly; layout remains intact.

---

### ✅ Newsletter Signup
- **Steps**:
  1. Scroll to newsletter section.
  2. Enter a valid email and click "Subscribe".
- **Expected Result**: Confirmation message appears; email captured/stored.
- **Pass/Fail Criteria**: No reload, success message shown, form validates input.

---

### ✅ Contact Form Submission
- **Steps**:
  1. Fill in Name, Email, and Message.
  2. Click "Submit".
- **Expected Result**: Form is validated, submitted, and a thank-you message appears.
- **Pass/Fail Criteria**: All fields required; form submits without error.

---

## 🧩 2. HTML Validation Tests

### ✅ W3C HTML Validator (Homepage)
- **Steps**:
  1. Paste homepage HTML into https://validator.w3.org.
- **Expected Result**: No HTML errors, minimal warnings.
- **Pass/Fail Criteria**: 
  - Errors = ❌ Fail  
  - Warnings only = ✅ Pass with notes

---

### ✅ Form Semantic Structure
- **Steps**:
  1. Inspect HTML of Contact Form and Newsletter Form.
- **Expected Result**: Correct use of `<form>`, `<label>`, `<input>`, accessibility attributes.
- **Pass/Fail Criteria**: Uses semantic tags and valid nesting.

---

## 📱 3. CSS Responsiveness Tests

### ✅ Mobile Layout Rendering
- **Steps**:
  1. Open DevTools → Toggle device toolbar → Choose iPhone X.
- **Expected Result**: Responsive layout adapts to smaller screen.
- **Pass/Fail Criteria**: No horizontal scroll; readable content; navigation collapses.

---

### ✅ Dark Mode Styling (Planned)
- **Steps**:
  1. Activate dark mode toggle (if implemented).
- **Expected Result**: Dark theme with accessible color contrast.
- **Pass/Fail Criteria**: Contrast meets WCAG 2.1 AA; layout remains usable.

---

### ✅ Image Responsiveness
- **Steps**:
  1. Resize browser from desktop to mobile.
- **Expected Result**: Images scale and maintain proportion.
- **Pass/Fail Criteria**: No distortion or overlap with other elements.

---

## ⚙️ 4. JavaScript Functionality Tests

### ✅ Dark Mode Toggle Persistence
- **Steps**:
  1. Click the dark mode toggle.
  2. Refresh the page.
- **Expected Result**: Theme stays in dark mode.
- **Pass/Fail Criteria**: Preference is saved via `localStorage` or cookie.

---

### ✅ Comment Form Submission (Planned)
- **Steps**:
  1. Enter name, email, and comment.
  2. Click “Post Comment”.
- **Expected Result**: Comment appears below the article.
- **Pass/Fail Criteria**: Form validates inputs; new comment displays in real time or after reload.

---

### ✅ JS Email Validation in Newsletter Form
- **Steps**:
  1. Enter invalid email (e.g., `user@`).
  2. Click "Subscribe".
- **Expected Result**: Inline error message appears.
- **Pass/Fail Criteria**: Form does not submit invalid input; error message shown.

---

## 👥 5. User Acceptance Tests (UAT)

### ✅ UAT: Browse & Read Articles
- **Persona**: Visitor/Reader  
- **Steps**:
  1. Go to homepage.
  2. Click a featured article.
- **Expected Result**: Article opens with full content, author info, and tags.
- **Pass/Fail Criteria**: Smooth navigation; clear layout; no broken elements.

---

### ✅ UAT: Subscribe to Newsletter
- **Persona**: New user  
- **Steps**:
  1. Enter valid email in newsletter form.
  2. Click "Subscribe".
- **Expected Result**: Email saved; confirmation shown.
- **Pass/Fail Criteria**: Works without refresh; user gets feedback.

---

### ✅ UAT: Write Article in Dark Mode (Planned)
- **Persona**: Author  
- **Steps**:
  1. Enable dark mode in editor.
  2. Draft and publish article.
- **Expected Result**: Editor is visually usable in dark mode.
- **Pass/Fail Criteria**: High contrast, no layout break, and content saved successfully.

---

✅ **Note**: Revisit tests when dark mode and comment system features go live. Prioritize automated tests with tools like Cypress, Playwright, or Selenium for future regressions.
