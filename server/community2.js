const express = require("express");
const mongoose = require("mongoose");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://Rishab829:Kanchan%401@expresstry.wqhmyb0.mongodb.net/hacks?retryWrites=true&w=majority', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("We are connected bro");
})

//Schema
var messageSchema = new mongoose.Schema({
  room: String,
  author: String,
  message: String,
  time: String
});

//Model
var chat = mongoose.model('chat', messageSchema);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  // console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    // console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    // console.log("User Disconnected", socket.id);
  });
});


app.post('/community2', (req, res) => {

  console.log(req.body.message);

  var myData = new chat(req.body.message)
  myData.save().then(()=>{
      console.log('done');
      res.send('This data has been saved to the database')
  }).catch(()=>{
      console.log('not done');
      res.status(400).send('Item was not saved to the database')
  });
});


server.listen(5003, () => {
  console.log("SERVER RUNNING");
});
