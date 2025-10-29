import z from "zod";

export const groupSchema = z.object({
    name: z.string().min(3),
    about: z.string(),
})

export const joinGroup = z.object({
    group_id: z.string()
})

export type GroupValues = z.infer<typeof groupSchema>
export type JoinGroupValues = z.infer<typeof joinGroup>