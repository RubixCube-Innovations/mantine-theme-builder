import { Image } from "@mantine/core";
import clsx from "clsx";
// import { DiscordLogoIcon } from "@radix-ui/react-icons";

export interface TestimonialItem {
  className?: string;
  url?: string;
  text: string;
  imageSrc: string;
  name: string;
  handle: string;
  featured?: boolean;
  verified?: boolean;
  size?: "full" | "half" | "third"; // NB: Only applies to testimonials in a list, not grid.
}

/**
 * Shows a testimonial with an image, name, and handle.
 *
 * Meant to be used with a `LandingTestimonialList` or `LandingTestimonialGrid`.
 */
export const LandingTestimonial = ({
  className,
  url,
  text,
  imageSrc,
  name,
  handle,
  featured,
  // verified = true,
}: TestimonialItem) => {
  const missingUrl = !url || url === "#";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "w-full inline-block rounded-2xl",
        featured ? "shadow-xl" : "p-6",
        missingUrl
          ? "cursor-default pointer-events-none"
          : "cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors",
        className
      )}
      style={{ border: "1px solid var(--mantine-color-default-border)" }}
    >
      <figure className="m-0">
        <blockquote
          className={clsx(
            "text-gray-900 dark:text-gray-100 m-0",
            featured ? "p-6 text-lg font-semibold leading-7 tracking-tight sm:text-xl sm:leading-8" : ""
          )}
        >
          <p className="whitespace-pre-line mt-0">{`“${text}”`}</p>
        </blockquote>

        <figcaption
          className={clsx(
            "flex items-center gap-x-4",
            featured ? "flex-wrap gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap" : "mt-6"
          )}
        >
          <Image
            width={100}
            height={100}
            className="h-10 w-10 flex-none rounded-full bg-gray-50"
            src={imageSrc}
            alt=""
          />
          <div className="flex-auto">
            <div className="font-semibold flex gap-0.5 items-center">
              {name}
              {/* {verified && <DiscordLogoIcon className="flex-shrink-0 fill-blue-500 text-white w-4 h-4" />} */}
            </div>
            <div className="text-gray-600">{`${handle}`}</div>
          </div>
        </figcaption>
      </figure>
    </a>
  );
};
