import { useState } from "react";
import "./App.css";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState("");

    return (
        <div className="app">
            <div className="header">
                <p className="assignment">FSD LAB ASSIGNMENT 05</p>
                <h1>React Controlled Form</h1>
                <p className="subtitle">
                    Enter your details and see them update instantly.
                </p>
            </div>

            <div className="form-card">
                <h2>Student Details</h2>

                <form>
                    <label htmlFor="name">Full Name</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="course">Course</label>
                    <input
                        id="course"
                        type="text"
                        placeholder="Enter your course"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    />
                </form>

                <div className="preview">
                    <h2>Live Preview</h2>
                    <p><strong>Name:</strong> {name || "Not entered yet"}</p>
                    <p><strong>Email:</strong> {email || "Not entered yet"}</p>
                    <p><strong>Course:</strong> {course || "Not entered yet"}</p>
                </div>
            </div>
        </div>
    );
}

export default App;