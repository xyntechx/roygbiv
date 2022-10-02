import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Help: NextPage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>roygbiv</title>
                <link rel="icon" href="/favicon/favicon.ico" />
            </Head>

            <h1 className="text-5xl mt-5 font-bold">Help</h1>

            <p className="text-xl mb-2 mt-10 font-bold">Easy</p>
            <div className="border">
                <Image src="/help/easy.png" width={720} height={450} />
            </div>

            <p className="text-xl mb-2 mt-10 font-bold">Medium</p>
            <div className="border">
                <Image src="/help/medium.png" width={720} height={450} />
            </div>

            <p className="text-xl mb-2 mt-10 font-bold">Hard</p>
            <div className="border">
                <Image src="/help/hard.png" width={720} height={450} />
            </div>

            <Link href="/">
                <a className="border border-blue-400 rounded-lg py-2 px-5 w-1/5 text-center text-blue-600 text-lg hover:bg-blue-400 hover:text-black transition-colors my-10">
                    Home
                </a>
            </Link>
        </main>
    );
};

export default Help;
