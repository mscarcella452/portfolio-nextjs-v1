import Icon from "@/components/Icon";
import clsx from "clsx";
import "@styles/components/iconTextBlock.css";

type IconTextBlockProps = {
  className?: string;
  content: {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
} & React.ComponentProps<typeof Icon>; // Inherit types from Icon component

function IconTextBlock({
  content,
  variant,
  color,
  size,
  className,
}: IconTextBlockProps) {
  return (
    <div
      className={clsx("grid gap-5", className)}
      data-testid='div-wrapper'
      aria-labelledby='block-title'
      aria-describedby='block-description'
    >
      <Icon variant={variant} color={color} size={size} aria-hidden='true'>
        {content.icon}
      </Icon>
      <div>
        <h3 id='block-title' className='text-h-5 font-semibold font-secondary'>
          {content.title}
        </h3>
        <p
          id='block-description'
          className='text-base text-neutral font-primary'
        >
          {content.description}
        </p>
      </div>
    </div>
  );
}

export default IconTextBlock;
