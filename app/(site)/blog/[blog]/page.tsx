import React from 'react'
import { getPost } from '@/app/sanity/sanity-utils'
import Image from 'next/image'
import { PortableText } from '@portabletext/react'

type Props ={
    params: {blog:string}
}
const PostPage = async({params}:Props) => {

    const slug = params.blog
    const post  = await getPost(slug)
  return (
    <div>
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent">{post.title}</h1>
        {post.image && <Image height={1080} width = {1920} src={post.image} alt={post.title} className='mt-10 border-2 border-gray-700 object-cover rounded-xl '>
            </Image>}
        {post.code_snippet && <div className="mockup-code">
            <pre data-prefix="$">
                <code>
                    <PortableText value={post.code_snippet}></PortableText>
                </code>
            </pre>
        </div>}
        <div className='mt-10'>
            <PortableText value = {post.content}></PortableText>
        </div>
    </div>
  )
}

export default PostPage