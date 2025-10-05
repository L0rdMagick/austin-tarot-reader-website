interface TestimonialCardProps {
  quote: string;
  author: string;
}

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <div className="bg-[rgb(var(--secondary-rgb))] p-8 rounded-xl border border-white/10 h-full flex flex-col text-center md:text-left">
      {/* Decorative quotation mark for visual flair */}
      <svg className="w-10 h-10 text-[rgb(var(--accent-rgb))] opacity-50 mb-4 mx-auto md:mx-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
      </svg>
      
      <blockquote className="flex-grow">
        <p className="font-sans text-lg italic text-[rgb(var(--foreground-rgb))] text-balance">
          "{quote}"
        </p>
      </blockquote>
      
      <footer className="mt-6">
        <p className="font-bold not-italic text-[rgb(var(--primary-rgb))] font-cinzel">
          - {author}
        </p>
        <p className="text-sm text-[rgb(var(--foreground-rgb))] opacity-60">Verified Google Review</p>
      </footer>
    </div>
  );
}