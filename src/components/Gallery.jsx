// Task 2 Fetch and render tour list with useEffect and state

import React, { useState, useEffect, use } from "react"; // Importing React, useState and useEffect 

import TourCard from "./TourCard"; // Importing the TourCard component

const url = 'https://course-api.com/react-tours-project'; // URL to fetch the tours data from the Api

const Gallery = ({ tours, removeTour }) => { // Gallery component to display the list of tours

    const [loading, setLoading] = useState(true); // State to manage the loading state

    const [error, setError] = useState(false); // State to manage any errors that may occur when fetching data

    const fetchTours = async () => { // Function to fetch tours data from the API
        try {
            setLoading(true); // Set loading to true before fetching data
            const response = await fetch(url); // Fetch data from the API

            const data = await response.json(); // Parse the response data to JSON format

            setTours(data); // Set the tours state with the fetched data

            setLoading(false); // Set loading to false after data is fetched

        } catch (error) { // Catch any errors that occur during the fetch
            setError(true); // Set error state to true

            setLoading(false); // Set loading to false after error occurs

        }

    };

    useEffect(() => { // useEffect hook to fetch data when the component is loaded

        fetchTours(); // Call the fetchTours function to fetch data

    }, []); // Empty array to run only once when the component is loaded

    if (tours.length === 0) { // If there are no tours to display
        return (
            <div className="gallery">
                <h2>No tours available</h2> {/* Display this message when there are no tours */}
            </div>
        );
    }

    return (
        <section className="gallery"> {/* Main gallery section */}
        {tours.map((tour) => ( // Map through the tours array and render a TourCard for each tour
            <TourCard key={tour.id} {...tour} removeTour={removeTour} /> // Pass tour data and removeTour function as props to TourCard
        ))}
        </section>
    );
}


export default Gallery; // Exporting the Gallery component so it can be used in App.jsx
           
        
