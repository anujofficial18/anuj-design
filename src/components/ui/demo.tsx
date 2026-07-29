import { 
  GridBody,
  DraggableContainer,
  GridItem, 
} from "@/components/ui/infinite-drag-scroll";

// Import Real Bisonworkz Studio Portfolio Work Assets
import bison1 from '@/assets/Bison-portfolio-work/Entitlements 363.jpeg';
import bison2 from '@/assets/Bison-portfolio-work/Frame 1321316410.jpg';
import bison3 from '@/assets/Bison-portfolio-work/Frame 1321316411.jpg';
import bison4 from '@/assets/Bison-portfolio-work/Frame 1321316447.png';
import bison5 from '@/assets/Bison-portfolio-work/Frame 1321316449.png';
import bison6 from '@/assets/Bison-portfolio-work/Frame 84.jpg';
import bison7 from '@/assets/Bison-portfolio-work/Frame 85.jpg';
import bison8 from '@/assets/Bison-portfolio-work/LEAP.png';
import bison9 from '@/assets/Bison-portfolio-work/Login.jpeg';
import bison10 from '@/assets/Bison-portfolio-work/Pricing Editor Entitlement Hierarchy.png';
import bison11 from '@/assets/Bison-portfolio-work/Mockuuups Free Macbook Pro Space Gray mockup on the wooden table.jpeg';
import bison12 from '@/assets/Bison-portfolio-work/Untitled-mockup (10) 1.png';

const images = [
  { id: 1, alt: "Entitlements & Permissions Architecture", src: bison1 },
  { id: 2, alt: "Bisonworkz Brand & Interface Suite", src: bison2 },
  { id: 3, alt: "Interactive Dashboard Workstation", src: bison3 },
  { id: 4, alt: "Micro-Interactions & Motion Concept", src: bison4 },
  { id: 5, alt: "Design System & Component Matrix", src: bison5 },
  { id: 6, alt: "Cinematic Visual Showcase I", src: bison6 },
  { id: 7, alt: "Cinematic Visual Showcase II", src: bison7 },
  { id: 8, alt: "LEAP — AI Financial Workspace", src: bison8 },
  { id: 9, alt: "Authentication & Access Flow", src: bison9 },
  { id: 10, alt: "Pricing Editor & Entitlement Hierarchy", src: bison10 },
  { id: 11, alt: "ScholarShield Step Flow", src: bison11 },
  { id: 12, alt: "Multi-Device App Mockup Suite", src: bison12 },
  // Repeat a few to fill the 6-column grid nicely (18 items total)
  { id: 13, alt: "Entitlements & Permissions Architecture", src: bison1 },
  { id: 14, alt: "Bisonworkz Brand & Interface Suite", src: bison2 },
  { id: 15, alt: "Interactive Dashboard Workstation", src: bison3 },
  { id: 16, alt: "Cinematic Visual Showcase I", src: bison6 },
  { id: 17, alt: "LEAP — AI Financial Workspace", src: bison8 },
  { id: 18, alt: "ScholarShield Step Flow", src: bison11 },
];

const DemoOne = () => {
  return (
     <DraggableContainer variant="masonry">
      <GridBody>
        {images.map((image) => (
          <GridItem
            key={image.id}
            className="relative h-54 w-36 md:h-96 md:w-64"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="pointer-events-none absolute h-full w-full object-cover"
            />
          </GridItem>
        ))}
      </GridBody>
    </DraggableContainer>
  );
};

export { DemoOne };
