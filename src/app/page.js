
import Link from "next/link";
import Hero from "@/components/Hero";
import ProyekCard from "@/components/ProyekCard";
import SkillCard from "@/components/SkillCard";
import { buttonVariants } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";



const keahlian = [
    { nama: "HTML", level: "Menengah" },
    { nama: "CSS", level: "Menengah" },
    { nama: "Git dan GitHub", level: "Dasar" },
    { nama: "Desain poster dengan Canva", level: "Mahir" },
    { nama: "JavaScript", level: "Dasar" },
];

export default async function Home() {
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
                        {keahlian.map((item) => (
                            <div
                                key={item.nama}
                               className="rounded-xl border border-border bg-card p-4 text-card-foreground shadow-sm"
                            >
                                <h3 className="font-bold text-primary">
                                    {item.nama}
                                </h3>

                                <p className="mt-1 text-sm text-muted-foreground
">
                                    Level: {item.level}
                                </p>
                            </div>
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
