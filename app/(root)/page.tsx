import { get_blogs } from "@/actions/blog.action";
import BlogComponent from "@/components/blog/blog-component";
import Sidebar from "@/components/root/sidebar";

export default async function Home() {
  const data = await get_blogs(0, 20);
  return (
    <main className="grid px-8 md:px-0  grid-cols-1 md:grid-cols-3 gap-4 py-8 center">
      <div className="col-span-2">
        <h1 className='text-accent uppercase text-md font-light  tracking-widest '> Recently published </h1>
        <br />
        <br />
        <div className="">
          {data && data.map((item: any, index: number) => <BlogComponent key={index} link={`/blog/${item._id}`} title={item.title} short_title={item.subTitle} description={item.og.description} />)}
        </div>
      </div>
      <Sidebar />
    </main>
  )
}