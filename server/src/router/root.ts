import { Router } from "express";
import path from 'path';

export default(router: Router) => {
    router.get('^/$|/index(.html)?', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
    })
}