
export default function SkillCard({ nama, level }) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
            <h3 className="font-bold text-utama dark:text-sky-200">
                {nama}
            </h3>

            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Level: {level}
            </p>
        </div>
    );
}
