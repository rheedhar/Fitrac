import express from 'express';
import dotenv from 'dotenv';

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
    //this.routes();
  }

  // private routes(): void {
  //
  // };

  public start(): void {
    const port = process.env.PORT;
    this.app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  }
}

export default Server;
