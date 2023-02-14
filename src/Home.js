import React, { useEffect, useState, useParams } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {CardComponent} from "./components";

function Home() {

    const qSet = [
        {"q": "Who killed JFK?", "a": true},
        {"q": "Who is the wrapper m&m?", "a": false},
        {"q": "How does this effect LeBron's legacy?", "a": true}
    ]
    return(
        <div>
       <CardComponent qArr={qSet}/>
       </div>
    );
}

export {Home};
