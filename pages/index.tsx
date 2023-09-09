import { AppContext } from "@/context/appContext";
import { useContext, useEffect, useState } from "react";

export default function Index() {
	const { salaryPerHour, updateSalaryPerHour } = useContext(AppContext);

	return (
		<div className="flex min-h-screen flex-col items-center justify-between p-24">
			<div>{salaryPerHour}</div>
		</div>
	);
}
