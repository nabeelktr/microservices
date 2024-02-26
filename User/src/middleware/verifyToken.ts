
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { NextFunction, Request, Response } from "express";
config();

interface MyUserRequest extends Request {
    user?: string;
  }

const validateToken = async (req: MyUserRequest, res: Response, next: NextFunction) => {
    let token: string | undefined;
    let authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET || '', (err: any, decoded: any) => {
            if (err) {
                return res.status(401).json({ message: "User is not authorized" });
            }
            req.user = decoded.user; 
            next();
        });
    } else {
        return res.status(401).json({ message: "Missing or invalid authorization header" });
    }
};

export { validateToken };