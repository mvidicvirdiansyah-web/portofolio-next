
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Hero({ nama, tagline }) {
    return (
        <section className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
            <Image
                src="/foto-profil.png"
                alt={`Foto profil ${nama}`}
                width={100}
                height={100}
                priority
                className=" h-45 w-45 shrink-0 rounded-full border-4 border-aksen object-cover"
            />
            <div>
                <h1 className="text-4xl font-bold text-primary md:text-4xl">
                    Halo, saya {nama}!
                </h1>
                <p className="mt-2 text-sm text-muted-foreground">
                    {tagline}
                </p>

                <div className="mt-5 flex justify-center gap-3 md:justify-start">
                    <Link
                        href="/proyek"
                        className={buttonVariants({ size: "lg" })}
                    >
                        Lihat Proyek
                    </Link>

                    <Link
                        href="/kontak"
                        className={buttonVariants({
                            variant: "outline",
                            size: "lg",
                        })}
                    >
                        Hubungi Saya
                    </Link>
                </div>
            </div>
        </section>
    );
}
