import * as React from "react";

import { cn } from "../lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

const ImageCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Card ref={ref} className={cn("overflow-hidden p-0", className)} {...props} />
));
ImageCard.displayName = "ImageCard";

const ImageCardImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, alt = "", ...props }, ref) => (
  <img
    ref={ref}
    alt={alt}
    className={cn("aspect-video w-full border-b-[3px] border-border object-cover", className)}
    {...props}
  />
));
ImageCardImage.displayName = "ImageCardImage";

const ImageCardHeader = CardHeader;
const ImageCardTitle = CardTitle;
const ImageCardDescription = CardDescription;
const ImageCardContent = CardContent;
const ImageCardFooter = CardFooter;

export {
  ImageCard,
  ImageCardImage,
  ImageCardHeader,
  ImageCardTitle,
  ImageCardDescription,
  ImageCardContent,
  ImageCardFooter,
};
