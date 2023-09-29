import { type } from "os"
import { PortableTextBlock } from "sanity"

export type projectType = { 
    _id : string,
    _createdAt: Date,
    name: string,
    slug: string,
    image: string,
    url: string,
    content: PortableTextBlock[],
}