export type buttonThemeVariant =
  | `${string}-${string}-btn`
  | `light:${string}-${string}-btn dark:${string}-${string}-btn`
  | `light:${string}-${string}-btn`
  | `dark:${string}-${string}-btn`;

export type iconThemeVariant =
  | `${string}-${string}`
  | `light:${string}-${string} dark:${string}-${string}`
  | `light:${string}-${string}`
  | `dark:${string}-${string}`;

export type UIColorVariantProps = {
  variant?: string;
  color?: "primary" | "secondary" | "accent" | "neutral";
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
};
export type UIButtonProps = {
  className?: string;
  variant?: buttonThemeVariant;
  icon?: {
    className?: string;
    variant?: iconThemeVariant;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  };
};
