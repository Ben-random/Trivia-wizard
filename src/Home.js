import React, { useEffect, useState, useParams, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CardComponent } from "./components";
import {DataContext} from "./context/DataContext";
import Options from "./components/Options";

function Home() {
    const { questions } = useContext(DataContext)
    return(
        <div>
        <Options />
       <CardComponent/>
       </div>
    );
}

export { Home };
