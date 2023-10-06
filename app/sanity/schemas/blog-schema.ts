const BlogPost = {
    name: "blog_post",
    title: "Blog Posts",
    type: 'document',
    fields: [{
        name: "title",
        title: "Title",
        type: "string",
    },
    {
        name: "image",
        title: "Image",
        type: "image",
    },
    {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {source: "title"}
    },
    {
        name: "code_snipet",
        title: "Code Snippet",
        type: "array",
        of:[{type:"block"}]
    },
    {
        name: "content",
        title: "Content",
        type: "array",
        of:[{type:"block"}]
    }
]
}

export default BlogPost