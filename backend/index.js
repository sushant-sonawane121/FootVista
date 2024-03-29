const express = require('express');
const connectDB = require('./src/config/connectDB');


const productRoutes = require('./src/routes/productRoutes');

const port = 3000;
const app  = express();
// connect ot mongodb database
connectDB();

app.use(express.json());

// Routes
app.use('/api', productRoutes);



app.listen(port, ()=>{
    console.log(`You server live on http://localhost:${port}`);
})