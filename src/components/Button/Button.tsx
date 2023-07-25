import './Button.css';

interface ButtonProps {
  type: any;
  text: string;
  theme: string;
  onClick?: () => void;
}

const Button = ({ type, text, theme, onClick }: ButtonProps) => {
  return (
    <button
      className={`button-main ${theme}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
