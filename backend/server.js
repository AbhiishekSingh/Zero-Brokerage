const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/authdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: false},
  password: { type: String, required: true },
  age:{type:Number},
  number:{type : Number}
}, {timestamps: true});

const User = mongoose.model('User', userSchema);

app.post('/signup', async (req, res) => {
  try {
    const { username, password, email, number, age } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const user = new User({
      email,
      username,
      password: hashedPassword, // Ensure this is hashed before saving
      number,
      age,
    });
    
    await user.save();
    
    res.status(201).send('Registration successful!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error registering user.');
  }
});


app.post('/login', async (req, res) => {
  console.log(req.body);  // Log to see the incoming request body
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send('Missing email or password');
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send('Invalid credentials');
    }

    const token = jwt.sign({ id: user._id }, 'jsonwebtoken', { expiresIn: '1h' });
    return res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});


app.put('/user/:id', async (req, res) => {
  try {
        const { username, email, age, number, password } = req.body;
        const profile = await User.findById(req.params.id);
    
        if (!profile) return res.status(404).json({ error: 'User not found' });
    
        // Check if the password needs to be updated and hash it
        if (password) {
          const hashedPassword = await bcrypt.hash(password, 10);
          profile.password = hashedPassword;
        }
    
        profile.username = username || profile.username;
        profile.email = email || profile.email;
        profile.age = age || profile.age;
        profile.number = number || profile.number;
    
        await profile.save();
        res.status(200).json({ message: 'User updated successfully' });
      } catch (error) {
        res.status(500).json({ error: 'Server error' });
      }
    });

// Define Mongoose Schema and Model
const RoomdetailSchema = new mongoose.Schema({
  roomname: { type: String, required: true },
  sqft: { type: Number, required: true},
  roomaddress: {type: String, required: true},
  number:{ type: Number, required: true},
  email: {type: String, required:true}
});


const Roomdetail = mongoose.model('Roomdetail', RoomdetailSchema);
// CRUD Routes
// Create
app.post('/addrooms', async (req, res) => {
  const {roomname, sqft, roomaddress, number, email} = req.body;
  const roomdetailxp = new Roomdetail
  ({ roomname, sqft, roomaddress, number, email});
  await roomdetailxp.save();
  res.status(201).send("Room Added Sucessfully..!");
});

// // Read
//   app.get('/contactus', async (req, res) => {
//     try{
//       const allrooms = await Roomdetail.find({});
//       res.send({status:"ok", data:allrooms});
//     }
//     catch(erroe){
//       console.log(erroe);
//     }
    
// });

// GET Route - Retrieve all room details
app.get('/users/:id', async (req, res) => {
  try {
    console.log("ID",req.params.id)
    const email = "test1@gmail.com"
    const user = await User.find({ _id: ObjectId(req.params.id) });
    //console.log(user)
    // const profile = await User.findOne("test1@gmail.com");
    // console.log(profile)
   // if (!profile) return res.status(405).json({ error: 'User not found' });
    res.status(200).json(user); // Send the data in JSON format
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get('/contactus', async (req, res) => {
  try {
    const rooms = await Roomdetail.find(); // Find all documents in the Roomdetail collection
    res.status(200).json(rooms); // Send the data in JSON format
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Get User Details

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
