"use client";
import Image from 'next/image'

export const Hero = () => {
    return (
        <section className="bg-transition ">
            <div className="hidden md:block py-[100px] bg-transition ">
            </div>
            <div className="center relative">
                <Image
                    src="/hero.png"
                    alt="hero"
                    width={300}
                    height={300}
                    className="absolute -bottom-24 select-none z-50 hidden md:block  right-0"
                />
            </div>
            <svg preserveAspectRatio="none" fill="#0E141B" width="1440" height="74" viewBox="0 0 1440 74" className="w-full md:block hidden"><path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path></svg>
        </section>
    )
}