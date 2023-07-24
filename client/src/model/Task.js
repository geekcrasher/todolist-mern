import { z } from "zod";

export const TaskInfoSchema = z.object({
  title: z
    .string()
    .min(1, { message: "A Title is required" })
    .max(50, { message: "Title must not be exceeded to 50 characters long" }),
  description: z
    .string()
    .min(1, { message: "A description is required" })
    .max(220, { message: "description must not be exceeded to 50 characters long" }),
  priority: z
    .string()
    .min(3, { message: "A priority type is required" })
    .max(6),
});
