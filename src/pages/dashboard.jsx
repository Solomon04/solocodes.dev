import Head from "next/head";
import {generateRssFeed} from "@/lib/generateRssFeed";
import {getAllArticles} from "@/lib/getAllArticles";
import {SimpleLayout} from "@/components/SimpleLayout";
import Image from "next/future/image";
import logoGithub from "@/images/logos/github.svg";
import logoYouTube from "@/images/logos/youtube.svg";
import Link from "next/link";

export default function Home({articles}) {
    const stats = [
        { name: 'YouTube Subscribers', stat: '977', href: 'https://www.youtube.com/c/Icodestuff', logo: logoYouTube, },
        { name: 'YouTube Views', stat: '135,705', href: 'https://www.youtube.com/c/Icodestuff', logo: logoYouTube, },
        { name: 'GitHub Stars', stat: '98', href: 'https://github.com/Solomon04', logo: logoGithub, },
    ]

    return (
        <>
            <Head>
                <title>
                    Solomon Antoine - Dashboard
                </title>
                <meta
                    name="description"
                    content="My personal dashboard, built with Next.js API routes deployed as serverless functions."
                />
            </Head>
            <SimpleLayout
                title="My Personal Dashboard."
                intro="This is my personal dashboard, built with Next.js API routes deployed as serverless functions. I use this dashboard to track various metrics across platforms like YouTube, GitHub, and more."
            >
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {stats.map(item => (
                        <Link key={item.name} href={item.href} target="_blank">
                            <div className="flex items-center justify-between overflow-hidden rounded-lg bg-zinc-50 dark:bg-zinc-800/50 px-4 py-5 shadow sm:p-6">
                                <div>
                                    <dt className="truncate text-sm font-medium text-gray-300">{item.name}</dt>
                                    <dd className="mt-1 text-3xl font-semibold tracking-tight text-white">{item.stat}</dd>
                                </div>
                                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                                    <Image
                                        src={item.logo}
                                        alt=""
                                        className="h-12 w-12 rounded-full"
                                        unoptimized
                                    />
                                </div>

                            </div>
                        </Link>
                    ))}
                </ul>

            </SimpleLayout>
        </>
    )
}

export async function getStaticProps() {
    if (process.env.NODE_ENV === 'production') {
        await generateRssFeed()
    }

    return {
        props: {
            articles: (await getAllArticles())
                .slice(0, 4)
                .map(({component, ...meta}) => meta),
        },
    }
}
