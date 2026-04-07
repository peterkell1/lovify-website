import Image from "next/image";
import { AppleIcon } from "./AppleIcon";

interface LaurelBadgeProps {
  title: string;
  subtitle: string;
}

export const LaurelBadge = ({ title, subtitle }: LaurelBadgeProps) => (
  <div className="flex items-center gap-2">
    <Image src="/assets/leafs.png" alt="" width={40} height={80} className="-scale-x-100" />
    <div className="flex flex-col items-center text-center">
      <AppleIcon size={16} />
      <span className="mt-1 text-sm font-bold leading-tight">{title}</span>
      <span className="text-sm font-bold leading-tight">{subtitle}</span>
    </div>
    <Image src="/assets/leafs.png" alt="" width={40} height={80} />
  </div>
);
