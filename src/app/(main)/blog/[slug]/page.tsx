import { notFound } from "next/navigation"

const posts={
"thread-lift-benefits":{
title:"مزایای لیفت با نخ",
content:"لیفت با نخ یکی از روش های کم تهاجمی جوانسازی پوست است."
}
}

export default function Page({params}:{params:{slug:string}}){

const post=posts[params.slug]

if(!post) return notFound()

return(
<main className="px-6 py-20">

<h1 className="text-4xl font-bold">
{post.title}
</h1>

<p className="mt-6">
{post.content}
</p>

</main>
)
}
