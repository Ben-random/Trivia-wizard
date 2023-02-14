import React, { useEffect, useState, useParams } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {CardComponent} from "./components";

function Home() {
    return(
        <div>
       <CardComponent/>
       </div>
    );
}

export {Home};
