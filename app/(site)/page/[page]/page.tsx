import React from 'react'
import { getPage } from '@/app/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'

type Props = {
    params: {page:string}
}

const page = async ({params}:Props) => {
 const page = await getPage(params.page)
    return (
        <div>
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent">{page.title}</h1>
            <div className='text-lg text-gray-700 mt-10'>
                <PortableText value={page.content}></PortableText>
            </div>
        </div>
    )
}

export default page