// Import the Express module
const express = require('express');

// Create an instance of an Express application
const app = express();


// Define the port number
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
  res.sendFile("./views/style/style.html", { root: __dirname })
})

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
