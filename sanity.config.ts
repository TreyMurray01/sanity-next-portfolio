import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import Project from './app/sanity/schemas/project-schemas'
import Page from './app/sanity/schemas/page-schemas'


const config = defineConfig({
    name: 'default',
    title: 'portfolio',
    apiVersion: '2023-03-04', 
    projectId: '7i0v69ny',
    dataset: 'production',
    schema : {
        types: [Project,Page]
    },
    plugins: [deskTool()],
  
    basePath: "/admin"
  })

export default config
