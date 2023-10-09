import BaseComponent, { BaseComponentProps } from "./BaseComponent";

const colors = ["#aabbcc"];

const variants = {
  default: "my-auto h-8 w-8 rounded-full",
  smallSquare: "my-auto h-10 w-10 rounded-lg",
  small: "my-auto h-8 w-8 rounded-full",
  medium: "my-auto h-14 w-14 rounded-full",
  large: "my-auto h-20 w-20 rounded-full",
  huge: "my-auto h-64 w-64 rounded-full",
};

const initialsVariants = {
  default: "text-sm text-slate-900",
  small: "text-sm text-slate-900",
  smallSquare: "text-sm text-slate-900",
  medium: "text-xl text-slate-900",
  large: "text-2xl text-slate-900",
  huge: "text-4xl text-slate-900",
};

interface AvatarProps extends BaseComponentProps<keyof typeof variants> {
  color?: string;
  avatar: string;
  initials?: string;
}

/** Avatar
 * Either displays a rounded image, or a circle with initials
 *
 * @param avatar {string} URL/ObjectURL/Base64 of avatar.
 * @param initials {string[]} initials of the user whose avatar you want to display. Used as fallback.
 * @return ReactNode
 */
export default function Avatar({
  initials,
  avatar,
  variant = "default",
  color,
  className = "",
  ...rest
}: AvatarProps) {
  if (!color && initials && !avatar) {
    const min = 130;
    const max = 394;

    const val =
      initials[0].charCodeAt(0) + initials[initials.length - 1].charCodeAt(0);

    color =
      colors[Math.round(((val - min) / (max - min)) * (colors.length - 1))];
  }

  return (
    <>
      {avatar && (
        <BaseComponent
          as="img"
          className={`${variants[variant] ?? variants["default"]} ${className}`}
          src={avatar}
          alt=""
          {...rest}
        />
      )}
      {!avatar && (
        <BaseComponent
          as="div"
          className={`flex ${
            variants[variant] ?? variants["default"]
          } ${className} ${color}`}
          {...rest}
        >
          <div className="m-auto flex flex-row">
            <p className={initialsVariants[variant]}>{initials?.[0]}</p>
            <p className={initialsVariants[variant]}>
              {initials?.[initials.length - 1]}
            </p>
          </div>
        </BaseComponent>
      )}
    </>
  );
}
