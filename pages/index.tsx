import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>roygbiv</title>
                <link rel="icon" href="/favicon/favicon.ico" />
            </Head>

            <h1 className="text-5xl mb-5 font-bold">ROYGBIV</h1>
            <Link href="/game/easy">
                <a className="border border-green-400 rounded-lg py-2 px-5 w-1/5 text-center text-green-600 text-lg hover:bg-green-400 hover:text-black transition-colors mb-3">
                    Easy
                </a>
            </Link>
            <Link href="/game/medium">
                <a className="border border-yellow-400 rounded-lg py-2 px-5 w-1/5 text-center text-yellow-500 text-lg hover:bg-yellow-400 hover:text-black transition-colors mb-3">
                    Medium
                </a>
            </Link>
            <Link href="/game/hard">
                <a className="border border-red-400 rounded-lg py-2 px-5 w-1/5 text-center text-red-500 text-lg hover:bg-red-400 hover:text-black transition-colors mb-3">
                    Hard
                </a>
            </Link>
            <Link href="/help">
                <a className="border-4 border-blue-600 rounded-full py-1 px-3 text-center text-blue-600 text-lg hover:bg-blue-600 hover:text-white transition-colors fixed bottom-10 right-10 font-bold animate-bounce">
                    ?
                </a>
            </Link>
        </main>
    );
};

export default Home;
