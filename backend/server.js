const express = require('express');
const cors = require('cors');
const firebase = require('firebase/app');
require('firebase/database');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase project configuration
};

firebase.initializeApp(firebaseConfig);

// Define database reference
const db = firebase.database();
const artRef = db.ref('art');

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Get all art items
app.get('/api/art', (req, res) => {
    artRef.once('value', (snapshot) => {
      const artItems = snapshot.val();
      res.json(artItems);
    });
  });
  
  // Add a new art item
  app.post('/api/art', (req, res) => {
    const { title, description, price, image } = req.body;
  
    const newArtRef = artRef.push();
    const newArtId = newArtRef.key;
  
    newArtRef.set({
      title,
      description,
      price,
      image
    });
  
    res.json({ id: newArtId });
  });
  
  // Update an art item
  app.put('/api/art/:id', (req, res) => {
    const artId = req.params.id;
    const { title, description, price, image } = req.body;
  
    artRef.child(artId).update({
      title,
      description,
      price,
      image
    });
  
    res.json({ message: 'Art item updated successfully' });
  });
  
  // Delete an art item
  app.delete('/api/art/:id', (req, res) => {
    const artId = req.params.id;
  
    artRef.child(artId).remove();
  
    res.json({ message: 'Art item deleted successfully' });
  });