const express = require('express'); 
const app= express();
const PORT = 3000;
const authRouter = require('./AuthController/authRouter');

// receive json requests properly
app.use(express.json());

//homepage
app.get('/', function(req,res){
    res.json({message: 'Welcome to the Match Tracker and Analysis API'});
})

//authentication 
app.use(authRouter);

// server listen
app.listen(PORT, function(error){
    try{
    console.log(`Server is listening on Port ${PORT}`);
    }catch(error){
        console.log(`Server is down. Read the error message here: ${error}`);
    }
})

