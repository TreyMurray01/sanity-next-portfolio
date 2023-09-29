import { type } from "os"
import { PortableTextBlock } from "sanity"

export type pageType = { 
    _id : string,
    _createdAt: Date,
    title: string,
    slug: string,
    content: PortableTextBlock[],
}