import { createClient, groq } from "next-sanity";
import { projectType} from "../types/Project";
import { pageType } from "../types/Page";
import { BlogPost } from "../types/BlogPost";
import { revalidatePath } from "next/cache";
export const client = createClient(
    {
        projectId: '7i0v69ny',
        dataset: 'production',
        apiVersion: '2023-03-04', 
        useCdn: false,
    }
);


export async function getProjects(): Promise<projectType[]>{
    return client.fetch(groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,

    }`,{cache: "no-store"});
}

export async function getProject(slug:string): Promise<projectType> {

    
    return client.fetch(groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content,

    }`, {slug},{cache: "no-store"})
    
}


export async function getPages(): Promise<pageType[]>{
    return client.fetch(groq`*[_type == "page"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,

    }`,{cache: "no-store"});
}

export async function getPage(slug:string): Promise<pageType> {

    
    return client.fetch(groq`*[_type == "page" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        content,

    }`, {slug},{cache: "no-store"})
    
}


export async function getPosts(): Promise<BlogPost[]>{


    return client.fetch(groq`*[_type == "blog_post"]{
        _id,
        _createdAt,
        title,
        "image": image.asset->url,
        "slug" : slug.current
        
      }`,{cache: "no-store"});
}

export async function getPost(slug:string): Promise<BlogPost> {

    
    return client.fetch(groq`*[_type == "blog_post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "image": image.asset->url,
        "slug": slug.current,
        content,
        code_snippet,
    

    }`, {slug},{cache: "no-store"})
    
}