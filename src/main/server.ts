import express from 'express';
import dotenv from 'dotenv';
import authToken from './middleware/auth_handler';
import errorHandler from './middleware/error_handler';
import router from './router';

dotenv.config();

class Server {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.routes();
  }

  private routes(): void {
    this.app.use(authToken);
    this.app.use('/api', router);
    this.app.use(errorHandler);
  }

  public start(): void {
    const port = process.env.SERVER_PORT;
    this.app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  }
}

export default Server;
