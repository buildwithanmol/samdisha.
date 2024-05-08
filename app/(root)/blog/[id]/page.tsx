import { get_blog } from "@/actions/blog.action"
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function BlogIdPage({params}: {params: {id: string}}) {
    const data = await get_blog(params.id);
    if(!data) {
        return redirect('/')
    }
    return (
        <main className="center">
            <div className="py-16">
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
            <div className="grid grid-cols-3 gap-4"> 

            </div>
        </main>
    )
}