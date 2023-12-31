import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { getPages } from '../sanity/sanity-utils';
import { pageType } from '../types/Page';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Trey's Portfolio",
  description: 'Created with Next.js 13 and Sanity CMS',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages();
  return (
    <html lang="en">
      <body className='max-w-3xl mx-auto py-10 xs:p-10'>
        <header className='py-5 flex items-center justify-between '>
          <Link href={"/"} className=" font-extrabold bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 bg-clip-text text-transparent hover:scale-125 transition">Trey</Link>

          
          <div className='flex item-center gap-3'>
          {pages.map((page:pageType)=>(
            <Link className="text-gray-600 text-sm hover:underline hover:scale-105 transition" key= {page._id} href={`/page/${page.slug}`}>{page.title}</Link>
          ))}
          <Link className="text-gray-600 text-sm hover:underline hover:scale-105 transition"  href={`/blog`}>Blog </Link>

          </div>  
        </header>


        <main className={inter.className}>{children}</main>
      </body>

    </html>
  )
}
