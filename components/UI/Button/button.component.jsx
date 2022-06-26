export const Button = ({ text, children, ...otherProps }) => {
  return (
    <button {...otherProps}>
      {children}
      {text}
    </button>
  );
};
