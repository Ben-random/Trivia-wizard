import React, {useEffect, useState} from "react";
import Card from 'react-bootstrap/Card';


function CardComponent() {
    return<>
        <div>
           <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Question:</Card.Title>
                    <Card.Text>
                    What's Obama's last name?
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    </>;
}

export default CardComponent
