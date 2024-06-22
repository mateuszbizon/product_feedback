import { COMMENT_MAX_LENGTH } from "@/constants";
import * as z from "zod";

export const commentSchema = z.object({
    comment: z.string().min(1, { message: "Can't be empty" }).max(COMMENT_MAX_LENGTH, { message: `Max ${COMMENT_MAX_LENGTH} length` })
});

export type CommentSchemaType = z.infer<typeof commentSchema>;