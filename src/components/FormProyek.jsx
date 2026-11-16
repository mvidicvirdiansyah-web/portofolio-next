
"use client";

import { useActionState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import TombolKirim from "@/components/TombolKirim";

export default function FormProyek({
    aksi,
    proyek,
    teksTombol,
}) {
    const [state, formAction] = useActionState(aksi, {
        proyek,
    });

    const dataProyek = state.proyek || proyek;

    return (
        <form action={formAction} className="space-y-5">
            <input
                type="hidden"
                name="id"
                value={dataProyek.id || ""}
            />

            <div className="space-y-2">
                <Label htmlFor="judul">Judul Proyek</Label>
                <Input
                    id="judul"
                    name="judul"
                    placeholder="Contoh: Buku Tamu Digital"
                    defaultValue={dataProyek.judul}
                    required
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input
                    id="slug"
                    name="slug"
                    placeholder="Contoh: buku-tamu"
                    defaultValue={dataProyek.slug}
                    required
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="kategori">Kategori</Label>
                <Input
                    id="kategori"
                    name="kategori"
                    placeholder="HTML, CSS, JavaScript, atau Next.js"
                    defaultValue={dataProyek.kategori}
                    required
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="minggu">Minggu</Label>
                <Input
                    id="minggu"
                    name="minggu"
                    placeholder="Contoh: Minggu 15"
                    defaultValue={dataProyek.minggu}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="deskripsi">Deskripsi</Label>
                <Textarea
                    id="deskripsi"
                    name="deskripsi"
                    placeholder="Tuliskan deskripsi proyek..."
                    defaultValue={dataProyek.deskripsi}
                    rows={3}
                    required
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="fitur">Fitur Proyek</Label>
                <Textarea
                    id="fitur"
                    name="fitur"
                    placeholder="Tuliskan satu fitur per baris..."
                    defaultValue={(dataProyek.fitur || []).join("\n")}
                    rows={4}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="gambar_url">Lokasi Gambar</Label>
                <Input
                    id="gambar_url"
                    name="gambar_url"
                    placeholder="/proyek/nama-gambar.png"
                    defaultValue={dataProyek.gambar_url}
                    required
                />
            </div>

            {state.error && (
                <p className="text-sm font-medium text-destructive">
                    {state.error}
                </p>
            )}

            <TombolKirim teks={teksTombol} />
        </form>
    );
}
