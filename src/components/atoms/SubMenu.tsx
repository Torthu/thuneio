"use client";
import { useState, useEffect, useCallback } from "react";
import BaseComponent, { BaseComponentProps } from "./BaseComponent";

interface SubmenuProps extends BaseComponentProps {
  ToggleButton: React.ComponentType<BaseComponentProps>;
}

/** SubMenu
 * Simple component for displaying a "pop-up" menu.
 *
 */
export default function SubMenu({
  as = "div",
  className = "",
  ToggleButton,
  children,
  ...rest
}: SubmenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(
    () => setIsOpen(!isOpen),
    [isOpen, setIsOpen]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", handleClick);
    }
    return () => window.removeEventListener("click", handleClick);
  }, [handleClick, isOpen]);

  return (
    <BaseComponent
      as={as}
      className={`relative ${className}`}
      onClick={(e) => e.stopPropagation()}
      {...rest}
    >
      <ToggleButton onClick={() => setIsOpen(!isOpen)} />

      {isOpen && <div className="z-2 absolute right-0">{children}</div>}
    </BaseComponent>
  );
}
