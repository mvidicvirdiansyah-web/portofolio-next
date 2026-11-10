
import Link from "next/link";
import FormKontak from "@/components/FormKontak";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export const metadata = {
    title: "Kontak",
    description: "Hubungi Muhammad Vidic Virdiansyah.",
};

export default function Kontak() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="mx-auto max-w-5xl px-4 py-5 sm:px-6">
                {/* Judul halaman */}
                <h1 className="text-2xl font-bold text-primary">
                    Hubungi Saya
                </h1>

                <p className="mt-1 text-xs text-muted-foreground">
                    Punya pertanyaan atau ingin bekerja sama? Isi form berikut.
                </p>

                {/* Konten utama */}
                <div className="mt-4 grid grid-cols-1 items-stretch gap-3 md:grid-cols-3">
                    {/* Formulir kontak */}
                    <Card className="md:col-span-2">
                        <CardContent>
                            <FormKontak />
                        </CardContent>
                    </Card>

                    {/* Informasi kontak */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold text-primary">
                                Temukan Saya di
                            </CardTitle>
                        </CardHeader>

                        <CardContent>
                            <div className="space-y-2 text-xs">
                                <div>
                                    <p className="font-semibold text-aksen">
                                        GitHub
                                    </p>

                                    <Link
                                        href="https://github.com/mvidicvirdiansyah-web/portofolio-next"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="break-all text-aksen hover:underline"
                                    >
                                        Kunjungi GitHub
                                    </Link>
                                </div>

                                <div>
                                    <p className="font-semibold text-aksen">
                                        Email
                                    </p>

                                    <a
                                        href="mailto:mvidicvirdiansyah@gmail.com"
                                        className="break-all text-aksen hover:underline"
                                    >
                                        mvidicvirdiansyah@gmail.com
                                    </a>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}
