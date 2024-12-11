import './index.css';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Header />
    <Page />
    <Footer />
  </StrictMode>
)

function Header() {
  return (
    <img src="/src/assets/react.svg" />
  )
};

function Page() {
  return (
    <main>
      <h1>This is a React App!</h1>
      <ol>
        <li>Because it is composable!</li>
        <li>Because it is declarative!</li>
        <li>Because Zuck owns it!!! The Zuck!</li>
      </ol>
    </main>
  )
};

function Footer() {
  return (
    <p>&copy; 2024 Levins development. All rights reserved.</p>
  )
};