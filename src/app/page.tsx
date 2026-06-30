import Link from "next/link";
import products from "../data/products.json";
import CTASection from "../components/landing/CTASection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* قهرمان صفحه (Hero) */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute top-0 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]"></div>
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1.5 text-xs font-semibold text-blue-400">
            نسخه جدید پلتفرم پزشکی اشتیگن
          </span>
          <h1 className="mt-8 text-4xl font-black tracking-tight sm:text-6xl">
            تجهیزات پزشکی زیبایی <span className="text-blue-500">اشتیگن</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-400">
            مرجع رسمی عرضه بهترین نخ‌های لیفت و ست‌های جوانسازی پوست به صورت مستقیم با ضمانت اصالت از فروشگاه آرامیس.
          </p>
        </div>
      </section>

      {/* بخش ویترین محصولات (Products Grid) */}
      <section id="products" className="py-16 border-t border-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-extrabold text-white">جدیدترین محصولات آرامیس</h2>
              <p className="mt-2 text-sm text-slate-400">تحول جوانسازی و زیبایی پوست با فناوری‌های نوین اشتیگن</p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-900 bg-slate-900/20 p-5 transition hover:border-slate-800 hover:bg-slate-900/40"
              >
                <div className="aspect-square w-full rounded-xl bg-slate-950 border border-slate-900 flex items-center justify-center text-slate-600 text-xs transition group-hover:border-slate-800">
                  تصویر {product.title}
                </div>
                <div className="mt-4 flex flex-col flex-1">
                  <span className="text-[10px] font-bold text-blue-500 tracking-wider uppercase">
                    {product.category}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-slate-200 line-clamp-1 group-hover:text-blue-400 transition">
                    {product.title}
                  </h3>
                  
                  
                  <div className="mt-auto pt-5 flex items-center justify-between border-t border-slate-900/60">
                    <span className="text-sm font-bold text-white">{product.price} تومان</span>
                    <Link
                      href={`/products/${product.slug}`}
                      className="rounded-lg bg-blue-600/10 border border-blue-500/20 px-3 py-1.5 text-xs font-bold text-blue-400 transition group-hover:bg-blue-600 group-hover:text-white"
                    >
                      جزئیات و خرید
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* سکشن دعوت به عمل (CTA) */}
      <CTASection />
    </main>
  );
}
