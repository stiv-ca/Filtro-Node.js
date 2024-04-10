const express = require('express');
const connectDB = require('./config/db.js');
const routesUsers = require('./routes/user.routes.js')
const routesBooks = require('./routes/book.routes.js')
const bodyParser = require('body-parser');


app = express();
port = 3000;
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/api/users', routesUsers);
app.use('/api/books', routesBooks);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});
