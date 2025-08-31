import React from 'react';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/icon';

interface EmptyPlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: keyof typeof Icon; // Use keyof typeof Icon for type safety
  title: string;
  description: string;
}

export function EmptyPlaceholder({
  className,
  icon,
  title,
  description,
  children,
  ...props
}: EmptyPlaceholderProps) {
  const IconComponent = Icon[icon];

  return (
    <div
      className={cn(
        'flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50',
        className
      )}
      {...props}
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <IconComponent className="h-10 w-10 text-muted-foreground" />
      </div>
      <h2 className="mt-6 text-xl font-semibold">{title}</h2>
      <p className="mb-8 mt-2 text-center text-sm leading-6 text-muted-foreground">
        {description}
      </p>
      {children}
    </div>
  );
}

EmptyPlaceholder.Icon = function EmptyPlaceHolderIcon({
  icon,
  className,
  ...props
}: { icon: keyof typeof Icon } & Partial<React.SVGProps<SVGSVGElement>>) {
  const IconComponent = Icon[icon];
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
      <IconComponent className={cn("h-10 w-10 text-muted-foreground", className)} {...props} />
    </div>
  );
};

EmptyPlaceholder.Title = function EmptyPlaceHolderTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn("mt-6 text-xl font-semibold", className)} {...props} />
  );
};

EmptyPlaceholder.Description = function EmptyPlaceHolderDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "mb-8 mt-2 text-center text-sm leading-6 text-muted-foreground",
        className
      )}
      {...props}
    />
  );
};

EmptyPlaceholder.Actions = function EmptyPlaceHolderActions({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center justify-center gap-2", className)}
      {...props}
    />
  );
};
