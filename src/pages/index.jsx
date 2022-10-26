import Head from 'next/head'
import {Container} from '@/components/Container'
import {GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon,} from '@/components/SocialIcons'
import {generateRssFeed} from '@/lib/generateRssFeed'
import {getAllArticles} from '@/lib/getAllArticles'
import SocialLink from "@/components/Pages/SocialLink";
import Photos from "@/components/Pages/Home/Photos";
import Newsletter from "@/components/Pages/Home/Newsletter";
import Resume from "@/components/Pages/Home/Resume";
import Article from "@/components/Pages/Home/Article";


export default function Home({articles}) {
    return (
        <>
            <Head>
                <title>
                    Solomon Antoine - Software engineer, founder, and nomad ✈️
                </title>
                <meta
                    name="description"
                    content="I’m Solomon, a software designer and entrepreneur currently.  I’m a co-founder of GoodRun, where we help customers book indoor court rentals and find pickup basketball games. 🏀"
                />
            </Head>
            <Container className="mt-9">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        Software engineer, founder, and nomad ✈️
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                        I’m Solomon, a software designer and entrepreneur currently.
                        I’m a co-founder of GoodRun, where we help customers book indoor court rentals and find pickup
                        basketball games. 🏀
                    </p>
                    <div className="mt-6 flex gap-6">
                        <SocialLink
                            href="https://twitter.com/solocodes_me"
                            aria-label="Follow on Twitter"
                            icon={TwitterIcon}
                        />
                        <SocialLink
                            href="https://www.instagram.com/_._solomon_/"
                            aria-label="Follow on Instagram"
                            icon={InstagramIcon}
                        />
                        <SocialLink
                            href="https://github.com/Solomon04"
                            aria-label="Follow on GitHub"
                            icon={GitHubIcon}
                        />
                        <SocialLink
                            href="https://www.linkedin.com/in/solomon-antoine-a52393152/"
                            aria-label="Follow on LinkedIn"
                            icon={LinkedInIcon}
                        />
                    </div>
                </div>
            </Container>
            {/*<Photos/>*/}
            <Container className="mt-24 md:mt-28">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col gap-16">
                        {articles.map((article) => (
                            <Article key={article.slug} article={article}/>
                        ))}
                    </div>
                    <div className="space-y-10 lg:pl-16 xl:pl-24">
                        {/*<Newsletter/>*/}
                        <Resume/>
                    </div>
                </div>
            </Container>
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
