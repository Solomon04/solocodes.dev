import logoNerdery from "@/images/logos/nerdery.svg";
import logoGoodRun from "@/images/logos/goodrun.svg";
import logoIcodestuff from "@/images/logos/icodestuff.svg";
import logoGdc from "@/images/logos/gdc.svg";
import logoArea10 from "@/images/logos/area10.svg";
import logoGigwerk from "@/images/logos/gigwerk.svg";
import Image from "next/future/image";
import {Button} from "@/components/Button";
import {ArrowDownIcon} from "@/components/Icons/ArrowDownIcon";
import {BriefcaseIcon} from "@/components/Icons/BriefcaseIcon";

export default function Resume() {
    let resume = [
        {
            company: 'GoodRun',
            title: 'Co-Founder',
            logo: logoGoodRun,
            start: '2020',
            end: {
                label: 'Present',
                dateTime: new Date().getFullYear(),
            },
        },
        {
            company: 'Nerdery',
            title: 'Senior Software Engineer',
            logo: logoNerdery,
            start: '2019',
            end: {
                label: 'Present',
                dateTime: new Date().getFullYear(),
            },
        },
        {
            company: 'Icodestuff',
            title: 'Founder',
            logo: logoIcodestuff,
            start: '2018',
            end: {
                label: 'Present',
                dateTime: new Date().getFullYear(),
            },
        },
        {
            company: 'Gigwerk',
            title: 'Founder',
            logo: logoGigwerk,
            start: '2018',
            end: '2020'
        },
        {
            company: 'GDC',
            title: 'Software Engineer',
            logo: logoGdc,
            start: '2018',
            end: '2019',
        },
        {
            company: 'Area 10 Labs',
            title: 'Software Intern',
            logo: logoArea10,
            start: '2017',
            end: '2018',
        },
    ]

    return (
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                <BriefcaseIcon className="h-6 w-6 flex-none" />
                <span className="ml-3">Work</span>
            </h2>
            <ol className="mt-6 space-y-4">
                {resume.map((role, roleIndex) => (
                    <li key={roleIndex} className="flex gap-4">
                        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image src={role.logo} alt="" className="h-7 w-7 rounded-full" unoptimized />
                        </div>
                        <dl className="flex flex-auto flex-wrap gap-x-2">
                            <dt className="sr-only">Company</dt>
                            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                                {role.company}
                            </dd>
                            <dt className="sr-only">Role</dt>
                            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                                {role.title}
                            </dd>
                            <dt className="sr-only">Date</dt>
                            <dd
                                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                                aria-label={`${role.start.label ?? role.start} until ${
                                    role.end.label ?? role.end
                                }`}
                            >
                                <time dateTime={role.start.dateTime ?? role.start}>
                                    {role.start.label ?? role.start}
                                </time>{' '}
                                <span aria-hidden="true">???</span>{' '}
                                <time dateTime={role.end.dateTime ?? role.end}>
                                    {role.end.label ?? role.end}
                                </time>
                            </dd>
                        </dl>
                    </li>
                ))}
            </ol>
            <Button href="/solomon-resume.pdf" variant="secondary" className="group mt-6 w-full" download>
                Download CV
                <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
        </div>
    )
}
