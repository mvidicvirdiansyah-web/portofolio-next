
export default function SkillCard({ nama, level }) {
    return (
        <div className="rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm">
            <h3 className="font-bold text-primary">
                {nama}
            </h3>

            <p className="mt-1 text-sm text-muted-foreground
">
                Level: {level}
            </p>
        </div>
    );
}
