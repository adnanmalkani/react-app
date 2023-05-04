interface Props {
  children: string;
  onClick: () => void;
}

function Button({ children }: Props) {
  return <button className="btn-primary">{children}</button>;
}

export default Button;
