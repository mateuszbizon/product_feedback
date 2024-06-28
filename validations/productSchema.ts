import * as z from "zod"

export const productSchema = z.object({
    title: z.string().min(1, { message: "Can't be empty" }).max(40, { message: "Max 40 length" }),
    category: z.string(),
    details: z.string().min(1, { message: "Can't be empty" }),
    status: z.string(),
})

export type ProductSchemaType = z.infer<typeof productSchema>;