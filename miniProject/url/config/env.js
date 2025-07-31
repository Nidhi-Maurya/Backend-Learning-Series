import {z} from "zod";
import dotenv from 'dotenv';
dotenv.config();
// export const env =z.object ({
//   port: z.coerce.number().default(3000),
//   MONGODB_URI:z.string(),
//   MONGODB_DATABASE_NAME:z.string(),
// })
// .parse(process.env);

const envSchema = z.object({
  MONGODB_URI: z.string(),
  MONGODB_DATABASE_NAME: z.string(),
});

const env = envSchema.parse(process.env); // ✅ This line throws error if vars are missing

export default env;
