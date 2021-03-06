const express = require('express')
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;

// use middle ware 
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('hello world')
})


app.listen(port, ()=>{
    console.log('CRUD Server is Running', port)
})