import React, { useState, useEffect } from "react"
import DropDown from "./components/DropDown";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
    
    const [isOpen, setIsOpen] = useState(false) 
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const hideMenu = () => {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false)
            }
        }
        window.addEventListener('resize', hideMenu)
        return () => {
            window.removeEventListener('resize', hideMenu)
        }
    })

    return (
        <>
            <Navbar toggle={toggle} />
            <DropDown isOpen={isOpen} toggle={toggle}/>
            <Routes>
                <Route exact path="/" element={<Hero />} />
            </Routes>
        </>
    )
}

export default App;