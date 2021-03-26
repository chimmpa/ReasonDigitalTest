const express = require('express');

const app = express();

//configure express to json
app.use(express.json());

//Setup the routes 
const dinoRoutes = require('./Routes/DinoRoutes');
const authRoutes = require('./Routes/AuthRoutes');

app.use('/api/dino', dinoRoutes);
app.use('/api/auth', authRoutes);

app.listen(process.env.PORT);