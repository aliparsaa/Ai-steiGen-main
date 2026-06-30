'use client';

import { useRef } from 'react';
import { eduModules, levelColors } from '@/data/landingData';
import { ChevronRight, ChevronLeft, Clock, PlayCircle } from 'lucide-react';
import * as Icons from 'lucide-react';

interface EducationSectionProps {
  onShowToast: (msg: string) => void;
}

export default function EducationSection({
  onShowToast,
}: EducationSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const offset = direction === 'left' ? -330 : 330;
      scrollRef.current.scrollBy({
        left: offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="education"
      className="py-20 md:py-28 px-6 bg-med relative overflow-hidden"
    >
      <div className="absolute inset-0 dot-pattern opacity-25"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-champagne/25 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <span className="text-champagne text-xs font-semibold tracking-widest block">
              آکادمی دکتر آرمیس
            </span>

            <h3 className="text-3xl md:text-4xl font-black text-white mt-3">
              آموزش تخصصی نخ‌های لیفت
            </h3>

            <p className="text-slate-custom mt-4 max-w-md text-sm leading-7">
              دسترسی به دانش روز دنیا در زمینه تکنیک‌های لیفت با نخ
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-champagne/25 flex items-center justify-center text-champagne hover:bg-champagne/10 transition-colors"
              aria-label="قبلی"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-champagne/25 flex items-center justify-center text-champagne hover:bg-champagne/10 transition-colors"
              aria-label="بعدی"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div ref={scrollRef} className="edu-scroll" id="edu-scroll">
          {eduModules.map((m, idx) => {
            const IconComponent =
              (Icons as any)[m.icon] || Icons.BookOpen;

            return (
              <div
                key={idx}
                className="edu-card rounded-2xl p-6 w-[300px]"
              >
                <div className="flex items-center justify-between mb-5">
                  {/* content continues */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
