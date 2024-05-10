import { get_blog } from "@/actions/blog.action"
import BlogContent from "@/components/blog/blog-content";
import LikeComponent from "@/components/blog/like-component";
import { ChevronRight, Heart } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function BlogIdPage({ params }: { params: { id: string } }) {
    const data: {
        _id: string,
        title: string,
        subTitle: string,
        og: {
            title: string,
            description: string,
            tags: string[]
        },
        category: string,
        content: string,
        tableOfContents: {
            title: string,
            link: string
        }[],
    } = await get_blog(params.id);
    if (!data) {
        return redirect('/')
    }
    return (
        <main className="center ">
            <div className="py-16 px-8 md:px-0">
                <div className="flex items-center gap-1 text-sm">
                    <Link href={'/'}>
                        Home
                    </Link>
                    <ChevronRight size={15} />
                    <Link href={`/topic/${data.category}`} className="capitalize">
                        {data.category}
                    </Link>
                </div>
                <h1 className="text-3xl font-medium mt-5"> {data && data.title} </h1>
                <p className="text-lg text-[#7e8c9a] font-semibold my-2"> {data && data.subTitle} </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16 px-8 md:px-0">
                <div className="col-span-2 ">
                    <BlogContent content={data && data.content} />
                    <div className="py-5 md:hidden flex flex-col items-center w-full bg-slate-600 rounded-xl mt-8">
                        <LikeComponent id={data && data._id}  />
                    </div>
                </div>
                <div className="hidden md:block">
                    <h1 className="uppercase tracking-widest font-semibold">Table Of Contents</h1>
                    <div>
                        {
                            data && data.tableOfContents.map((item, index) => (
                                <div key={index} className="my-2 ml-3">
                                    <Link href={item.link} className="text-[#7e8c9a] hover:text-font font-sm transition-all"> {item.title} </Link>
                                </div>
                            ))
                        }
                    </div>
                    <div className="py-5 ">
                        <LikeComponent id={data && data._id}  />
                    </div>
                </div>
            </div>
        </main>
    )
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const data = await get_blog(params.id);
    if (!data) {
        return {}
    }
    return {
        title: data.title,
        openGraph: {
            title: data.og.title,
            description: data.og.description,
            tags: data.og.tags
        }
    }
}