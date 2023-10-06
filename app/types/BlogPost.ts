import { PortableTextBlock } from "sanity"

export type BlogPost = {
    _id: string,
    _createdAt: Date,
    title:string,
    image: string,
    slug: string,
    code_snippet: PortableTextBlock[],
    content: PortableTextBlock[],
}