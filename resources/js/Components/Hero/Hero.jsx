import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function Hero() {
    return (
        <>
            <section>
                <div className="p-6 grid grid-cols-2 gap-4 place-content-center">
                    <div>
                        <h1 className="font-bold font-poppins text-xl">
                            Jasa Pembuatan Website
                        </h1>
                        <h1 className="font-bold font-poppins text-xl">
                            Jasa Pembuatan Website
                        </h1>
                        <h1 className="font-bold font-poppins text-xl">
                            Jasa Pembuatan Website
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
                </div>
            </section>
        </>
    );
}
