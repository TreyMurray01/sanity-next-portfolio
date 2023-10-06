import { getPosts } from '@/app/sanity/sanity-utils'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BlogPage = async() => {
    const posts = await getPosts()
    return (
        <div>
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent">Blog </h1>
            <h2 className="mt-24 font-bold text-gray-700 text-3xl">Posts:</h2>
        
            <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    posts.map(
                        (post)=>(
                            <Link key={post._id} className="border-2 border-gray-700 rounded-lg p-1 hover:border-blue-500 hover:scale-105 transition" href={`blog/${post.slug}`}>

                                { post.image && <Image 
                                src = {post.image}
                                alt = {post.title}
                                height = {300}
                                width= {750}
                                className="object-cover rounded-lg border border-gray-500 "
                                ></Image>}

                                <div className=" mt-2 ml-5 font-extrabold bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent">
                                {post.title}
                                </div>

                            </Link>
                        )
                    )
                }    
                
            </div>

        </div>
    )
}

export default BlogPage