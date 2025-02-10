import clsx from "clsx";

type IconProps = {
  IconComponent: React.ElementType; // The icon component itself
  variant?:
    | "primary"
    | "primary-highlight"
    | "secondary"
    | "secondary-highlight";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  className?: string;
};

function Icon({
  IconComponent,
  variant = "primary",
  size = "lg",
  className,
  ...rest
}: IconProps) {
  return (
    <div
      className={clsx(className, "icon", `icon-${size}`, `icon-${variant}`)}
      data-testid='icon-wrapper'
      {...rest}
    >
      <IconComponent />
    </div>
  );
}

export default Icon;
