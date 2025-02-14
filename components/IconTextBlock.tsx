import Icon from "@/components/Icon";
import clsx from "clsx";
import "@styles/components/iconTextBlock.css";

type IconTextBlockProps = {
  className?: string;
  variant?: string;
  icon: {
    className?: string;
    variant?: string;
  };
  content: {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
};

function IconTextBlock({
  content,
  variant,
  className,
  icon,
}: IconTextBlockProps) {
  return (
    <div
      className={clsx("grid gap-5", variant, className)}
      data-testid='div-wrapper'
      aria-labelledby='block-title'
      aria-describedby='block-description'
    >
      <Icon
        variant={icon.variant}
        className={icon.className}
        aria-hidden='true'
      >
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
