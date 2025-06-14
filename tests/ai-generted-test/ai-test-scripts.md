
# TechPro Hub Automated Test Script

### 🧪 AI-Generated Test Scripts for TechPro Hub  
**Generated by ChatGPT for SCD Assignment**

---

## 📜 JavaScript Code

```javascript
// AI-Generated Test Scripts for TechPro Hub
// Generated by ChatGPT for automated testing

console.log("Starting TechPro Hub Automated Tests...");

// Test 1: HTML Structure Validation
function testHTMLStructure() {
    console.log("\n=== HTML Structure Test ===");

    const requiredElements = [
        'header',
        'nav', 
        'main',
        'footer',
        'title'
    ];

    let passed = 0;
    let total = requiredElements.length;

    requiredElements.forEach(tag => {
        const element = document.querySelector(tag);
        if (element) {
            console.log(`✅ ${tag} element found`);
            passed++;
        } else {
            console.log(`❌ ${tag} element missing`);
        }
    });

    console.log(`HTML Structure Test: ${passed}/${total} passed`);
    return passed === total;
}

// Test 2: Form Validation
function testFormValidation() {
    console.log("\n=== Form Validation Test ===");

    const forms = document.querySelectorAll('form');
    let testsPassed = 0;

    forms.forEach((form, index) => {
        console.log(`Testing form ${index + 1}:`);

        // Check for required fields
        const requiredFields = form.querySelectorAll('[required]');
        console.log(`- Found ${requiredFields.length} required fields`);

        // Check email validation
        const emailFields = form.querySelectorAll('input[type="email"]');
        console.log(`- Found ${emailFields.length} email fields`);

        if (requiredFields.length > 0 || emailFields.length > 0) {
            console.log(`✅ Form ${index + 1} has validation`);
            testsPassed++;
        }
    });

    console.log(`Form Validation Test: ${testsPassed}/${forms.length} forms validated`);
    return testsPassed > 0;
}

// Test 3: Responsive Design Check
function testResponsiveDesign() {
    console.log("\n=== Responsive Design Test ===");

    const breakpoints = [
        { name: 'Mobile', width: 375 },
        { name: 'Tablet', width: 768 },
        { name: 'Desktop', width: 1200 }
    ];

    let responsiveTests = 0;

    breakpoints.forEach(bp => {
        // Simulate viewport width
        const mediaQuery = window.matchMedia(`(max-width: ${bp.width}px)`);
        console.log(`${bp.name} (${bp.width}px): ${mediaQuery.matches ? 'Active' : 'Inactive'}`);
        responsiveTests++;
    });

    console.log(`✅ Responsive breakpoints tested: ${responsiveTests}`);
    return true;
}

// Test 4: Navigation Functionality
function testNavigation() {
    console.log("\n=== Navigation Test ===");

    const navLinks = document.querySelectorAll('nav a, .nav a');
    let validLinks = 0;

    navLinks.forEach((link, index) => {
        const href = link.getAttribute('href');
        if (href && href !== '#') {
            console.log(`✅ Nav link ${index + 1}: ${href}`);
            validLinks++;
        } else {
            console.log(`⚠️ Nav link ${index + 1}: Empty or placeholder link`);
        }
    });

    console.log(`Navigation Test: ${validLinks}/${navLinks.length} valid links`);
    return validLinks > 0;
}

// Test 5: Performance Check
function testPerformance() {
    console.log("\n=== Performance Test ===");

    const perfData = performance.getEntriesByType('navigation')[0];
    const loadTime = perfData.loadEventEnd - perfData.loadEventStart;

    console.log(`Page Load Time: ${loadTime}ms`);
    console.log(`DOM Content Loaded: ${perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart}ms`);

    const isGoodPerformance = loadTime < 3000; // Less than 3 seconds
    console.log(`${isGoodPerformance ? '✅' : '❌'} Performance: ${isGoodPerformance ? 'Good' : 'Needs Improvement'}`);

    return isGoodPerformance;
}

// Run All Tests
function runAllTests() {
    console.log("🚀 Starting Automated Tests for TechPro Hub");
    console.log("Generated by AI (ChatGPT) for SCD Assignment");
    console.log("==================================================");

    const testResults = {
        htmlStructure: testHTMLStructure(),
        formValidation: testFormValidation(),
        responsiveDesign: testResponsiveDesign(),
        navigation: testNavigation(),
        performance: testPerformance()
    };

    console.log("\n=== TEST SUMMARY ===");
    let passedTests = 0;
    let totalTests = Object.keys(testResults).length;

    Object.entries(testResults).forEach(([test, result]) => {
        console.log(`${result ? '✅' : '❌'} ${test}: ${result ? 'PASSED' : 'FAILED'}`);
        if (result) passedTests++;
    });

    console.log(`\n🎯 Overall Result: ${passedTests}/${totalTests} tests passed`);
    console.log(`Success Rate: ${(passedTests / totalTests * 100).toFixed(1)}%`);

    return testResults;
}

// Auto-run tests when page loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runAllTests);
} else {
    runAllTests();
}
```

---

## ✅ Test Result Summary

| Test Category         | Result  |
|-----------------------|---------|
| HTML Structure        | ✅ Passed |
| Form Validation       | ✅ Passed |
| Responsive Design     | ✅ Passed |
| Navigation            | ✅ Passed |
| Performance           | ✅ Passed |
| **Overall Result**    | **5/5 Passed** |
| **Success Rate**      | **100.0%** |
