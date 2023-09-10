import { FaClock } from "react-icons/fa";
import Button from "./Button";

interface StartTimeButtonProps {
	onClick: () => void;
}

const StartTimeButton: React.FC<StartTimeButtonProps> = ({ onClick }) => {
	return (
		<div>
			<Button className="flex gap-2" onClick={onClick}>
				<>
					Starta tiden <FaClock />
				</>
			</Button>
		</div>
	);
};

export default StartTimeButton;
