import React from "react";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Navbar() {
    return (
        <>
            <Head>
                <title>JusWeb</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <section>
                <div className="p-6 flex justify-between">
                    <div>
                        <h1 className="font-bold font-poppins text-lg">
                            JustWeb
                        </h1>
                    </div>
                    <div className="justify-center">
                        <Link className="mr-4 hover:underline font-poppins font-semibold text-sm">
                            Home
                        </Link>
                        <Link className="mr-4 hover:underline font-poppins font-semibold text-sm">
                            Layanan
                        </Link>
                        <Link className="mr-4 hover:underline font-poppins font-semibold text-sm">
                            Produk
                        </Link>
                        <Link className="font-poppins hover:underline font-semibold text-sm">
                            Kontak
                        </Link>
                    </div>
                    <div>
                        <button className=" border rounded-2xl text-sm p-2 pr-8 pl-8 font-poppins bg-[#181818] text-white font-bold mr-2">
                            Masuk
                        </button>
                        <button className="hover:bg-[#181818] border rounded-2xl text-sm p-2 pr-8 pl-8 font-poppins bg-[#787B8E] text-white font-bold">
                            Daftar
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
