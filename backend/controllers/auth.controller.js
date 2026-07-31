import User from "../models/User.model.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function registerUser(req, res) {
    try {

        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: "Username and password are required"
            })
        }

        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Username already exists"
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            username,
            password: hashedPassword
        })

        return res.status(200).json({
            success: true,
            message: "User Created Succesfully!"
        })
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            message: "Internel server error"
        })
    }
}

export async function loginUser(req, res) {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: "Username and password are required"
            })
        }

        const user = await User.findOne({ username });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        const matchPassword = await bcrypt.compare(password, user.password)
        if (!matchPassword) {
            return res.status(401).json({
                success: false,
                message: "Invalid username or password"
            });
        }

        const token = jwt.sign({ id: user._id, name: user.username }, process.env.SECRET_KEY, { expiresIn: '1d' })

        return res.status(200).json({
            success: true,
            message: "Login Successfully",
            token
        })
    } catch (err) {
        console.log(err);

        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}