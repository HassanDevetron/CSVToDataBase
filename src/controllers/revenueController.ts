import { Request, Response } from "express";
import { getConnection, getRepository } from "typeorm";
import { Revenue } from "../entity/Revenue";
import CsvUtil from "../utils/CsvUtil";

export class RevenueController {
  public async createRevenuesFromCsv(req: Request, res: Response) {
    const result = await CsvUtil.convertCsvToJson("./revenue.csv");
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Revenue)
      .values(result)
      .execute();
    res.json({ message: "Revenues generated" });
  }

  public async getRevenues(req: Request, res: Response) {
    const revenueRepository = getRepository(Revenue);
    const revenues = await revenueRepository.find();
    res.json(revenues);
  }

  public getRevenueByID(req: Request, res: Response) {
    res.json({});
  }

  public updateRevenue(req: Request, res: Response) {
    res.json({});
  }

  public deleteRevenue(req: Request, res: Response) {
    res.json({});
  }
}
