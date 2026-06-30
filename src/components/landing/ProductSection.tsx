'use client';

import { products } from '@/data/landingData';
import { Ruler, MoveHorizontal } from 'lucide-react';
import React, { MouseEvent } from 'react';

interface ProductSectionProps {
  onShowToast: (msg: string) => void;
}

export default function ProductSection({ onShowToast }: ProductSectionProps) {
  
  // افکت سه‌بعدی کارت‌ها زمان حرکت موس
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * -7;
    const ry = ((x - cx) / cx) * 7;
    card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.02)`;
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
  };

  return (
    <section id="products" className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-champagne text-xs font-semibold tracking-widest block">محصولات استایژن</span>
          <h3 className="text-3xl md:text-4xl font-black text-med mt-3">خط کامل نخ‌های لیفت</h3>
          <p className="text-slate-custom mt-4 max-w-lg mx-auto text-sm leading-7">از نخ‌های مونو تا کوگ‌های پلی‌کاپرولاکتون، هر محصول برای نیاز مشخصی طراحی شده</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((p, i) => (
            <div
              key={p.seed}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="product-card bg-white rounded-2xl overflow-hidden border border-slate-100 cursor-pointer"
            >
              <div className="relative h-52 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                <img
                  src={`https://picsum.photos/seed/${p.seed}/400/300.jpg`}
                  alt={p.name}
                  className="w-full h-full object-cover grayscale opacity-40"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent"></div>
                <span className="absolute top-4 right-4 bg-med/90 text-champagne text-[11px] font-bold px-3 py-1 rounded-full">{p.type}</span>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-med text-lg mb-2">{p.name}</h4>
                <p className="text-slate-custom text-sm mb-4 leading-6">{p.desc}</p>
                <div className="flex gap-3 mb-5 text-xs flex-wrap">
                  <span className="flex items-center gap-1.5 text-med bg-med/5 px-3 py-1.5 rounded-full font-medium">
                    <Ruler className="w-3.5 h-3.5" /> {p.gauge}
                  </span>
                  <span className="flex items-center gap-1.5 text-med bg-med/5 px-3 py-1.5 rounded-full font-medium">
                    <MoveHorizontal className="w-3.5 h-3.5" /> {p.length}
                  </span>
                </div>
                <button
                  onClick={() => onShowToast(`جزئیات تخصصی «${p.name}» به‌زودی اضافه می‌شود`)}
                  className="w-full bg-transparent border-2 border-med/12 text-med py-2.5 rounded-full text-sm font-semibold hover:bg-med hover:text-white transition-all"
                >
                  مشاهده جزئیات تخصصی
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
