import { z } from "zod";
import { createNewSheduleSchema } from "../schemas/shedule.schema";
import { Repository } from "typeorm";
import Schedule from "../entities/schedules.entity";

export type CreateShedule = z.infer< typeof createNewSheduleSchema>

export type SheduleRepo = Repository<Schedule>