
import SkillCard from "@/components/SkillCard";
import Kartu from "@/components/Kartu";

const skills = [
    { nama: "HTML", level: "Menengah" },
    { nama: "CSS", level: "Menengah" },
    { nama: "Git dan GitHub", level: "Dasar" },
    { nama: "Desain poster dengan Canva", level: "Mahir" },
    { nama: "JavaScript", level: "Dasar" },
];

const kartu = [
    {
        judul: "Hobi",
        deskripsi: "• Bermain sepak bola",
        deskripsi2: "• Bermain voli",
        deskripsi3: "• Bermain game",
    },
    {
        judul: "Cita-Cita",
        deskripsi: "Menjadi orang baik",
        deskripsi2: "• Menjadi pemain voli",
        deskripsi3: "• Mengumrohkan kedua orang tua",
    },
];

const jadwal = [
    {
        hari: "Senin",
        kegiatan: "Belajar Tailwind dan CSS",
        waktu: "08.00 - 10.00",
    },
    {
        hari: "Selasa",
        kegiatan: "Belajar Next.js dan React",
        waktu: "08.00 - 11.00",
    },
    {
        hari: "Rabu",
        kegiatan: "Belajar JavaScript dan Git",
        waktu: "08.00 - 10.30",
    },
];

export const metadata = {
    title: "Tentang",
    description:
        "Cerita, hobi, cita-cita, dan jadwal belajar Muhammad Vidic Virdiansyah.",
};

export default function Tentang() {
    return (
        <div className="flex min-h-screen flex-col bg-[#F1FAEE] dark:bg-gray-900">
            <main className="mx-auto w-full max-w-5xl px-4 py-10">

                {/* Tentang Saya */}
                <section className="mt-8 rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                    <h2 className="text-2xl font-bold text-utama dark:text-sky-200">
                        Tentang Saya
                    </h2>

                    <p className="py-2 text-gray-700 dark:text-gray-300">
                        Saya adalah seorang Web Developer yang tertarik
                        dalam membuat website modern, responsif, dan
                        mudah digunakan. Saya juga memiliki passion untuk
                        terus belajar dan mengembangkan diri dalam dunia
                        teknologi.
                    </p>
                </section>

                {/* Hobi dan Cita-Cita */}
                <section className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {kartu.map((item) => (
                        <Kartu key={item.judul} judul={item.judul}>
                            <p className="text-gray-700 dark:text-gray-300">
                                {item.deskripsi}
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                {item.deskripsi2}
                            </p>
                            <p className="text-gray-700 dark:text-gray-300">
                                {item.deskripsi3}
                            </p>
                        </Kartu>
                    ))}
                </section>

                {/* Keahlian */}
                <section className="mt-6 rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <h2 className="mb-4 text-2xl font-bold text-utama dark:text-sky-200">
                        Keahlian
                    </h2>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {skills.map((skill) => (
                            <SkillCard
                                key={skill.nama}
                                nama={skill.nama}
                                level={skill.level}
                            />
                        ))}
                    </div>
                </section>

                {/* Jadwal Belajar */}
                <section className="mt-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                    <h2 className="mb-3 text-lg font-bold text-utama dark:text-sky-200">
                        Jadwal Belajar
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-[#203858] text-white">
                                <tr>
                                    <th className="px-3 py-2">Hari</th>
                                    <th className="px-3 py-2">Waktu</th>
                                    <th className="px-3 py-2">Kegiatan</th>
                                </tr>
                            </thead>

                            <tbody>
                                {jadwal.map((item) => (
                                    <tr
                                        key={item.hari}
                                        className="border-b border-gray-100 dark:border-gray-700"
                                    >
                                        <td className="px-3 py-2 text-gray-700 dark:text-gray-300">
                                            {item.hari}
                                        </td>
                                        <td className="px-3 py-2 text-gray-700 dark:text-gray-300">
                                            {item.waktu}
                                        </td>
                                        <td className="px-3 py-2 text-gray-700 dark:text-gray-300">
                                            {item.kegiatan}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

            </main>
        </div>
    );
}
