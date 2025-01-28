import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const verifyToken = (token: any) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    return decoded;
  } catch (err) {
    return null;
  }
};

export const generateToken = (user: any) => {
  const payload = {
    id: user.id,
    email: user.email,
  };

  return jwt.sign(payload, process.env.JWT_SECRET as string);
};

export const hashPassword = (password: string) => {
  return bcrypt.hashSync(password, process.env.SALT_ROUNDS as any);
};

export const comparePassword = (password: string, hash: string) => {
  return bcrypt.compareSync(password, hash);
};
