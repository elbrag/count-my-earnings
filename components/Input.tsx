interface InputProps {
	type?: string;
	placeholder?: string;
	label?: string;
	value?: string | number;
	name: string;
	onChange?: (e: any) => void;
}

const Input: React.FC<InputProps> = ({
	type = "number",
	placeholder,
	label,
	value,
	name,
	onChange,
}) => {
	return (
		<div>
			<label className="text-lg font-medium" htmlFor={name}>
				<p className="">{label && label}</p>
				<input
					type={type}
					placeholder={placeholder}
					name={name}
					value={value}
					onChange={onChange}
				/>
			</label>
		</div>
	);
};

export default Input;
