
import Link from "next/link";
import FormKontak from "@/components/FormKontak";

export const metadata = {
    title: "Kontak",
    description: "Hubungi Muhammad Vidic Virdiansyah.",
};

export default function Kontak() {
    return (
        <div className="min-h-screen bg-[#F1FAEE] dark:bg-gray-900">
            <main className="mx-auto max-w-5xl px-4 py-10">
                <h1 className="text-3xl font-bold text-utama dark:text-sky-200">
                    Hubungi Saya
                </h1>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
                    {/* Formulir Kontak */}
                    <section className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:col-span-2">
                        <FormKontak />
                    </section>

                    {/* Informasi Kontak */}
                    <aside className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                        <h2 className="text-xl font-bold text-utama dark:text-sky-200">
                            Temukan Saya di
                        </h2>

                        <div className="mt-3 space-y-3 text-sm">
                            <div>
                                <p className="font-semibold text-aksen dark:text-red-300">
                                    GitHub
                                </p>

                                <Link
                                    href="https://github.com/mvidicvirdiansyah-web/portofolio-next"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="break-all text-aksen hover:underline dark:text-red-300"
                                >
                                    Kunjungi GitHub
                                </Link>
                            </div>

                            <div>
                                <p className="font-semibold text-aksen dark:text-red-300">
                                    Email
                                </p>

                                <a
                                    href="mailto:mvidicvirdiansyah@gmail.com"
                                    className="break-all text-aksen hover:underline dark:text-red-300"
                                >
                                    mvidicvirdiansyah@gmail.com
                                </a>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
