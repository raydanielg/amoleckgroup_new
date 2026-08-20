/* ============================================================================
   Amoleck motion kit — single entry point.

       import { Reveal, Stagger, Counter, TiltCard } from "@/components/motion";

   Every export below is a client component or a client hook. Importing from
   this barrel inside a server component is fine: each file carries its own
   "use client" directive.
   ========================================================================== */

export {
  cx,
  useCountUp,
  useElementScrollProgress,
  useHasMounted,
  useInView,
  useIsTouch,
  usePointerInside,
  useReducedMotion,
  useScrollDirection,
  useScrolled,
  useScrollProgress,
  useScrollY,
} from "./use-motion";
export type { InViewOptions } from "./use-motion";

export { AnimatedDivider, InViewFlag, Reveal, Stagger } from "./reveal";
export type { RevealDirection, RevealProps, StaggerProps } from "./reveal";

export {
  Counter,
  GradientText,
  ShinyText,
  TextReveal,
  Typewriter,
} from "./text";
export type { TextRevealProps } from "./text";

export { FlipCard, GlowCard, SpotlightCard, TiltCard } from "./cards";

export {
  ArrowLink,
  MagneticButton,
  RippleButton,
  ShimmerButton,
} from "./buttons";

export {
  Parallax,
  ParallaxImage,
  ScrollScale,
  StickyStack,
} from "./parallax";

export { Marquee, TickerStrip } from "./marquee";

export {
  AuroraBackground,
  BeamField,
  BlobField,
  DotGrid,
  GridBackground,
  NoiseOverlay,
  ParticleField,
  SectionGlow,
} from "./backgrounds";

export {
  CustomCursor,
  MotionProvider,
  PageTransition,
  RouteLoader,
  ScrollProgress,
  ScrollToTop,
} from "./chrome";
