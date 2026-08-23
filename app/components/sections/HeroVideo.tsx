export function HeroVideo() {
  return (
    <section
      aria-label="Featured work"
      className="flex min-h-screen flex-1 items-center justify-center overflow-hidden"
    >
      <video
        className="h-auto max-h-screen max-w-full object-contain"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/videos/heroVideo.webm" type="video/webm" />
      </video>
    </section>
  );
}