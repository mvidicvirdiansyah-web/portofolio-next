
import Link from "next/link";
import Hero from "@/components/Hero";
import ProyekCard from "@/components/ProyekCard";
import SkillCard from "@/components/SkillCard";
import { buttonVariants } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

export default async function Home() {
    const { data: skills } = await supabase
        .from("skills")
        .select("*")
        .order("id");

    const { data: proyekTerbaru } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(3);

    return (
        <div className="min-h-screen bg-background text-foreground">
            <main className="mx-auto max-w-5xl px-4 py-10">
                <Hero
                    nama="Muhammad Vidic Virdiansyah"
                    tagline="Siswa kelas X SMK, calon Junior Web Developer di Kelas Industri UBIG."
                />

                {/* Keahlian */}
                <section className="mt-8">
                    <h2 className="mb-4 text-2xl font-bold text-primary">
                        Keahlian
                    </h2>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {skills && skills.map((item) => (
                            <SkillCard
                                key={item.id}
                                nama={item.nama}
                                level={item.level}
                            />
                        ))}
                    </div>
                </section>

                {/* Proyek Terbaru */}
                <section className="mt-10">
                    <h2 className="mb-4 text-2xl font-bold text-primary">
                        Proyek Terbaru
                    </h2>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                        {proyekTerbaru && proyekTerbaru.map((item) => (
                            <ProyekCard
                                key={item.slug}
                                proyek={item}
                            />
                        ))}
                    </div>

                    <Link
                        href="/proyek"
                        className={buttonVariants({
                            size: "lg",
                            className:
                                "mt-6 bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200",
                        })}
                    >
                        Lihat semua proyek
                    </Link>
                </section>
            </main>
        </div>
    );
}
