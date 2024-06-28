import * as z from "zod"

export const productSchema = z.object({
    title: z.string().min(1, { message: "Can't be empty" }).max(20, { message: "Max 20 length" }),
    category: z.string(),
    details: z.string().min(1, { message: "Can't be empty" }),
})

export type ProductSchemaType = z.infer<typeof productSchema>;