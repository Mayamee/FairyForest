const scrollHandler = (e) => {
  document.body.style.cssText += `--scroll-top: ${window.scrollY}px`;
  // Прокидываем js переменную в css
};

window.addEventListener("scroll", scrollHandler);
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
});
