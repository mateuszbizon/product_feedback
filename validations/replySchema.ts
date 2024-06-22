import * as z from "zod"

export const replySchema = z.object({
    reply: z.string().min(1, { message: "Can't be empty" })
})

export type ReplySchemaType = z.infer<typeof replySchema>;