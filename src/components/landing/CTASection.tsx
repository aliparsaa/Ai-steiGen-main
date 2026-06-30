export default function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden py-24 text-center bg-slate-950 border-t border-slate-900">
      {/* افکت نوری پس‌زمینه */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]"></div>

      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          شروع خلق ارزش با <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">اشتیگن</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400">
          تلفیق هوش مصنوعی سینماتیک در حوزه‌ پزشکی و آموزش با مدرن‌ترین تجهیزات زیبایی و درمانی آرامیس. همگام با فناوری روز دنیا قدم بردارید.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="tel:+989120000000"
            className="rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black transition hover:bg-slate-200"
          >
            دریافت مشاوره رایگان
          </a>
          <a
            href="#products"
            className="rounded-xl border border-slate-800 bg-slate-900/50 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-slate-900"
          >
            مشاهده کاتالوگ محصولات
          </a>
        </div>
      </div>
    </section>
  );
}
