import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
    const [score, setScore] = useState(0);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("ROYGBIV Score")!);
        setScore(stored);
    });

    return (
        <main className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>roygbiv</title>
                <link rel="icon" href="/favicon/favicon.ico" />
            </Head>

            <p className="text-xl mb-1">You scored</p>
            <h1 className="text-5xl mb-1 font-bold">{score}</h1>
            <p className="text-xl mb-10">points</p>
            <Link href="/">
                <a className="border border-blue-400 rounded-lg py-2 px-5 w-1/5 text-center text-blue-600 text-lg hover:bg-blue-400 hover:text-black transition-colors mb-3">
                    Home
                </a>
            </Link>
        </main>
    );
};

export default Home;
