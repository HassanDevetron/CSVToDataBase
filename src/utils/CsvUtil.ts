import * as csvtojson from "csvtojson";
import revenueColumns from "../constants/revenueColumns";
import IRevenue from "../dataModels/IRevenue";

class CsvUtil {
  public static async convertCsvToJson(csvFile: string): Promise<IRevenue[]> {
    const results = await csvtojson().fromFile(csvFile);
    const rows = [];
    for (const result of results) {
      const columnValues = Object.values(result).join("").split(";");
      const row = CsvUtil.mapToJson(columnValues);
      rows.push(row);
    }
    return rows;
  }

  public static mapToJson(values: string[]): IRevenue {
    const rowObj = {};
    let index = 0;
    if (values.length !== revenueColumns.length)
      throw new Error("csv column count mismatch");
    for (const column of revenueColumns) {
      rowObj[column] = values[index];
      index++;
    }
    return rowObj as IRevenue;
  }
}

export default CsvUtil;
