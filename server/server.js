const express = require('express');
const app = express();

app.get('/properties', (req, res) => {
  // Здесь мы будем получать информацию о недвижимости из базы данных
  // и отправлять ее в ответ на запрос
});

app.post('/properties', (req, res) => {
  // Здесь мы будем добавлять новую информацию о недвижимости в базу данных
  // и отправлять сообщение об успехе в ответ на запрос
});

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

client.connect((err) => {
  if (err) throw err;
  console.log('MongoDB connected...');
  const db = client.db('realty');
  const realtyCollection = db.collection('realty');
  const newRealty = { address: '123 Main St', price: 250000, bedrooms: 3, bathrooms: 2 };
  realtyCollection.insertOne(newRealty, (err, result) => {
    if (err) throw err;
    console.log('New realty added to the collection...');
  });
  realtyCollection.find({}).toArray((err, realties) => {
    if (err) throw err;
    console.log(realties);
  });
  realtyCollection.find({ bedrooms: { $gte: 3 } }).toArray((err, realties) => {
    if (err) throw err;
    console.log(realties);
  });
});
