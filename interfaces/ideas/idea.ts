import { Tag } from "@prisma/client"

export interface Idea {
    id: number
    publicId: string
    title: string
    shortDescription?: string
    description: string
    likes: number
    authorId: number
    tags?: Tag[]
    createdAt: string
    updatedAt: string
}
