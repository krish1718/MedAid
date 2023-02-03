const express = require("express");
const mongoose = require("mongoose");
const path = require('path');
const cors = require("cors");
const port = 5000;

const app = express();
app.use(express.json());
app.use(cors());

// EXPRESS
app.use('/static', express.static('static'));
app.use(express.urlencoded())

// MONGOOSE
mongoose.set('strictQuery', true);
mongoose.connect('mongodb+srv://Rishab829:Kanchan%401@expresstry.wqhmyb0.mongodb.net/prac?retryWrites=true&w=majority', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("We are connected bro");
})

//Schema
var commSchema = new mongoose.Schema({
  username: String,
  message: String
});

//Model
var Group1 = mongoose.model('Group1', commSchema);
var Group2 = mongoose.model('Group2', commSchema);

app.post("/community", (req, res) => {
    var groupname = req.query.chat;

    // if(groupname == 'TSEC students'){
    if(groupname == 'ConvoCare'){
        var myData = new Group1(req.body)
        myData.save().then(()=>{
            console.log('done');
            res.send('This data has been saved to the database')
        }).catch(()=>{
            console.log('not done');
            res.status(400).send('Item was not saved to the database')
        });
    }
    else{
        var myData = new Group2(req.body)
        myData.save().then(()=>{
            console.log('done');
            res.send('This data has been saved to the database')
        }).catch(()=>{
            console.log('not done');
            res.status(400).send('Item was not saved to the database')
        });
    }
});

app.get("/community", (req, res)=>{
    var dummyname = req.query.chat;
    console.log(dummyname);

    if(dummyname == 'Group1'){
        // dummyname = dummyname.toLowerCase();
        let view;
        async function viewMessages(){
            view = await db.collection('group1').find().toArray();
            res.json(view);
        }
        viewMessages();
    }
    else{
        // dummyname = group2;
        let view;
        async function viewMessages(){
            view = await db.collection('group2').find().toArray();
            res.json(view);
        }
        viewMessages();
    }
})

// listen to server
app.listen(port, () => console.log("Server started on port " + port));
