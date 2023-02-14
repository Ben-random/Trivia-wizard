import React, {useEffect, useState} from "react";
import Card from 'react-bootstrap/Card';
import "./style.css";

function CardComponent() {
    const [q, setQ] = useState([])

    useEffect(() => {
        console.log("Ran useEffect")
    })

    return<>
        <div className="body">
           <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Question:</Card.Title>
                    <Card.Text>
                    What's Obama's last name?
                    </Card.Text>
                    <div>
                    <button type="button">True</button>
                    <button type="button">False</button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    </>;
}

export default CardComponent
