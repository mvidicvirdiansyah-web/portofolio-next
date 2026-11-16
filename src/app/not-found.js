
import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-[70vh] flex-col items-center justify-center bg-background px-4 text-center text-foreground">
            <h1 className="text-8xl font-extrabold text-[var(--aksen)]">
                404
            </h1>

            <h2 className="mt-4 text-3xl font-bold text-primary">
                Halaman tidak ditemukan
            </h2>

            <p className="mt-3 max-w-md text-muted-foreground">
                Maaf, halaman yang kamu cari tidak tersedia
                atau mungkin sudah dipindahkan.
            </p>

            <Link
                href="/"
                className="mt-6 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90"
            >
                Kembali ke Beranda
            </Link>
        </main>
    );
}
