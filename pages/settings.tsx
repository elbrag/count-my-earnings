import Input from "@/components/Input";
import { AppContext } from "@/context/appContext";
import { useContext } from "react";

export default function Settings() {
	const { salaryPerHour, updateSalaryPerHour } = useContext(AppContext);
	const { startTime, updateStartTime } = useContext(AppContext);

	return (
		<div className="flex min-h-screen flex-col items-center justify-between p-8">
			<div>
				<div className="py-6">
					<h1 className="text-4xl lg:text-6xl">Inställningar</h1>
				</div>
				<div className="flex flex-col gap-6">
					<div>
						<Input
							name="salaryPerHour"
							label="Timlön"
							suffix="SEK"
							value={salaryPerHour}
							onChange={(e) => {
								updateSalaryPerHour(e.target.value);
							}}
						/>
					</div>
					<div>
						<Input
							type="time"
							name="startTime"
							label="Starttid"
							prefix="Kl"
							value={startTime}
							onChange={(e) => {
								updateStartTime(e.target.value);
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
