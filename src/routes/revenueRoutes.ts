import { Request, Response } from "express";
import { RevenueController } from "../controllers/revenueController";

export class RevenueRoutes {
  public revenueController: RevenueController = new RevenueController();

  public routes(app): void {
    // Base route
    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({ message: "GET request success" });
    });

    // Get All revenues
    app.route("/revenue").get(this.revenueController.getRevenues);

    // Create a revenue
    app.route("/get-csv-revenues").get(this.revenueController.createRevenuesFromCsv);

    // Get a revenue
    app.route("/revenue/:revenueId").get(this.revenueController.getRevenueByID);

    // Update a revenue
    app.route("/revenue/:revenueId").put(this.revenueController.updateRevenue);

    // Delete a revenue
    app.route("/revenue/:revenueId").delete(this.revenueController.deleteRevenue);
  }
}
