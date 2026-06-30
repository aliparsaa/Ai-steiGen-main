export const metadata={
title:"مقایسه PDO و PCL",
description:"مقایسه کامل نخ های PDO و PCL برای لیفت صورت"
}

export default function Page(){
return(
<main className="px-6 py-20">

<h1 className="text-4xl font-bold mb-10">
مقایسه PDO و PCL
</h1>

<table className="w-full border">

<thead>
<tr>
<th>ویژگی</th>
<th>PDO</th>
<th>PCL</th>
</tr>
</thead>

<tbody>

<tr>
<td>زمان جذب</td>
<td>۶ تا ۸ ماه</td>
<td>۱۸ تا ۲۴ ماه</td>
</tr>

<tr>
<td>استحکام</td>
<td>متوسط</td>
<td>بسیار بالا</td>
</tr>

<tr>
<td>تحریک کلاژن</td>
<td>خوب</td>
<td>عالی</td>
</tr>

</tbody>

</table>

</main>
)
}
