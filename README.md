# 🌐 TechPro Hub - Static Website

This project is a **static website** designed for TechPro Hub, featuring:

- Semantic HTML structure
- Form validation
- Responsive design
- Navigation functionality
- Performance optimization
- ✅ Automated testing using JavaScript
- 🚀 Continuous deployment via GitHub Pages

---

## 📁 Project Structure

```
/
├── index.html
├── styles.css
├── script.js
├── testscript.js          # AI-generated test script
├── .github/workflows/
│   └── deploy.yml         # GitHub Actions for test & deploy
└── README.md
```

---

## 🧪 Automated Testing

All automated tests are defined in `testscript.js`.  
They test the following:

- HTML structure: `header`, `nav`, `main`, `footer`, `title`
- Forms: required fields and email inputs
- Responsive breakpoints (Mobile, Tablet, Desktop)
- Navigation link integrity
- Page performance (load time < 3s)

Test results are logged in the browser console when the page loads.

---

## 🚀 Deployment via GitHub Actions

Your site is deployed automatically to **GitHub Pages** whenever you push to the `main` branch.

### Workflow Overview

```yaml
- Run tests using testscript.js
- Upload site artifacts (HTML/CSS/JS)
- Deploy to GitHub Pages
```

> Make sure GitHub Pages is configured to deploy from a GitHub Actions workflow in your repo settings.

---

## 🛠️ How to Use Locally

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo.git
cd your-repo

# Open in browser
open index.html  # or just double-click the file

# Run the test script manually
node testscript.js
```

---

## 📄 License

This project is licensed for educational use as part of an SCD assignment.

---

## 👨‍💻 Author

AI-generated test cases by **ChatGPT** for **TechPro Hub**
