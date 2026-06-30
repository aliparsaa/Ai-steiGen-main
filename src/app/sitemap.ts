import { MetadataRoute } from "next"

export default function sitemap():MetadataRoute.Sitemap{

return[
{
url:"https://steigen.com",
lastModified:new Date()
},
{
url:"https://steigen.com/products",
lastModified:new Date()
},
{
url:"https://steigen.com/academy",
lastModified:new Date()
},
{
url:"https://steigen.com/blog",
lastModified:new Date()
}
]

}
