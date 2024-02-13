const express= require('express');
const app= express();


app.use('/main',require('./route/main_route'))
app.listen(900,(req,res)=>{
    console.log('Server is running on port 3000');
})