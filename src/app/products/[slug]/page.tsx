import type { Metadata } from "next";
import { notFound } from "next/navigation";
import products from "../../../data/products.json";

type Product = {
  id: string;
  slug: string;
  title: string;
  price: string;
  brand: string;
  seller: string;
  category: string;
  image?: string;
  shortDescription?: string;
  features?: string[];
};

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const allProducts = products as Product[];

export async function generateStaticParams() {
  return allProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = allProducts.find((item) => item.slug === slug);

  if (!product) {
    return {
      title: "محصول یافت نشد | اشتیگن",
      description: "صفحه محصول موردنظر یافت نشد.",
    };
  }

  return {
    title: `${product.title} | اشتیگن`,
    description:
      product.shortDescription ||
      `خرید ${product.title} از ${product.seller} با برند ${product.brand}. مشاهده مشخصات، دسته‌بندی و اطلاعات محصول.`,
    openGraph: {
      title: `${product.title} | اشتیگن`,
      description:
        product.shortDescription ||
        `مشاهده و خرید ${product.title} از ${product.seller}`,
      type: "website",
    },
  };
}

function formatPrice(price: string) {
  return `${price} تومان`;
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = allProducts.find((item) => item.slug === slug);

  if (!product) notFound();

  return (
    <main className="bg-white text-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="mb-6 text-sm text-slate-500">
          <span>خانه</span>
          <span className="mx-2">/</span>
          <span>محصولات</span>
          <span className="mx-2">/</span>
          <span>{product.category}</span>
        </nav>

        <section className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
            <div className="flex aspect-square items-center justify-center">
              {product.image ? (
                // اگر بعداً next/image اضافه کردی این بخش را با Image جایگزین کن
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-slate-400">
                  تصویر محصول
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                برند {product.brand}
              </span>
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                فروشنده {product.seller}
              </span>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                {product.category}
              </span>
            </div>

            <h1 className="text-2xl font-extrabold leading-9 sm:text-4xl">
              {product.title}
            </h1>

            <div className="mt-5 text-3xl font-black text-blue-600">
              {formatPrice(product.price)}
            </div>

            {product.shortDescription ? (
              <p className="mt-5 max-w-2xl leading-8 text-slate-600">
                {product.shortDescription}
              </p>
            ) : null}

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <h2 className="mb-3 text-lg font-bold">مشخصات محصول</h2>
              <div className="grid gap-3 text-sm sm:grid-cols-2">
                <div className="rounded-xl bg-white p-3">
                  <span className="block text-slate-500">برند</span>
                  <span className="mt-1 block font-semibold">{product.brand}</span>
                </div>
                <div className="rounded-xl bg-white p-3">
                  <span className="block text-slate-500">فروشنده</span>
                  <span className="mt-1 block font-semibold">{product.seller}</span>
                </div>
                <div className="rounded-xl bg-white p-3">
                  <span className="block text-slate-500">دسته‌بندی</span>
                  <span className="mt-1 block font-semibold">{product.category}</span>
                </div>
                <div className="rounded-xl bg-white p-3">
                  <span className="block text-slate-500">وضعیت</span>
                  <span className="mt-1 block font-semibold text-emerald-600">
                    موجود
                  </span>
                </div>
              </div>
            </div>

            {product.features && product.features.length > 0 ? (
              <div className="mt-8">
                <h2 className="mb-3 text-lg font-bold">ویژگی‌ها</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+989351076964"
                className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                تماس با آرامیس
              </a>
              <a
                href="/products"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-4 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
              >
                بازگشت به محصولات
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
