import { cn } from "@/lib/utils";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";

type IconWeight = "thin" | "light" | "regular" | "bold" | "fill";

const strokeWidthMap: Record<Exclude<IconWeight, "fill">, number> = {
  thin: 1,
  light: 1.5,
  regular: 2,
  bold: 3,
};

const ShoppingCartIcon = ({
  className,
  weight = "regular",
  size = 24,
  color = "currentColor",
}: {
  className?: string;
  weight?: IconWeight;
  size?: number;
  color?: string;
}) => {
  const isFill = weight === "fill";
  const strokeWidth = isFill ? undefined : strokeWidthMap[weight as Exclude<IconWeight, "fill">];

  return (
    <div className={cn("inline-flex", className)}>
      <FiShoppingCart
        className="stroke-2"
        size={size}
        color={color}
        strokeWidth={strokeWidth}
        style={isFill ? { fill: color, stroke: "none" } : {}}
      />
    </div>
  );
};

export default ShoppingCartIcon;
