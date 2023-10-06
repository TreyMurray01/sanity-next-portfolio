import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import Project from './app/sanity/schemas/project-schemas'
import Page from './app/sanity/schemas/page-schemas'
import BlogPost from './app/sanity/schemas/blog-schema'

const config = defineConfig({
    name: 'default',
    title: 'portfolio',
    apiVersion: '2023-03-04', 
    projectId: '7i0v69ny',
    dataset: 'production',
    schema : {
        types: [Project,Page,BlogPost]
    },
    plugins: [deskTool(),visionTool()],
  
    basePath: "/admin"
  })

export default config
