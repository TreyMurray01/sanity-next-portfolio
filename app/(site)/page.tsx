import Link from "next/link";
import { getProjects, getPages } from "../sanity/sanity-utils"
import Image from "next/image"

export default async function Home() {
   const projects = await getProjects();
   
  return (
    <div >
      <h1 className="text-7xl font-extrabold">
        Hi I&apos;m <span className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent">Trey</span>.
      </h1>
      <p className="mt-3 text-gray-600 text-xl">Check out my projects!</p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Projects:</h2>
      
      <div className=" mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project)=>(
        
        <Link key={project._id} className="border-2 border-gray-700 rounded-lg p-1 hover:border-blue-500 hover:scale-105 transition" href={`/projects/${project.slug}`}>

         { project.image && <Image 
            src = {project.image}
            alt = {project.name}
            height = {300}
            width= {750}
            className="object-cover rounded-lg border border-gray-500 "
            ></Image>}

          <div className=" mt-2 ml-5 font-extrabold bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {project.name}
          </div>
          
        </Link>


        
        ))}
      </div>



    </div>
  )
}
