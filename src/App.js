/* eslint-disable no-unused-vars */
import './App.css'
import React from 'react'
import Apps from './apps'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={
                    <>
                        <div>Hello World</div>
                        <br/>
                        {Object.keys(Apps).map((key) => (
                            <div key={key}><Link to={`/apps/${key}`}>{key}</Link></div>
                        ))}
                    </>
                }/>
                {Object.keys(Apps).map((key) => (
                    <Route key={key} exact path={`/apps/${key}`} element={Apps[key]()}/>
                ))}
            </Routes>
        </BrowserRouter>
    )
}

export default App
