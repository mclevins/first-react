export default function Main() {
    return (
        <main className="main">
            <h1 className="list-title font-700">Fun facts about React</h1>
            <ul className="list">
                <li className="list-item font-400">Was first released in 2013</li>
                <li className="list-item font-400">Was originally created by Jordan Walke</li>
                <li className="list-item font-400">Has well over 100k stars on GitHub</li>
                <li className="list-item font-400">Is maintained by Meta</li>
                <li className="list-item font-400">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            <svg src="/src/assets/react.svg" className="background-logo"/>
        </main>
    );
};