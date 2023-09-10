import StartTimeButton from "@/components/StartTimeButton";
import { AppContext } from "@/context/appContext";
import { useContext } from "react";

export default function Index() {
	const { salaryPerHour, startTime } = useContext(AppContext);

	const updateStartTimeToNow = () => {};

	return (
		<div className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="flex flex-col gap-6">
				<div className="flex gap-6">Min timlön: {salaryPerHour}</div>
				{startTime ? (
					<div className="flex gap-6">Starttid: {startTime}</div>
				) : (
					<div>
						<StartTimeButton onClick={() => updateStartTimeToNow} />
					</div>
				)}
			</div>
		</div>
	);
}
