import { Router } from 'express';
import authentication from './authentication';
import root from './root';
import users from './users';

const router = Router();

export default(): Router => {
    root(router)
    authentication(router)
    users(router)
    return router
}