import React from "react";
import Fade from "react-reveal/Fade";

export default function Hero() {
    return (
        <>
            <section className="mx-10">
                <div className="p-6 grid grid-cols-2 gap-4 place-content-center ">
                    <Fade left>
                        <div className="mt-8">
                            <h1 className="font-bold font-poppins text-2xl text-[#35383F] mt-1">
                                Jasa Pembuatan Website
                            </h1>
                            <h1 className="font-bold font-poppins text-2xl text-[#35383F] mt-1">
                                Profesional & Pengembang
                            </h1>
                            <h1 className="font-bold font-poppins text-2xl text-[#35383F] mt-1">
                                Aplikasi
                            </h1>

                            <p className="mt-8 text-[#35383F] font-poppins text-base">
                                Kami memiliki komitmen penerapan
                            </p>
                            <p className="mt-1 text-[#35383F] font-poppins text-base">
                                solusi digital tepat guna dan berkelanjutan
                                untuk
                            </p>
                            <p className="mt-1 text-[#35383F] font-poppins text-base">
                                meningkatkan potensi keuntungan bisnis Anda.
                            </p>
                            <button className="mt-11 border rounded-2xl text-sm p-2 pr-8 pl-8 font-poppins bg-[#181818] text-white font-bold hover:shadow-[#181818] shadow-lg">
                                Pesan Sekarang
                            </button>
                        </div>
                    </Fade>
                    <Fade right>
                        <div className="justify-center">
                            <img
                                src="/images/hero.svg"
                                alt=""
                                className="w-96 h-5/6 float-right "
                            />
                        </div>
                    </Fade>
                </div>
            </section>
        </>
    );
}
