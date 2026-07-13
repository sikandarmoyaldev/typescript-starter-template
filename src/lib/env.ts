import { config } from "dotenv";
import { z } from "zod";

// Load Enviorment Variables
config({ path: ".env.local" });

// Env Var Schema
const envSchema = z.object({
    NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
    PORT: z.coerce.number().default(3000),
    DATABASE_URL: z.string().min(1),
});

export const env = envSchema.parse(process.env);
