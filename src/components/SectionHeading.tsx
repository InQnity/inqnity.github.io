export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-2xl text-center"
          : "max-w-2xl text-left"
      }
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl leading-[1.1] text-foreground sm:text-5xl">
        {title}
      </h2>
      {lead && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          {lead}
        </p>
      )}
    </div>
  );
}
