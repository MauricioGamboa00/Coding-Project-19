// Task 1 Setting up Root Component with state and props structure

import React, { useState } from "react"; // Importing React and useState hook

import Gallery from "./components/Gallery"; // Importing the Gallery component

import './styles/styles.css'; // Importing the CSS styles

// Main App component

function App() {

  const [tours, setTours] = useState([]); // State to hold the tours data

  // Function to remove a tour by id
  const removeTour = (id) => { 

    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id)); // Filter out the tour with the given id
  };


  return(
    <main>
      <h1>Our Tours</h1>

      <Gallery tours={tours} removeTour={removeTour} /> {/* Pass tours and removeTour function as props to Gallery */}  
    </main>
  );

}

export default App; // Exporting the App component as default export