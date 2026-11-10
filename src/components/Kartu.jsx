
export default function Kartu({ judul, children }) {
    return (
        <section className="rounded-xl border border-gray-200 bg-white p-6 text-gray-800 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100">
            <h2 className="mb-3 text-2xl font-bold text-primary">
                {judul}
            </h2>

            {children}
        </section>
    );
}
