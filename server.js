//const express = require('express');
import express from "express"; // import express
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from 'body-parser';
import router from "./src/backend/Router/Router.js"; // import own routers

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
mongoose.connect(process.env.DB_URL) //connect to DB
.then(()=> console.log("db.Connected!"))
.catch(()=> console.log("Fail!!! -db.Connect"));

app.use(express.json()); // Для обробки JSON
app.use(express.static(path.resolve(__dirname, 'public'))); // Змінити 'public' на папку з файлами
app.use(express.urlencoded({extended: false}))

// Использование CORS
app.use(cors({
    origin: 'http://localhost:3000', // Разрешить запросы с этого домена
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Разрешенные методы
    allowedHeaders: ['Content-Type', 'Authorization'], // Разрешенные заголовки
    credentials: true, // Разрешить отправку cookies
  }));

  // Увеличьте лимит размера тела запроса до 1мб
app.use(bodyParser.json({ limit:100000 }));  // Увеличьте до нужного размера до 1мб
app.use(bodyParser.urlencoded({ limit:10000, extended: true }));

app.set('view engine', 'ejs'); // connect ejs
app.set('views', path.join(__dirname, 'public', 'Views')); // way to Views folder

app.use('/api',router); // connect my Routers

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Views', 'index.html'));
});

app.post('/register', (req, res) => {
    try {
        const users = req.body;
        fs.writeFileSync(path.join(__dirname, 'public', 'users.json'), JSON.stringify(users, null, 2), 'utf8');
        console.log(req.body);
        return res.redirect('/name/' + users[users.length - 1].FirstName);
        //res.sendStatus(200);
    } catch (error) {
        console.error('Ошибка при записи в файл:', error);
        res.status(500).send('Ошибка на сервере',error);
    }
});

app.get('/name/:username', (req,res) => {
    res.render('name', {user_name: req.params.username});
});

app.listen(process.env.PORT, () => {
    console.log(`Сервер запущено на http://localhost:${process.env.PORT}`);
});
