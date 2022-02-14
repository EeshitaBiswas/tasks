import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import yosemite_1 from "./assets/yosemite_1.jpeg";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1 style={{ backgroundColor: "red" }}> This is header text</h1>
            <p>Hello World - Eeshita here</p>
            <img
                src={yosemite_1}
                width="400px"
                height="300px"
                alt="My first pic of the gorgeous fall"
            />
            <p>
                This is an Unordered List:
                <ul>
                    <li>First thing</li>
                    <li>Another thing</li>
                    <li>A third item</li>
                </ul>
            </p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "30px",
                                height: "40px",
                                backgroundColor: "red"
                            }}
                        >
                            First Column
                        </div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: "100px",
                                height: "60px",
                                backgroundColor: "red"
                            }}
                        >
                            Second Column
                        </div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        </div>
    );
}

export default App;
