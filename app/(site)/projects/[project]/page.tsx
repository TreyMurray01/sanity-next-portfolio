import { getProject } from '@/app/sanity/sanity-utils'
import { PortableText } from '@portabletext/react'
import React from 'react'
import Image from 'next/image'

type Props = {
  params: {project: string}
}

const project = async ({params}:Props)  => {
  const slug  = params.project
  const project = await getProject(slug)
  return (
    <div>
      <header className='flex items-center justify-between '>
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent">{project.name}</h1>
        <a 
        href={project.url}
          target='_blank'
          title='View Project'
          rel='noopener noreferrer'
          className='bg-gray-100 rounded-lg text-gray-700 font-bold py-3 px-4 hover:bg-gray-900 hover:text-white hover:scale-105 transition'
          > View Project</a>
      </header>
      <Image height = {1080} width = {1920} src = {`${project.image}`} alt= {project.name} className='mt-10 border-2 border-gray-700 object-cover rounded-xl '></Image>
      <div className='text-lg text-grey-400 mt-5'>
        {/* content */}
        <PortableText value={project.content}></PortableText>
      </div>
     
    </div>
  )
}

export default project