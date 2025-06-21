const User = require('../models/user.model');
const { z } = require('zod');

const searchQuerySchema = z.object({
  email: z.string().email({ message: "Invalid email address" })
});

exports.searchUser = async (req, res) => {
  const validation = searchQuerySchema.safeParse(req.query);
  if (!validation.success) {
    return res.status(400).json({ error: validation.error.issues[0].message });
  }

  const { email } = validation.data;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Phew! Your partner is not on the list." });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};
