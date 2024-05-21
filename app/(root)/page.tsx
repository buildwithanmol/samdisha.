import { get_blogs } from "@/actions/blog.action";
import BlogComponent from "@/components/blog/blog-component";
import { Hero } from "@/components/root/hero";
import Sidebar from "@/components/root/sidebar";
import { url_converter } from "@/utils/helpers";

export default async function Home() {
  const data = await get_blogs(0, 20);
  return (
    <>
      <Hero />
      <main className="grid px-8 md:px-0 py-8 grid-cols-1 md:grid-cols-3 gap-4 center">
        <div className="col-span-2">
          <h1 className='text-accent uppercase text-md font-light  tracking-widest '> Recently published </h1>
          <br />
          <br />
          <div className="">
            {data && data.map((item: any, index: number) => <BlogComponent key={index} link={`/blog/${url_converter(item.title)}`} title={item.title} short_title={item.subTitle} description={item.og.description} />)}
          </div>
        </div>
        <Sidebar />
      </main>
    </>
  )
}

