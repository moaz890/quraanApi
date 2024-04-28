import fetch from "node-fetch";
import express from "express";
// const express = require("express");
const app = express();

// Set up a route to proxy the YouTube API request
app.get('/api', async (req, res) => {
  
  try {    
    const { q } = req.query;

    // Make the request to the YouTube API
    const response = await fetch(`https://www.mp3quran.net/api/v3&q=${encodeURIComponent(q)}`, {
  
    });

    // Get the response body as JSON
    const data = await response.json();

    // Send the response back to the client
    res.json(data);
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ error: 'An error occurred', query: req.query });
  }
});

// Start the server
const port = 3001; // Choose a port number
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});