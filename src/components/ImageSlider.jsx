import React, { useState, useEffect } from "react";
import "../style/ImageSlider.css";

export default function ImageSlider({ images = [], height = "auto", width = "50%" }) {


  return (
    <>
        <div className="container" style={{height, width}}>
          <img src='https://img.freepik.com/free-vector/natural-landscape-wallpaper-concept_23-2148650600.jpg?semt=ais_user_personalization&w=740&q=80' alt="Marketplace Illustration" />
        </div>
    </>
  );
}