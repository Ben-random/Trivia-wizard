import React, { useEffect, useState, useParams } from "react";
import Card from "react-bootstrap/Card";
import "./style.css";

function CardComponent(props) {
  const [qSet, setQset] = useState(props.qArr);
  const [q, setQ] = useState(qSet[0]);

  function getNextCard() {
    if (qSet.length > 1) {
      let arr = qSet.slice(1);
      const [head, ...tail] = arr;
      setQ(head);
      setQset(tail);
    } else {
      console.log("fetch next stack of cards");
      setQset(qSet.concat(props.qArr));
      console.log(qSet);
      return {};
    }
  }
  return (
    <>
      <div className="body">
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Question:</Card.Title>
            <Card.Text>{q["q"]}</Card.Text>
            <div>
              <button type="button">True</button>
              <button type="button">False</button>
              <button type="button" onClick={getNextCard}>
                Next
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default CardComponent;
