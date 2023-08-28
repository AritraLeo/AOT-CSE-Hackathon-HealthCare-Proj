const { MongoClient } = require('mongodb');

const mongoURI = 'mongodb+srv://aot-hackathon-cse:E2CrsHE8JvxrXmJm@cluster0.syr1qx4.mongodb.net/?retryWrites=true&w=majority';
let dbInstance = null;

async function connectToDB() {
    if (!dbInstance) {
        const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        dbInstance = client.db();
        console.log('Connected to MongoDB');
    }
    return dbInstance;
}

module.exports = { connectToDB };
