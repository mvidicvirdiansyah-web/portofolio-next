import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillCard";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS",  level: "Menengah" },
  { nama: "Git dan GitHub", level: "Dasar" },
  { nama: "Desain Poster dengan Canva", level: "Mahir" },
  { nama: "JavaScript", level: "Dasar" },   
    
      

];


export default function home() {
  return (
    <main className="">
      <Hero
         nama = "Muhammad Vidic Virdiansyah"
         tagline="Siswa kelas X SMK, 1 Pasuruan Web Developer di Kelas industri Ubig."
          />
         

         
         <section className="mt-10">
          <h2 className="mb-4 text-2xl font-bold
          text-utama">Keahlian</h2>
          <div className="grid gap-4 md:grid-cols-3">
          {skills.map((skill) => (
             <SkillCard key={skill.nama} nama={skill.nama}
             
      level={skill.level} />
          ))}
         </div>
         </section>
        



    </main>
  );
}