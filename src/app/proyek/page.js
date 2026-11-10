
import ProyekCard from "@/components/ProyekCard";
import FilterProyek from "@/components/FilterProyek";
import { supabase } from "@/lib/supabase";
import { buttonVariants } from "@/components/ui/button";

export const metadata = {
    title: "Proyek",
    description: "Daftar proyek karya Muhammad Vidic Virdiansyah.",
};

export default async function Home() {
    const { data: proyekTerbaru, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(3);

    return (
        <div className="min-h-screen bg-[#F1FAEE] dark:bg-gray-900">
            <main className="mx-auto w-full max-w-5xl px-4 py-10">
                <h1 className="text-3xl font-bold text-primary md:text-4xl">
                    Proyek Saya
                </h1>

                <p className="mt-3 text-lg text-muted-foreground">
                    Kumpulan hasil belajar saya di Kelas Industri UBIG.
                    Klik kartu untuk melihat detailnya.
                </p>

                {error && (
                    <p className="mt-8 rounded-xl border border-dashed border-input p-6 text-center text-aksen">
                        Data proyek gagal dimuat: {error.message}
                    </p>
                )}

                {proyekTerbaru && proyekTerbaru.length === 0 && (
                    <p className="mt-8 rounded-xl border border-dashed border-input p-6 text-center text-muted-foreground">
                        Belum ada proyek di database.
                    </p>
                )}

                {proyekTerbaru && proyekTerbaru.length > 0 && (
                    <FilterProyek proyek={proyekTerbaru} />
                )}
            </main>
        </div>
    );
}
