import { z } from "zod";

export const CreateTaskSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required" })
    .max(50, { message: "Title must not be exceeded to 50 characters long" }),
  description: z
    .string()
    .min(1, { message: "Description is required" })
    .max(220, { message: "Description must not be exceeded to 220 characters long" }),
  priority: z
    .string()
    .min(1, { message: "Priority type is required" })
    .max(6),   
});


export const UpdateTaskSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required" })
    .max(50, { message: "Title must not be exceeded to 50 characters long" }),
  description: z
    .string()
    .min(1, { message: "Description is required" })
    .max(220, { message: "Description must not be exceeded to 220 characters long" })
});
