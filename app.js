const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//configure body parser to json
app.use(bodyParser.json());

//Setup the routes 
const dinoRoutes = require('./Routes/DinoRoutes');
const authRoutes = require('./Routes/AuthRoutes');

app.use('/api/dino', dinoRoutes);
app.use('/api/auth', authRoutes);

app.listen(process.env.PORT);