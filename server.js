// Import the Express module
const express = require('express');
const mongoose = require('mongoose');

// Create an instance of an Express application
const app = express();


// Define the port number
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
  res.sendFile("./views/style/style.html", { root: __dirname })
})



mongoose.connect("mongodb+srv://youssefDEV:cljEcDR6tpcMDSoM@cluster0.ccpqlf1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
                        .then(() => { // Start the server and listen on the defined port
                             app.listen(PORT, () => {
                            console.log(`http://localhost:${PORT}`);
                          }); })
                        .catch((err) => {console.log(err)})
  

