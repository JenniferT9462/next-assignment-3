import 'bootstrap/dist/css/bootstrap.min.css';

export default function AboutMe() {
    let myName = "Jennifer Tarleton";
    return (
        <div>
            <h1>About Me</h1>
            <p>
                My name is {myName}, I am a Junior Software Developer 
                and I'm interested in creating things that have a real
                 impact. I love the challenge of turning an idea into 
                 a working reality, and pushing that idea even further. 
            </p>
            <ul>
                <h2>Proficient Programming Languages:</h2>
                <li>JavaScript</li>
                <li>Python</li>
                <li>SQL</li>
                <li>R</li>
            </ul>
        </div>
    );
}