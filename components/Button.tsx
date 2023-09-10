interface ButtonProps {
	children: string | JSX.Element | JSX.Element[];
	onClick: () => void;
	bgColor?: string;
	textColor?: string;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	bgColor = "pink-700",
	textColor = "white",
	className,
}) => {
	return (
		<button
			className={`flex gap-2 rounded-md py-2 px-5 items-center bg-${bgColor} text-${textColor} ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
