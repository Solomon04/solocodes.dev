import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import {Container} from '@/components/Container'
import {GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon,} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import newsImage from '@/images/news-story.png'

function SocialLink({className, href, children, icon: Icon}) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"/>
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    )
}

function MailIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            />
        </svg>
    )
}

export default function About() {
    return (
        <>
            <Head>
                <title>About - Solomon Antoine</title>
                <meta
                    name="description"
                    content="I’m Solomon Antoine. I live in New York City, where I design the future."
                />
            </Head>
            <Container className="mt-16 sm:mt-32">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                    <div className="lg:pl-20">
                        <div className="max-w-xs px-2.5 lg:max-w-none">
                            <Image
                                src={portraitImage}
                                alt=""
                                sizes="(min-width: 1024px) 32rem, 20rem"
                                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                            />
                        </div>
                    </div>
                    <div className="lg:order-first lg:row-span-2">
                        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                            I’m Solomon and I love to build things 👨🏿‍💻
                        </h1>
                        <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                            <p>
                                My journey as software engineer & entrepreneur started back in high school when I
                                attempted
                                to build my first startup, Favr, a two-sided marketplace allowing customers to request
                                chores to be fulfilled by high school/college-age workers. Favr eventually pivoted to
                                a GigWerk, a platform that helped businesses such as moving & landscaping companies hiring
                                temp (gig) workers. The company eventually went bust after COVID-19. 😢
                                {/*<Image src={newsImage} alt="news story"/>*/}
                            </p>
                            <p>
                                The technical skills I learned while building my startup eventually led me to start
                                securing freelance contracts which eventually get my first job as a software engineer
                                right out of high school despite not having a CS
                                degree or Bootcamp cert. My unorthodox journey as a software engineer inspired me to
                                eventually start Icodestuff, a YouTube channel teaching short-form programming tutorials that has amassed over 100K
                                views. 📈
                            </p>
                            <p>
                                As of today, I am a full-stack software engineer at Nerdery where I service clients
                                using technologies such as React, Typescript, GraphQL and Node.
                                Furthermore, my passion for entrepreneurship lives on as I am a co-founder and head of
                                product for GoodRun,
                                an application that allows customers to book court rentals and find pickup basketball
                                games. 🏀
                            </p>
                        </div>
                    </div>
                    <div className="lg:pl-20">
                        <ul role="list">
                            <SocialLink href="https://twitter.com/solocodes_me" icon={TwitterIcon}>
                                Follow on Twitter
                            </SocialLink>
                            <SocialLink href="https://www.instagram.com/_._solomon_/" icon={InstagramIcon} className="mt-4">
                                Follow on Instagram
                            </SocialLink>
                            <SocialLink href="https://github.com/Solomon04" icon={GitHubIcon} className="mt-4">
                                Follow on GitHub
                            </SocialLink>
                            <SocialLink href="https://www.linkedin.com/in/solomon-antoine-a52393152/" icon={LinkedInIcon} className="mt-4">
                                Follow on LinkedIn
                            </SocialLink>
                            <SocialLink
                                href="mailto:solomon@icodestuff.io"
                                icon={MailIcon}
                                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                            >
                                solomon@icodestuff.io
                            </SocialLink>
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    )
}
