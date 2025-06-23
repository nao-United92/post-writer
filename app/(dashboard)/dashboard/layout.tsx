export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="constainer mx-auto grid items-center gap-10 py-8">
      {children}
    </div>
  );
}
