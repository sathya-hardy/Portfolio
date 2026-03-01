import { useRef, useState, useEffect, useCallback, Children } from "react";

export default function ProjectCarousel({ children }) {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0 });

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
      setScrollProgress(scrollLeft / (scrollWidth - clientWidth || 1));
    }
  };

  const onPointerDown = useCallback((e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    scrollRef.current.style.scrollBehavior = "auto";
    dragState.current.startX = e.clientX;
    dragState.current.scrollLeft = scrollRef.current.scrollLeft;
    scrollRef.current.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e) => {
    if (!isDragging || !scrollRef.current) return;
    const dx = e.clientX - dragState.current.startX;
    scrollRef.current.scrollLeft = dragState.current.scrollLeft - dx;
  }, [isDragging]);

  const onPointerUp = useCallback(() => {
    if (!scrollRef.current) return;
    setIsDragging(false);
    scrollRef.current.style.scrollBehavior = "smooth";
  }, []);

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const cardWidth = window.innerWidth < 768 ? 320 : 480;
      scrollRef.current.scrollBy({ left: dir * (cardWidth + 24), behavior: "smooth" });
    }
  };

  const totalCards = Children.count(children);

  return (
    <div className="relative -mx-6">
      {/* Left fade mask */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none" />
      {/* Right fade mask */}
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none" />

      <div
        ref={scrollRef}
        onScroll={checkScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
        className={`flex gap-6 overflow-x-auto scroll-smooth px-16 md:px-24 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
          isDragging ? "cursor-grabbing select-none" : "cursor-grab"
        }`}
      >
        {children}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8 px-6">
        <button
          onClick={() => scroll(-1)}
          disabled={!canScrollLeft}
          className="h-10 w-10 rounded-full bg-dark-700/50 border border-dark-600/50 flex items-center justify-center
            disabled:opacity-30 hover:bg-dark-600/50 hover:border-accent/30 transition-all duration-200"
          aria-label="Scroll left"
        >
          <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Progress dots */}
        <div className="flex gap-2">
          {Array.from({ length: totalCards }).map((_, i) => {
            const dotProgress = i / (totalCards - 1);
            const isActive = Math.abs(scrollProgress - dotProgress) < 0.2;
            return (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  isActive ? "w-6 bg-accent" : "w-1.5 bg-dark-600"
                }`}
              />
            );
          })}
        </div>

        <button
          onClick={() => scroll(1)}
          disabled={!canScrollRight}
          className="h-10 w-10 rounded-full bg-dark-700/50 border border-dark-600/50 flex items-center justify-center
            disabled:opacity-30 hover:bg-dark-600/50 hover:border-accent/30 transition-all duration-200"
          aria-label="Scroll right"
        >
          <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
