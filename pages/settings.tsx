import Input from "@/components/Input";
import { AppContext } from "@/context/appContext";
import { useContext } from "react";

export default function Settings() {
	const { salaryPerHour, updateSalaryPerHour } = useContext(AppContext);

	return (
		<div className="flex min-h-screen flex-col items-center justify-between p-8 text-black">
			Settings
			<div>
				<Input
					name="salaryPerHour"
					label="Timlön"
					value={salaryPerHour}
					onChange={(e) => {
						updateSalaryPerHour(e.target.value);
					}}
				/>
			</div>
		</div>
	);
}
