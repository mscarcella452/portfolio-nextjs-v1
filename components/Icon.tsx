import clsx from "clsx";
import "@styles/components/icons.css";
import "@styles/components/ui-elements.css";
import { UIColorVariantProps } from "@/config/types/UI";

type IconProps = UIColorVariantProps & {
  children?: React.ReactNode;
  className?: string;
  pointerEvent?: boolean;
};

function Icon({
  children,
  variant = "solid",
  color,
  size = "lg",
  pointerEvent = false,
  className,
  ...rest
}: IconProps) {
  return (
    <div
      className={clsx(
        "icon",
        `${color}-${variant}-variant`,
        { "pointer-events-none": !pointerEvent },
        `icon-${size}`,
        className
      )}
      data-testid='icon-wrapper'
      {...rest}
    >
      {children}
    </div>
  );
}

export default Icon;
