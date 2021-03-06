const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/chamara" ;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const ordersRouter = require('./routes/orders');
const usersRouter = require('./routes/users');
app.use('/orders', ordersRouter);
app.use('/users', usersRouter);

// set NODE_ENV=production

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*',(req,res) =>{
      res.sendFile(path.resolve(__dirname,'client','build','index.html'));
      
    } );
    console.log("ok");
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
