import express, { Request, Response, NextFunction} from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send({
        msg: 'Hello',
    });
});

app.listen(port, () => {
    console.log(`I work! ${port}.`);
});
