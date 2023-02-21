import React, {useEffect, useState, useParams, useContext} from "react";
import {DataContext} from "../../context/DataContext";
import Card from 'react-bootstrap/Card';
import "./style.css";

function CardComponent(props) {
    const { questions } = useContext(DataContext)
    return<>
        <div className="body">
           {questions.length > 0 ? <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Question:</Card.Title>
                    <Card.Text>
                    {questions[0].question}
                    </Card.Text>
                    <div>
                    <button type="button">True</button>
                    <button type="button">False</button>
                    <button type="button">Next</button>
                    </div>
                </Card.Body>
            </Card> : <></>}
        </div>
    </>;
}

export default CardComponent
