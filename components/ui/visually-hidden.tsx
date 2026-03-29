import * as React from "react";

const VisuallyHidden = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ ...props }, ref) => (
  <span
    ref={ref}
    className="absolute h-px w-px overflow-hidden whitespace-nowrap border-0 p-0"
    style={{ clip: "rect(0 0 0 0)", clipPath: "inset(50%)", margin: "-1px" }}
    {...props}
  />
));
VisuallyHidden.displayName = "VisuallyHidden";

export { VisuallyHidden };
