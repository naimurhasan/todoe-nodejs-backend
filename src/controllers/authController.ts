import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import dotenv from 'dotenv';
dotenv.config();

export const register = async (req: Request, res: Response) => {
  try{
    const {username, password} = req.body;
    const existingUser = await User.findOne({username});
    if(existingUser){
      return res.status(409).json({message: 'Username already exists'});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({username, password: hashedPassword});
    await user.save();
    res.status(201).json({message: 'User registered successfully'});
  }catch(error){
    res.status(500).json({message: 'Internal server error'});
  }
}

export const login = async (req: Request, res: Response) => {
  try{
    const {username, password} = req.body;
    const user = await User.findOne({username});
    if(!user){
      return res.status(404).json({message: 'User not found'});
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if(!isPasswordCorrect){
      return res.status(401).json({message: 'Invalid password'});
    }
    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET as string);
    res.status(200).json({token});
  }catch(error){
    res.status(500).json({message: 'Internal server error'});
  }
}