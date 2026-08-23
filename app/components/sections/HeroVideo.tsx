export function HeroVideo() {
  return (
    <section
      aria-label="Featured work"
      className="flex flex-1 items-center justify-center overflow-hidden"
    >
      <video
        className="block w-full max-w-full object-contain lg:h-auto lg:max-h-screen lg:w-auto"
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