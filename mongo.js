const { MongoClient } = require("mongodb");

async function validateMongoConnection(connectionString) {
  try {
    // Create a new MongoClient instance
    const client = new MongoClient(connectionString, { 
      serverSelectionTimeoutMS: 5000 // 5 seconds timeout
    });

    // Attempt to connect to the database
    await client.connect();
    
    // Ping the server to verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Connection successful! The connection string is correct.");
  } catch (error) {
    console.error("❌ Connection failed! Error:", error.message);
  } finally {
    // Close the connection
    if (client) await client.close();
  }
}

// MongoDB connection string
const mongoConnectionString = "mongodb+srv://kandariharshavardhan:LwTgp3AEXohvgnQT@cluster0.nv5lj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Call the function to validate the connection
validateMongoConnection(mongoConnectionString);
