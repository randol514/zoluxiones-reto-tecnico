import styles from "./button.module.sass";

const Button = ({
  tag = "a",
  type,
  href,
  status,
  variant,
  children,
  disabled,
  onClick,
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${status ? styles.loading : ""}`;
  const Tag = tag;

  switch (Tag) {
    case "button":
      return (
        <Tag
          className={buttonClass}
          type={type}
          disabled={disabled}
          onClick={onClick}
        >
          {children}
        </Tag>
      );
    default:
      return (
        <Tag className={buttonClass} href={href} onClick={onClick}>
          {children}
        </Tag>
      );
  }
};

export default Button;
