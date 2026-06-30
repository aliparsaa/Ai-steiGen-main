import Link from "next/link"

const posts=[
{slug:"thread-lift-benefits",title:"مزایای لیفت با نخ"},
{slug:"pdo-vs-pcl",title:"تفاوت نخ PDO و PCL"}
]

export default function Page(){
return(
<main className="px-6 py-20">

<h1 className="text-4xl font-bold mb-10">
بلاگ پزشکی زیبایی
</h1>

{posts.map(p=>(
<Link key={p.slug} href={`/blog/${p.slug}`}>
<div className="border p-6 mb-6">
{p.title}
</div>
</Link>
))}

</main>
)
}
