import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Revenue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: string;

  @Column()
  adUnitName: string;

  @Column()
  adUnitID: string;

  @Column()
  typetag: string;

  @Column()
  revenueSource: string;

  @Column()
  market: string;

  @Column()
  queries: string;

  @Column()
  clicks: string;

  @Column()
  impressions: string;

  @Column()
  pageRpm: string;

  @Column()
  impressionRpm: string;

  @Column()
  trueRevenue: string;

  @Column()
  coverageCtr: string;

  @Column()
  ctr: string;
}
