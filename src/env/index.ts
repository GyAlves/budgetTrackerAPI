import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
    PORT: z.number().default(4000),
    ENVIRONMENT: z.enum(['development', 'production', 'test']).default('production'),
    DATABASE_URL: z.string()
});

const envSchemaValidation = envSchema.safeParse(process.env);

if (!envSchemaValidation.success) throw new Error("Invalid environment variables");

export const env = envSchemaValidation.data;