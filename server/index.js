import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js'; 

const app = express();

app.use(cors());

app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));

app.use('/students', studentRoutes); 

const CONNECTION_URL = 'mongodb+srv://aoljaca:CChs123,,@cluster0.gg7ui.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5001; 

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () => 
    console.log(`Connection is established on port: ${PORT}`)
)).catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false); 