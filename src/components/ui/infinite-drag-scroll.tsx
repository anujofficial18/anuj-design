import {
  animate,
  cubicBezier,
  motion,
  useMotionValue,
  useTransform,
  wrap,
} from "framer-motion";
import {
  memo,
  useContext,
  useEffect,
  useRef,
  useState,
  createContext,
} from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

//Types
type variants = "default" | "masonry" | "polaroid";

// Create Context
const GridVariantContext = createContext<variants | undefined>(undefined);

//Motion Variants
const rowVariants = {
  initial: { opacity: 1, scale: 1 },
  animate: {
    opacity: 1,
    scale: 1,
  },
};

// Custom safeWrap helper that maps v=0 to 0 (preventing offset to -range on load)
const safeWrap = (min: number, max: number, v: number) => {
  const range = Math.abs(max - min);
  if (!range) return 0;
  let mod = v % range;
  if (mod > 0) mod -= range;
  return mod;
};

export const DraggableContainer = ({
  className,
  children,
  variant,
}: {
  className?: string;
  children: React.ReactNode;
  variant?: variants;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const [bounds, setBounds] = useState({ width: 0, height: 0 });

  const [isDragging, setIsDragging] = useState(false);
  const handleIsDragging = () => setIsDragging(true);
  const handleIsNotDragging = () => setIsDragging(false);

  useEffect(() => {
    const updateBounds = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setBounds({ width: rect.width, height: rect.height });
        }
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);

    const element = ref.current;
    if (!element) return;

    const handleWheelScroll = (event: WheelEvent) => {
      if (!isDragging) {
        animate(rawY, rawY.get() - event.deltaY * 2.2, {
          type: "tween",
          duration: 0.8,
          ease: cubicBezier(0.18, 0.71, 0.11, 1),
        });
      }
    };

    element.addEventListener("wheel", handleWheelScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", updateBounds);
      element.removeEventListener("wheel", handleWheelScroll);
    };
  }, [rawY, isDragging]);

  const x = useTransform(rawX, (latest) => {
    if (!bounds.width) return 0;
    return safeWrap(-bounds.width / 2, 0, latest);
  });

  const y = useTransform(rawY, (latest) => {
    if (!bounds.height) return 0;
    return safeWrap(-bounds.height / 2, 0, latest);
  });

  return (
    <GridVariantContext.Provider value={variant}>
      <div className="h-full w-full overflow-hidden">
        <motion.div className="h-full w-full overflow-hidden">
          <motion.div
            className={cn(
              "grid h-fit w-fit cursor-grab grid-cols-[repeat(2,1fr)] bg-[#141414] active:cursor-grabbing will-change-transform",
              className,
            )}
            drag
            dragMomentum={true}
            dragTransition={{
              timeConstant: 200,
              power: 0.28,
              restDelta: 0,
              bounceStiffness: 0,
            }}
            onMouseDown={handleIsDragging}
            onMouseUp={handleIsNotDragging}
            onMouseLeave={handleIsNotDragging}
            style={{ x, y }}
            ref={ref}
          >
            {children}
          </motion.div>
        </motion.div>
      </div>
    </GridVariantContext.Provider>
  );
};

export const GridItem = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const variant = useContext(GridVariantContext);

  const gridItemStyles = cva(
    "overflow-hidden hover:cursor-pointer w-full h-full will-change-transform",
    {
      variants: {
        variant: {
          default: "rounded-sm",
          masonry: "even:mt-[60%] rounded-sm ",
          polaroid:
            "border-10 border-b-28 border-white shadow-xl even:rotate-3 odd:-rotate-2 hover:rotate-0 transition-transform ease-out duration-300 even:mt-[60%]",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    },
  );

  return (
    <motion.div
      className={cn(gridItemStyles({ variant, className }))}
      variants={rowVariants}
      initial="initial"
      animate="animate"
    >
      {children}
    </motion.div>
  );
};

export const GridBody = memo(
  ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    const variant = useContext(GridVariantContext);

    const gridBodyStyles = cva("grid grid-cols-[repeat(6,1fr)] h-fit w-fit", {
      variants: {
        variant: {
          default: "gap-14 p-7 md:gap-28 md:p-14",
          masonry: "gap-x-14 px-7 md:gap-x-28 md:px-14",
          polaroid: "gap-x-14 px-7 md:gap-x-28 md:px-14",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    });

    return (
      <>
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={cn(gridBodyStyles({ variant, className }))}
          >
            {children}
          </div>
        ))}
      </>
    );
  },
);

GridBody.displayName = "GridBody";
