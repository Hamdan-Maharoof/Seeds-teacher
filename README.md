# seeds-teacher-profile

This project implements a simple, responsive teacher profile page for the Seeds platform, built with React. It allows students to view a teacher’s name, subject, bio, video intro, and available courses. A dropdown beside the “Book a session” button lets students choose between “Quran” or “Arabic,” and clicking the button pops up a confirmation alert.

---

## 🎯 Features

- **Responsive design**: Layout adapts to desktop and mobile screens.
- **Teacher information**: Displays name, subjects, bio, and mock course list.
- **Video intro**: Clickable YouTube thumbnail that opens the lesson in a new tab.
- **Session booking**: Dropdown to select course, plus a button with a popup confirmation.
- **Light color scheme**: Aesthetic, easy-on-the-eyes UI.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14+)
- **npm** (v6+)
- **Git** (v2+)

### Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/seeds-teacher-profile.git
   ```
2. **Navigate into the project**
   ```bash
   cd seeds-teacher-profile
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```

### Running Locally

```bash
npm start
```
- Opens [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
seeds-teacher-profile/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TeacherProfile.js
│   │   └── TeacherProfile.css
│   ├── App.js
│   └── index.js
├── screenshots/
│   ├── desktop-view.png
│   └── mobile-view.png
├── .gitignore
├── package.json
└── README.md
```

---

## 📸 Screenshots

Include your own screenshots in the `screenshots/` folder. Example:

- `desktop-view.png` — Desktop layout
- `mobile-view.png` — Mobile layout

---

## 📦 Deployment

You can deploy this React app to GitHub Pages, Netlify, Vercel, or any static host.

1. **Build**
   ```bash
   npm run build
   ```
2. **Serve** the contents of `build/` via your hosting platform.

---

## 🤝 Contributing

1. Fork this repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request.

---

## 📝 License

This project is licensed under the [MIT License](LICENSE).
