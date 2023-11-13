import { MongoClient } from "mongodb";

const mongoClient = new MongoClient(process.env.DB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
    try {
        const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
        const collection = database.collection(process.env.MONGODB_COLLECTION);
        const result = await collection.find({}).limit(10).toArray();
        return {
            statusCode: 200,
            body: JSON.stringify(result),
        }
    } catch (error) {
        return { statusCode: 500, body: error.toString() }
    }
}

export default { handler }