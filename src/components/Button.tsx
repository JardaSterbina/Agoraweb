export type ButtonProps = {
  href: string;
  text: string;
  centered?: boolean;
  dark?: boolean;
  topMargin?: number;
};

export default function Button(
  { href, text, centered = true, dark = false, topMargin = 0 }: ButtonProps
) {
  return (
    <a
      href={href}
      className={`btn ${dark ? "btn--dark" : ""} ${centered ? "mx-auto" : ""} mt-[${topMargin}rem]`}
    >
      {text}
    </a>
  );
}
