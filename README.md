# Dev Stack

Dev Stack is a responsive React application where users can explore different development technologies and build their own preferred technology stack.

Users can add technologies to their stack, remove individual technologies, clear the whole stack, and view selected technologies in alphabetical order.

## Live Site

Live Site: dev-stack.iabir.me
Vercel: https://dev-stack-flax-three.vercel.app/

## GitHub Repository

Repository: https://github.com/iRfANhAiDeRABiR/b14-A-005.git

## Technologies Used

- React.js
- Vite
- JavaScript
- Tailwind CSS
- JSON
- React Toastify

## Features

- Browse different development technologies and tools.
- Add technologies to a personal development stack.
- Prevent the same technology from being added more than once.
- Remove individual technologies from the stack.
- Remove all selected technologies at once.
- Display selected technologies alphabetically from A to Z.
- Show loading state while technology data is being fetched.
- Show toast notifications for add, remove, duplicate, and remove-all actions.
- Responsive design for mobile, tablet, and desktop.
- Sticky responsive navigation bar.

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

Go to the project folder:

```bash
cd dev-stack
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

# React Questions

## 1. What is JSX, and why is it used in React?

JSX allows us to write HTML-like code inside JavaScript.

It makes React components easier to read and helps us describe what the user interface should look like.

Example:

```jsx
<h1>Dev Stack</h1>
```

---

## 2. What is the difference between props and state?

Props are data passed from a parent component to a child component.

State is data managed inside a component that can change while the application is running.

In this project, I used props to pass technology information and functions between components.

I used state to store technology data, selected technologies, loading status, errors, and mobile menu status.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

`useState` allows a React component to store and update data.

For example, I used it to store all technologies:

```jsx
const [technologies, setTechnologies] = useState([]);
```

I also used it to store selected technologies:

```jsx
const [selectedTechnologies, setSelectedTechnologies] = useState([]);
```

Other uses include loading state, error state, and the mobile navigation menu.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` allows us to run code after a React component loads.

In this project, I used it to load the technology data from:

```text
/technologies.json
```

Example:

```jsx
useEffect(() => {
  fetch("/technologies.json")
    .then((response) => response.json())
    .then((data) => {
      setTechnologies(data);
    });
}, []);
```

The empty dependency array `[]` means the effect runs once when the component first loads.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` prop to identify each item in a list.

It helps React understand which item was added, removed, or updated.

In this project, every technology has a unique ID.

Example:

```jsx
{technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
))}
```

Here I used:

```jsx
key={technology.id}
```

because every technology has a unique ID.

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different content depending on a condition.

I used conditional rendering in the Your Stack section.

If no technology is selected, the application shows:

```text
Your stack is empty
```

Example:

```jsx
{selectedTechnologies.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  <div>
    {selectedTechnologies.map((technology) => (
      <div key={technology.id}>
        {technology.name}
      </div>
    ))}
  </div>
)}
```

If technologies are selected, the selected technology list is shown instead.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using props.

For example, `Technologies.jsx` passes technology data to `TechnologyCard.jsx`:

```jsx
<TechnologyCard
  technology={technology}
  onAdd={handleAddToStack}
/>
```

The child component receives those props:

```jsx
const TechnologyCard = ({ technology, onAdd }) => {
```

A child can communicate with the parent by calling a function received through props.

Example:

```jsx
<button onClick={() => onAdd(technology)}>
  Add to Stack
</button>
```

Here the child calls `onAdd()`, and the parent component updates the selected technologies.

---

## Project Structure

```text
dev-stack/
├── public/
│   ├── technologies.json
│   ├── logo-text.png
│   └── banner-stack.png
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Technologies.jsx
│   │   ├── TechnologyCard.jsx
│   │   ├── YourStack.jsx
│   │   └── Footer.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── README.md
```

## Author

Built as a React learning project using React, Vite, Tailwind CSS, JavaScript, JSON, and React Toastify.