export function IntroVideo() {
  return (
    <section
      aria-label="Tech skills"
      className="flex justify-center overflow-hidden"
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
        <source src="/videos/introVideo.mp4" type="video/mp4" />
      </video>
    </section>
  );
}