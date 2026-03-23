interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}
export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 lg:py-32 ${className ?? ""}`}>
      {children}
    </section>
  );
}
