import { Router } from "express";
import { getAllUsers, deleteUser, updateUser } from "../controllers/usersController";
import { isAuthenticated, isOwner } from "../middlewares/index";

export default(router: Router) => {
    router.get("/users", isAuthenticated, getAllUsers);
    router.delete("/users:id", isAuthenticated, isOwner, deleteUser);
    router.put("/users:id", isAuthenticated, isOwner, updateUser);
}