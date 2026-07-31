import jwt from "jsonwebtoken";

export function verifyToken(req, res, next) {
    try {

        const header = req.headers.authorization;

        if (!header) {
            return res.status(401).json({
                success: false,
                message: "Authorization header missing"
            });
        }

        const token = header.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token missing"
            });
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        req.user = decoded;

        next();

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: "Invalid or expired token"
        });

    }
}