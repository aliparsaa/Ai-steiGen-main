export interface Product {
  name: string;
  type: string;
  gauge: string;
  length: string;
  desc: string;
  seed: string;
}

export interface EduModule {
  title: string;
  duration: string;
  level: 'مقدماتی' | 'متوسط' | 'پیشرفته' | 'تخصصی';
  lessons: number;
  icon: string;
}

export interface SpecDetail {
  feature: string;
  pdo: string;
  pcl: string;
}

export const products: Product[] = [
  { name: 'نخ مونو استایژن', type: 'PDO Mono', gauge: '29G', length: '۵۰ / ۷۰ / ۹۰ میلی‌متر', desc: 'مناسب برای لیفت ملایم ابرو و بهبود بافت پوست', seed: 'steigen-mono-a' },
  { name: 'نخ کوگ استایژن', type: 'PDO Cog', gauge: '27G', length: '۶۰ / ۸۰ میلی‌متر', desc: 'دارای خارهای یک‌طرفه و دوطرفه برای لیفت قوی‌تر', seed: 'steigen-cog-b' },
  { name: 'نخ اسپرینگ استایژن', type: 'PDO Spring', gauge: '28G', length: '۵۰ میلی‌متر', desc: 'فنر شکل برای حجم‌دهی و بازسازی کلاژن', seed: 'steigen-spring-c' },
  { name: 'نخ پی‌سی‌ال استایژن', type: 'PCL', gauge: '26G', length: '۷۰ / ۹۰ میلی‌متر', desc: 'ماندگاری ۱۸ تا ۲۴ ماه با تحریک قوی کلاژن', seed: 'steigen-pcl-d' },
  { name: 'ست کامل لیفت فک', type: 'Combination', gauge: 'متنوع', length: 'متنوع', desc: 'مجموعه کامل برای لیفت یکپارچه فک و خط گردن', seed: 'steigen-jaw-e' },
  { name: 'کیت مبتدی استایژن', type: 'Starter Kit', gauge: '۲۹G', length: 'مجموعه', desc: 'شامل ۱۰ نخ مونو + ۵ نخ کوگ + ابزار مورد نیاز', seed: 'steigen-kit-f' }
];

export const eduModules: EduModule[] = [
  { title: 'اصول پایه نخ‌های لیفت PDO', duration: '۴۵ دقیقه', level: 'مقدماتی', lessons: 6, icon: 'BookOpen' },
  { title: 'تکنیک‌های پیشرفته لیفت ابرو', duration: '۶۰ دقیقه', level: 'پیشرفته', lessons: 8, icon: 'Target' },
  { title: 'لیفت فک و خط گردن با PCL', duration: '۷۵ دقیقه', level: 'پیشرفته', lessons: 10, icon: 'ScanFace' },
  { title: 'مدیریت عوارض و مراقبت‌های بعدی', duration: '۳۰ دقیقه', level: 'متوسط', lessons: 4, icon: 'ShieldCheck' },
  { title: 'آناتومی صورت برای تزریق‌های زیبایی', duration: '۹۰ دقیقه', level: 'تخصصی', lessons: 12, icon: 'Brain' },
  { title: 'بازاریابی و جذب بیمار برای کلینیک', duration: '۴۰ دقیقه', level: 'مقدماتی', lessons: 5, icon: 'TrendingUp' }
];

export const specsData: SpecDetail[] = [
  { feature: 'زمان جذب کامل', pdo: '۶ تا ۸ ماه', pcl: '۱۸ تا ۲۴ ماه' },
  { feature: 'استحکام کششی', pdo: 'متوسط', pcl: 'بسیار بالا' },
  { feature: 'تحریک کلاژن', pdo: 'خوب', pcl: 'عالی' },
  { feature: 'کاربرد اصلی', pdo: 'لیفت ملایم و بازسازی', pcl: 'لیفت ساختاری و قوی' },
  { feature: 'حساسیت بافتی', pdo: 'کم', pcl: 'بسیار کم' },
  { feature: 'قطر سوزن', pdo: '۲۷G تا ۲۹G', pcl: '۲۶G' },
  { feature: 'مناسب برای', pdo: 'ابرو، گونه، خط فک ملایم', pcl: 'فک، گردن، میان‌تنه' },
  { feature: 'هزینه نسبت به اثربخشی', pdo: 'اقتصادی', pcl: 'پریمیوم' }
];

export const levelColors = {
  'مقدماتی': 'bg-emerald-500/15 text-emerald-400',
  'متوسط': 'bg-amber-500/15 text-amber-400',
  'پیشرفته': 'bg-orange-500/15 text-orange-400',
  'تخصصی': 'bg-rose-500/15 text-rose-400'
};
