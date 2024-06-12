// Import the Express module
const express = require('express');
const mongoose = require('mongoose');

const Mydata=require('./models/mydataschema');
// Create an instance of an Express application
const app = express();

app.set('view engine','ejs')
app.use(express.static('public'))
// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

// Define the port number
const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
  Mydata.find().then((result) => {
        res.render('style/style',{arr:result})
  }
  ).catch((err) => {
    console.log(err)
  }
  )
});

app.get('/index.html',(req,res)=>{
  res.send("<h1>  Data sent successfully</h1>")
});



mongoose.connect("mongodb+srv://youssefDEV:cljEcDR6tpcMDSoM@cluster0.ccpqlf1.mongodb.net/allArticles?retryWrites=true&w=majority&appName=Cluster0")
                        .then(() => { // Start the server and listen on the defined port
                             app.listen(PORT, () => {
                            console.log(`http://localhost:${PORT}`);
                          }); })
                        .catch((err) => {console.log(err)})



app.post('/',(req,res)=>{
                       console.log(req.body)   
                       const mydata=new Mydata(req.body)
                       mydata.save().then(() => {
                        res.redirect("/index.html")
                       })
                       .catch((err) => {
                        console.log(err)
                       }
                       )
                       })
// Auto Refresh
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
const connectLivereload = require("connect-livereload");
app.use(connectLivereload); 
liveReloadServer.server.once("connection", () => {
setTimeout(() => {
     liveReloadServer.refresh("/");
}, 100);
});                   

