import jwt from "jsonwebtoken";
export const genToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("token", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    secure: true, // must be true for HTTPS
    sameSite: "none", // must be "none" for cross-domain
    httpOnly: true,
  });
  return token;
};
