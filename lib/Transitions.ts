export function getOpacityFromBottomTransition(inView: boolean) {
  return (
    "  duration-1000 transition-all " +
    (!inView ? " opacity-0 translate-y-12 " : "opacity-100 translate-y-0")
  );
}
