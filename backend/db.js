import firebase from 'firebase/app';
import 'firebase/database';

// Initialize Firebase
const firebaseConfig = {
  // Your Firebase project configuration
};

firebase.initializeApp(firebaseConfig);

// Write data to the database
const db = firebase.database();
const artRef = db.ref('art');
const newArtRef = artRef.push();
const newArtId = newArtRef.key;

newArtRef.set({
  title: 'Art Title',
  description: 'Art Description',
  price: 9.99,
  image: 'image_url.jpg'
});