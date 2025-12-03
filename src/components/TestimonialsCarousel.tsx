import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star
} from 'lucide-react';
import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

type Testimonial = {
  name: string;
  location: string;
  text: string;
  rating: number;
  project?: string;
  image?: string;
};

type TestimonialsCarouselProps = {
  title: ReactNode;
  subtitle: ReactNode;
  testimonials: Testimonial[];
  accentClassName?: string;
};

const getInitials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .filter(Boolean)
    .slice(0, 2)
    .join('') || 'GC';

export default function TestimonialsCarousel({
  title,
  subtitle,
  testimonials,
  accentClassName = 'text-[#00aeef]'
}: TestimonialsCarouselProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const totalTestimonials = testimonials.length;
  const [visibleCount, setVisibleCount] = useState(3);
  const effectiveVisible = Math.min(visibleCount, Math.max(totalTestimonials, 1));
  const maxIndex = Math.max(totalTestimonials - effectiveVisible, 0);
  const extendedTestimonials = useMemo(() => {
    if (totalTestimonials === 0) {
      return [];
    }
    if (totalTestimonials <= effectiveVisible) {
      return testimonials;
    }
    const leading = testimonials.slice(-effectiveVisible);
    const trailing = testimonials.slice(0, effectiveVisible);
    return [...leading, ...testimonials, ...trailing];
  }, [effectiveVisible, testimonials, totalTestimonials]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  useEffect(() => {
    if (totalTestimonials <= effectiveVisible) {
      setIsTransitionEnabled(false);
      setCurrentIndex(0);
      return;
    }
    setIsTransitionEnabled(false);
    setCurrentIndex(effectiveVisible);
  }, [effectiveVisible, totalTestimonials]);

  useEffect(() => {
    if (!isTransitionEnabled) {
      const frame = window.requestAnimationFrame(() => setIsTransitionEnabled(true));
      return () => window.cancelAnimationFrame(frame);
    }
  }, [isTransitionEnabled]);

  useEffect(() => {
    if (!isAnimating) {
      return;
    }

    const timeout = window.setTimeout(() => setIsAnimating(false), 600);
    return () => window.clearTimeout(timeout);
  }, [isAnimating]);

  const moveBy = useCallback(
    (step: number) => {
      if (isAnimating || totalTestimonials <= effectiveVisible) {
        return;
      }
      setIsAnimating(true);
      setIsTransitionEnabled(true);
      setCurrentIndex((prev) => prev + step);
    },
    [effectiveVisible, isAnimating, totalTestimonials]
  );

  const handleNext = useCallback(() => {
    moveBy(1);
  }, [moveBy]);

  const handlePrev = useCallback(() => {
    moveBy(-1);
  }, [moveBy]);

  useEffect(() => {
    if (totalTestimonials <= effectiveVisible) {
      return;
    }

    const interval = window.setInterval(() => {
      moveBy(1);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [effectiveVisible, moveBy, totalTestimonials]);

  const pageCount = useMemo(() => maxIndex + 1, [maxIndex]);
  const normalizedIndex =
    totalTestimonials > effectiveVisible
      ? ((currentIndex - effectiveVisible + totalTestimonials) % totalTestimonials + totalTestimonials) %
        totalTestimonials
      : 0;
  const activePage = Math.min(normalizedIndex, maxIndex);
  const handleTransitionEnd = useCallback(() => {
    setIsAnimating(false);
    if (totalTestimonials <= effectiveVisible) {
      return;
    }
    if (currentIndex >= totalTestimonials + effectiveVisible) {
      setIsTransitionEnabled(false);
      setCurrentIndex(effectiveVisible);
    } else if (currentIndex < effectiveVisible) {
      setIsTransitionEnabled(false);
      setCurrentIndex(totalTestimonials + currentIndex);
    }
  }, [currentIndex, effectiveVisible, totalTestimonials]);
  const handleDotClick = useCallback(
    (targetPage: number) => {
      if (
        targetPage === activePage ||
        isAnimating ||
        totalTestimonials <= effectiveVisible
      ) {
        return;
      }
      moveBy(targetPage - activePage);
    },
    [activePage, effectiveVisible, isAnimating, moveBy, totalTestimonials]
  );

  if (totalTestimonials === 0) {
    return null;
  }

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-visible">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00aeef] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className={`flex ${isTransitionEnabled ? 'transition-transform duration-700 ease-out' : ''} ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transform: `translateX(-${currentIndex * (100 / effectiveVisible)}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedTestimonials.map((testimonial, idx) => {
                const initials = getInitials(testimonial.name);
                return (
                  <div
                    key={testimonial.name + idx}
                    className="flex-shrink-0 box-border px-2 md:px-4"
                    style={{ width: `${100 / effectiveVisible}%` }}
                  >
                    <div className="relative h-full bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-10 border-2 border-gray-200 shadow-xl flex flex-col">
                      <div className="absolute -top-6 left-10">
                        <div className="p-4 bg-[#00aeef] rounded-2xl shadow-xl">
                          <Quote className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <div className={`transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                        <div className="mb-6 flex justify-center">
                          {[...Array(testimonial.rating)].map((_, starIdx) => (
                            <Star key={starIdx} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>

                        <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 text-center font-medium flex-1">
                          "{testimonial.text}"
                        </blockquote>

                        <div className="text-center flex flex-col items-center gap-3">
                          {testimonial.image ? (
                            <img
                              src={testimonial.image}
                              alt={`${testimonial.name} testimonial`}
                              className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-lg font-semibold text-gray-600 border-4 border-white shadow-md">
                              {initials}
                            </div>
                          )}
                          <div>
                            <p className="text-xl font-bold text-gray-900">{testimonial.name}</p>
                            <p className="text-gray-600">{testimonial.location}</p>
                            {testimonial.project ? (
                              <p className="text-sm font-semibold mt-3">
                                <span className={accentClassName}>{testimonial.project}</span>
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {totalTestimonials > effectiveVisible ? (
            <>
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-3 bg-white rounded-full shadow-xl border border-gray-200 hover:bg-[#00aeef] hover:text-white transition-all duration-300 hover:scale-110 group"
                aria-label="Show previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-3 bg-white rounded-full shadow-xl border border-gray-200 hover:bg-[#00aeef] hover:text-white transition-all duration-300 hover:scale-110 group"
                aria-label="Show next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {Array.from({ length: pageCount }).map((_, idx) => (
                  <button
                    key={`dot-${idx}`}
                    type="button"
                    onClick={() => handleDotClick(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === activePage ? 'w-12 bg-[#00aeef]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  ></button>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}

