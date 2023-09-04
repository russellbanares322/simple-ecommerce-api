import { Request, Response } from "express";

import { deleteUserById, getUsers, getUserById } from "../db/users";

export const getAllUsers = async (req:Request, res: Response) => {
    try {
        const users = await getUsers();
        return res.status(200).json(users);

    } catch (error) {
        return res.sendStatus(400)
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deletedUser = await deleteUserById(id)

        return res.json(deletedUser)
    } catch (error) {
        return res.sendStatus(400)
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const {username, email} = req.body;
        if(!username || !email){
            return res.sendStatus(400)
        }

        const user = await getUserById(id)

        user.username = username;
        user.email = email;
        
        await user.save();
        return res.sendStatus(200).json(user).end()
    } catch (error) {
        return res.sendStatus(400)
    }
}