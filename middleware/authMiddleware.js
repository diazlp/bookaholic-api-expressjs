const jwt = require('jsonwebtoken');
const { User } = require("../models")

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Missing Authorization Header.' });
  }

  const jwtToken = token.split(' ')[1];

  try {
    const decodedToken = jwt.verify(jwtToken, 'API_SECRET');

    const authenticatedUser = await User.findOne({
      where: {
        username: decodedToken.username,
      },
    });

    if (!authenticatedUser) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = decodedToken.user;
    next();
  } catch (error) {
    return res.status(500).json({ message: 'Authentication error', error: error.message });
  }
};

module.exports = authMiddleware;
