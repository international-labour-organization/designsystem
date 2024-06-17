import { z } from "zod";

const field = z.object({
  type: z.union([
    z.literal("string"),
    z.literal("number"),
    z.literal("boolean"),
    z.literal("select"),
    z.literal("checkbox"),
    z.literal("radio"),
    z.literal("object"),
    z.literal("value"),
  ]),
  label: z.string(),
  description: z.string(),
  preview: z.any(),
  required: z.boolean(),
  options: z
    .union([z.record(z.string()).optional(), z.record(z.number()).optional()])
    .optional(),
});

const patternSchema = z.object({
  namespace: z.string(),
  label: z.string(),
  description: z.string(),
  fields: z.record(field).optional(),
  settings: z.record(field).optional(),
});

const schema = z.record(patternSchema);

export { schema };
