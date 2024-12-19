import logo from "/src/assets/react.svg";

export default function Navbar() {
    return (
        <header className="header">
            <nav className="navbar">
                <img className="logo" alt="React logo" src={logo}/>
                <span className="title font-700">ReactFacts</span>
            </nav>
        </header>
    );
};