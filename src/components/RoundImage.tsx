import Image from "next/image";

interface RoundImageProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export default function RoundImage({ 
  src, 
  alt, 
  size = 100, 
  className = "" 
}: RoundImageProps) {
  return (
    <div 
      className={`fixed left-1/2 top-8 -translate-x-1/2 z-50 ${className}`}
      style={{ width: size, height: size }}
    >
      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white shadow-lg">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
