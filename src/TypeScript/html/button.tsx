import React from "react";

// wrapping
type ButtonProps = {
  variant: "secondary" | "primary";
  children: string;
  as: React.ElementType; // making this component Polymorphic:
} & Omit<React.ComponentProps<"button">, "children">;

const Button = ({ variant, children, as, ...rest }: ButtonProps) => {
  const Component = as || "button";
  return (
    <Component className={`${variant}-btn`} {...rest}>
      {children}
    </Component>
  );
};

export default Button;
