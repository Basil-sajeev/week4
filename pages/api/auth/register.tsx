import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://basilsajeev987:Basil123@cluster0.b3wtv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cachedClient = client;
  cachedDb = client.connection;

  return { client, db: cachedDb };
}

const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  aadhar: String,
  dob: String,
});

const Registration = mongoose.models.Registration || mongoose.model('Registration', registrationSchema);

export default async function handler(req, res) {
  const { method } = req;

  // Connect to the database
  const { db } = await connectToDatabase();

  switch (method) {
    case 'POST':
      try {
        const { name, email, phone, aadhar, dob } = req.body;
        const newRegistration = new Registration({ name, email, phone, aadhar, dob });

        await newRegistration.save();
        res.status(201).json({ message: 'Registration successful!' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to register' });
      }
      break;

    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}
