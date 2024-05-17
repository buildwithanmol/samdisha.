import { get_blogs } from "@/actions/blog.action"
import BlogComponent from "@/components/blog/blog-component";
import { url_converter } from "../../latest/page";

export default async function CategoryPage({ params }: { params: { category: string } }) {
    const data = params.category && (await get_blogs(0, 1000, params.category));

    return (
        <main className="center py-16 md:px-0 px-8 ">
            <div className="flex items-center justify-between">
                <h1 className="capitalize font-black text-3xl">   {params.category}  </h1>
                <p className="text-lg font-semibold"> {data && data.length} Articles </p>
            </div>
            <br />
            <br />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    data && data.map((item, index) => (
                        <div key={index} className="bg-container p-6 rounded-xl flex items-center justify-center">
                            <BlogComponent link={`/blog/${url_converter(item.title)}`} title={item.title} short_title={item.subTitle} description={item.og.description} />
                        </div>
                    ))
                }
            </div>
        </main>
    )
}

export const dynamic = 'force-dynamic'