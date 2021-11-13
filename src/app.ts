import * as express from "express";
import * as bodyParser from "body-parser";
import { RevenueRoutes } from "./routes/revenueRoutes";
import { createConnection } from "typeorm";
class App {
  public app: express.Application;
  public routesRevenue: RevenueRoutes = new RevenueRoutes();

  constructor() {
    this.app = express();
    createConnection()
    .then((connection) => {
        this.config();
        this.initializeRoutes();
    });
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private initializeRoutes(): void {
    this.routesRevenue.routes(this.app);
  }
}

export default new App().app;
