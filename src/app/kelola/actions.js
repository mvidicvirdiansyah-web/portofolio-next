
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { sudahMasuk } from "@/lib/pin";
import { supabaseAdmin } from "@/lib/supabase-admin";

// ==============================
// AUTENTIKASI ADMIN
// ==============================

export async function masukKelola(stateSebelum, formData) {
    const pin = formData.get("pin");

    if (pin !== process.env.ADMIN_PIN) {
        return { error: "PIN salah. Coba lagi." };
    }

    const kue = await cookies();

    kue.set("pin_admin", pin, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 60 * 60,
    });

    return {};
}

export async function keluarKelola() {
    const kue = await cookies();
    kue.delete("pin_admin");
}

// ==============================
// BUKU TAMU
// ==============================

export async function sematkanPesan(formData) {
    if (!(await sudahMasuk())) {
        return;
    }

    const id = formData.get("id");
    const sematkan = formData.get("sematkan") === "ya";

    await supabaseAdmin
        .from("buku_tamu")
        .update({ disematkan: sematkan })
        .eq("id", id);

    revalidatePath("/kelola");
    revalidatePath("/buku-tamu");
}

export async function hapusPesan(formData) {
    if (!(await sudahMasuk())) {
        return;
    }

    const id = formData.get("id");

    await supabaseAdmin
        .from("buku_tamu")
        .delete()
        .eq("id", id);

    revalidatePath("/kelola");
    revalidatePath("/buku-tamu");
}

// ==============================
// CRUD PROYEK
// ==============================

const daftarKategori = ["HTML", "CSS", "JavaScript", "Next.js"];

function bacaProyek(formData) {
    return {
        judul: formData.get("judul")?.trim() || "",
        slug: formData.get("slug")?.trim() || "",
        kategori: formData.get("kategori")?.trim() || "",
        minggu: formData.get("minggu")?.trim() || "",
        deskripsi: formData.get("deskripsi")?.trim() || "",
        fitur: (formData.get("fitur") || "")
            .split("\n")
            .map((item) => item.trim())
            .filter((item) => item !== ""),
        gambar_url: formData.get("gambar_url")?.trim() || "",
    };
}

function cekProyek(proyek) {
    if (!proyek.judul || !proyek.slug || !proyek.deskripsi) {
        return "Judul, slug, dan deskripsi wajib diisi.";
    }

    if (proyek.slug.includes(" ")) {
        return "Slug tidak boleh memakai spasi. Gunakan tanda hubung, contoh: buku-tamu.";
    }

    if (!daftarKategori.includes(proyek.kategori)) {
        return "Kategori harus HTML, CSS, JavaScript, atau Next.js.";
    }

    if (!proyek.gambar_url.startsWith("/proyek/")) {
        return "Alamat gambar harus diawali /proyek/, contoh: /proyek/proyek-buku-tamu.png.";
    }

    return "";
}

function perbaruiHalaman(slug) {
    revalidatePath("/");
    revalidatePath("/proyek");
    revalidatePath(`/proyek/${slug}`);
    revalidatePath("/kelola");
}

// ==============================
// TAMBAH PROYEK
// ==============================

export async function tambahProyek(stateSebelum, formData) {
    const proyek = bacaProyek(formData);

    if (!(await sudahMasuk())) {
        return {
            error: "Kamu harus masuk sebagai admin terlebih dahulu.",
            proyek,
        };
    }

    const errorValidasi = cekProyek(proyek);

    if (errorValidasi) {
        return {
            error: errorValidasi,
            proyek,
        };
    }

    const { error } = await supabaseAdmin
        .from("projects")
        .insert(proyek);

    if (error) {
        return {
            error:
                error.code === "23505"
                    ? "Slug sudah dipakai proyek lain."
                    : `Proyek gagal disimpan: ${error.message}`,
            proyek,
        };
    }

    perbaruiHalaman(proyek.slug);
    redirect("/kelola");
}

// ==============================
// UBAH PROYEK
// ==============================

export async function ubahProyek(stateSebelum, formData) {
    const proyek = bacaProyek(formData);
    const id = formData.get("id");

    if (!(await sudahMasuk())) {
        return {
            error: "Kamu harus masuk sebagai admin terlebih dahulu.",
            proyek,
        };
    }

    const errorValidasi = cekProyek(proyek);

    if (errorValidasi) {
        return {
            error: errorValidasi,
            proyek,
        };
    }

    const { data: proyekLama } = await supabaseAdmin
        .from("projects")
        .select("slug")
        .eq("id", id)
        .single();

    if (!proyekLama) {
        return {
            error: "Proyek tidak ditemukan.",
            proyek,
        };
    }

    const { error } = await supabaseAdmin
        .from("projects")
        .update(proyek)
        .eq("id", id);

    if (error) {
        return {
            error:
                error.code === "23505"
                    ? "Slug sudah dipakai proyek lain."
                    : `Proyek gagal diubah: ${error.message}`,
            proyek,
        };
    }

    perbaruiHalaman(proyekLama.slug);
    perbaruiHalaman(proyek.slug);

    redirect("/kelola");
}

// ==============================
// HAPUS PROYEK
// ==============================

export async function hapusProyek(formData) {
    if (!(await sudahMasuk())) {
        return;
    }

    const id = formData.get("id");

    const { data: proyek } = await supabaseAdmin
        .from("projects")
        .select("slug")
        .eq("id", id)
        .single();

    if (!proyek) {
        return;
    }

    const { error } = await supabaseAdmin
        .from("projects")
        .delete()
        .eq("id", id);

    if (error) {
        return;
    }

    perbaruiHalaman(proyek.slug);
}
