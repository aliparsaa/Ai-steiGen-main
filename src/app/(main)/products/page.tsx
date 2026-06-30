import Link from "next/link"

export const metadata = {
  title: "محصولات استایژن | نخ‌های لیفت PDO و PCL",
  description:
    "خط کامل نخ‌های لیفت استایژن شامل PDO Mono، PDO Cog، PCL و کیت‌های تخصصی.",
}

export default function ProductsPage() {
  const products = [
    {name:"PDO Mono",slug:"pdo-mono"},
    {name:"PDO Cog",slug:"pdo-cog"},
    {name:"PDO Spring",slug:"pdo-spring"},
    {name:"PCL Threads",slug:"pcl-threads"},
    {name:"Starter Kit",slug:"starter-kit"},
    {name:"Jaw Lift Combination",slug:"jaw-lift-combo"}
  ]

  return (
    <main className="px-6 py-20">
      <h1 className="text-4xl font-bold mb-10">
        محصولات استایژن
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map(p=>(
          <Link
          key={p.slug}
          href={`/products/${p.slug}`}
          className="border p-6 rounded-lg hover:shadow-lg"
          >
            {p.name}
          </Link>
        ))}
      </div>

    </main>
  )
}
