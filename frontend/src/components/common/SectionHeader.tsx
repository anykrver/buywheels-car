interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ eyebrow, title, subtitle, center }: SectionHeaderProps) {
  return (
    <div className={center ? 'text-center' : ''}>
      {eyebrow && (
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">{eyebrow}</p>
      )}
      <h2 className="font-heading font-bold text-dark text-3xl md:text-4xl leading-tight">{title}</h2>
      {subtitle && (
        <p className="text-muted text-lg mt-3 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
