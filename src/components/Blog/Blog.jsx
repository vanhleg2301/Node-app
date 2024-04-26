/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { RequestGet } from "../../ultil/request";

export default function Blog() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RequestGet(`blogs`, {});

        setBlogData(response); // Set the fetched data to the state
        console.table(response);
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Ensure the error is thrown for the caller to handle
      }
    };

    fetchData(); // Call the fetchData function
  }, []); // Empty dependency array ensures this effect runs only once

  return <>Hi</>;
}
