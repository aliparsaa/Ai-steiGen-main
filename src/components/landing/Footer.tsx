export default function Footer() {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 text-center text-xs text-slate-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="font-bold text-slate-400 mb-2">STEIGEN MEDICAL TECHNOLOGY</p>
        <p>© {new Date().getFullYear()} تمامی حقوق مادی و معنوی محصولات تحت انحصار برند اشتیگن و فروشگاه آرامیس محفوظ است.</p>
      </div>
    </footer>
  );
}
