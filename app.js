const express = require('express')
const app = express()
const port = 8099


//  const db = client.db(dbName);
const MongoClient = require('mongodb').MongoClient;
const assert = require("assert")
const url = 'mongodb+srv://usertso:student@cluster0.hix27.gcp.mongodb.net/test?retryWrites=true&w=majority';
const dbName ='test';
const client = new MongoClient(url);


app.set('view engine','ejs')

app.get('/restaurant', (req, res) => {
  //let device_list = [{'name':'Woody'},{'name':'teddy'}]
  const db = client.db(dbName);
  const collection = db.collection('restaurant');

  // Find some documents
  collection.find({}).toArray(function(err, device_list) {
    assert.equal(err, null);
     res.render('display',{'restaurant': device_list})
   });

   
    
   
 
  
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})



// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to mongodb");
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })


  
});


