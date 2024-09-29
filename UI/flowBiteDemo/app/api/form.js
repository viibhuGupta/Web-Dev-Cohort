// pages/api/form.js
import dbConnect from '../../db/dbConnect';
import Form from '../../schema/formSchema';

export default async function handler(req, res) {
  await dbConnect(); // Ensure you're connected to MongoDB

  if (req.method === 'POST') {
    try {
      const form = await Form.create(req.body);
      res.status(201).json({ success: true, data: form });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
