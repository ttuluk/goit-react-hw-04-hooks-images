import "./App.css";
import React, { useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearcBar from "./components/Searchbar/Searchbar";
import { ToastContainer } from "react-toastify";


export default function App() {
  const [searchName, setSearchName] = useState('');
  
  return (
    <div className="App">
         <ToastContainer autoClose={3000} />
         <SearcBar onSubmit={setSearchName} />
        <ImageGallery searchName={searchName} />
       </div>
  )
}
