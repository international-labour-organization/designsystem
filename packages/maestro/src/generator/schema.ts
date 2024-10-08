import { z } from "zod";

import { UIPatternFieldTypes } from "./definitions";

const field = z.object({
  type: z.union([
    z.literal(UIPatternFieldTypes.String),
    z.literal(UIPatternFieldTypes.Value),
    z.literal(UIPatternFieldTypes.Number),
    z.literal(UIPatternFieldTypes.Bool),
    z.literal(UIPatternFieldTypes.Select),
    z.literal(UIPatternFieldTypes.Checkbox),
    z.literal(UIPatternFieldTypes.Radio),
    z.literal(UIPatternFieldTypes.Object),
  ]),
  label: z.string(),
  description: z.string(),
  required: z.boolean().optional(),
  preview: z.unknown(),
  options: z
    .union([z.record(z.string()).optional(), z.record(z.number()).optional()])
    .optional(),
});

const value = z.object({
  namespace: z.string(),
  use: z.string(),
  label: z.string(),
  description: z.string(),
  fields: z.record(field).optional(),
  settings: z.record(field).optional(),
  variants: z
    .record(
      z.object({
        label: z.string(),
        description: z.string().optional(),
        fields: z.record(z.unknown()).optional(),
        settings: z.record(z.unknown()).optional(),
      })
    )
    .optional(),
});

const pattern = z.record(value);

export type UIPattern = z.infer<typeof pattern>;
export type UIPatternValue = z.infer<typeof value>;

export { pattern };
