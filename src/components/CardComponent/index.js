import React, {useEffect, useState, useParams} from "react";
import Card from 'react-bootstrap/Card';
import "./style.css";

function CardComponent(props) {
    const [qSet, setQset] = useState(props.qArr)
    const [q, setQ] = useState({})

    function getNextCard() {
        if (qSet.length > 1) {
            const arr = qSet
            const currentCard = arr.pop()
            setQset(arr)
            return currentCard
        } else {
            console.log("fetch next stack of cards")
            return getNextCard()
        }
    }
    useEffect(() => {
        setQ(getNextCard())
    }, [])
    return<>
        <div className="body">
           <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Question:</Card.Title>
                    <Card.Text>
                    {q["q"]}
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
