import clsx from "clsx";
import "@styles/components/icons.css";

type IconProps = {
  className?: string;
  variant?: string;
  children?: React.ReactNode;
} & React.HTMLProps<HTMLDivElement>;

function Icon({ className, variant, children, ...rest }: IconProps) {
  return (
    <div
      className={clsx("icon", variant, className)}
      data-testid='icon-wrapper'
      {...rest}
    >
      {children}
    </div>
  );
}

export default Icon;
