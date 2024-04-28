import fetch from "node-fetch";
import express from "express";
// const express = require("express");
const app = express();

// Set up a route to proxy the YouTube API request
app.get('/', async (req, res) => {
  
  try {    

    const response = await fetch(`https://www.mp3quran.net/api/v3`);
    res.header('Access-Control-Allow-Origin', '*');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Start the server
const port = 3001; // Choose a port number
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});