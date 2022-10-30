const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



// dbUser2
// v1gAbw8oMOyDRtuK



const uri = "mongodb+srv://dbUser3:JEKT6RMu9QOAPtD2@cluster0.xuxjswq.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const userCollection = client.db('nodeMongoCrud').collection('users');
        const user = {
            name: 'dan',
            email: 'daning@gmail.com'
        }
        const result = await userCollection.insertOne(user);
        console.log(result);
    }
    finally {

    }
}

run().catch(err => console.log(err))

app.get('/', (req, res) => {
    res.send('Hello from node mongo crud server');
});

app.listen(port, () => {
    console.log(`Listening from port ${port}`);
})