
import { Request, Response, NextFunction } from 'express';


/**
 * @param req - express request
 * @param res - express response
 * @param next - express next
*/
export const checkAuth = async (req: Request, res: Response, next: NextFunction) => {

    return new Promise(async (resolve, reject) => {
        // if (req.headers.auth == process.env.AUTH_TOKEN) {
            return next();
        // } else {
        //     return resolve(res.status(404).send({ statusCode: 404, statusMessage: 'Invalid Auth Provided' }));
        // }
    })
}; 
