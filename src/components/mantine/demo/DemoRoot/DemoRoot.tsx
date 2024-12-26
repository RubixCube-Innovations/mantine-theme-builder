import cx from "clsx";
import classes from "./DemoRoot.module.css";

export function DemoRoot({ className, ...others }: React.ComponentPropsWithoutRef<"div">) {
  return <div className={cx(classes.root, className)} {...others} />;
}
