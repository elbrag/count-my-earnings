interface InputProps {
	type?: string;
	placeholder?: string;
	label?: string;
	value?: string | number;
	name: string;
	prefix?: string;
	suffix?: string;
	onChange?: (e: any) => void;
}

const Input: React.FC<InputProps> = ({
	type = "number",
	placeholder,
	label,
	value,
	name,
	prefix,
	suffix,
	onChange,
}) => {
	return (
		<div className="">
			<label className="text-lg font-medium" htmlFor={name}>
				<p className="">{label && label}</p>
				<div className="flex gap-2">
					{prefix && <span className="">{prefix}</span>}
					<input
						className={`text-black`}
						style={{
							maxWidth: `${value ? value?.toString()?.length * 16 + 10 : 48}px`,
						}}
						type={type}
						placeholder={placeholder}
						name={name}
						value={value}
						onChange={onChange}
					/>
					{suffix && <span className="">{suffix}</span>}
				</div>
			</label>
		</div>
	);
};

export default Input;
