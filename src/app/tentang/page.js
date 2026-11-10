
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
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto w-full max-w-5xl px-4 py-10">

        {/* Tentang Saya */}
        <section className="mt-8 rounded-xl border border-border bg-card p-6 text-card-foreground">
          <h2 className="text-2xl font-bold text-primary">
            Tentang Saya
          </h2>

          <p className="py-2 text-muted-foreground">
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
              <p className="text-muted-foreground">
                {item.deskripsi}
              </p>
              <p className="text-muted-foreground">
                {item.deskripsi2}
              </p>
              <p className="text-muted-foreground">
                {item.deskripsi3}
              </p>
            </Kartu>
          ))}
        </section>

        {/* Keahlian */}
        <section className="mt-6 rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm">
          <h2 className="mb-4 text-2xl font-bold text-primary">
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
        <section className="mt-6 rounded-xl border border-border bg-card p-4 text-card-foreground shadow-sm">
          <h2 className="mb-3 text-lg font-bold text-primary">
            Jadwal Belajar
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary text-primary-foreground">
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
                    className="border-b border-border"
                  >
                    <td className="px-3 py-2 text-muted-foreground">
                      {item.hari}
                    </td>
                    <td className="px-3 py-2 text-muted-foreground">
                      {item.waktu}
                    </td>
                    <td className="px-3 py-2 text-muted-foreground">
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
