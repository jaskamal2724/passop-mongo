const bodyParser = require('body-parser');
const express = require('express')
require('dotenv').config()

const app = express()
const port = 3000
const { MongoClient } = require('mongodb');
const cors = require('cors')

const url = (process.env.MONGO_URI)
const client = new MongoClient(url);

const dbName = 'PassOP';
client.connect();
app.use(bodyParser.json())
app.use(cors())

// get password 
app.get('/', async(req, res) => {
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const findResult = await collection.find({}).toArray();
  res.send(findResult)
})

// save password 
app.post('/', async(req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const findResult = await collection.insertOne(password)
  res.send({success:true, result:findResult})
})

// delete password 
app.delete('/', async(req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection('passwords');
  const findResult = await collection.deleteOne(password)
  res.send({sucess:true, result:findResult})
})

app.listen(port, () => {
    
  console.log(`Example app listening on port http://localhost:${port}`)
})