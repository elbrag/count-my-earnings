import {
	getSalaryPerHourFromLS,
	updateSalaryPerHourInLS,
} from "@/hooks/salary";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

interface AppContextValue {
	salaryPerHour: number | undefined;
	updateSalaryPerHour: (salaryPerHour: number) => void;
}

export const AppContext = createContext<AppContextValue>({
	salaryPerHour: 0,
	updateSalaryPerHour: () => {},
});

const AppContextProvider = (props: PropsWithChildren) => {
	const [salaryPerHour, setSalaryPerHour] = useState<number | undefined>(
		undefined
	);

	/**
	 * Sync salaryPerHour state with current value in LocalStorage
	 */
	useEffect(() => {
		if (salaryPerHour === undefined) {
			const _salaryPerHour = getSalaryPerHourFromLS();
			setSalaryPerHour(_salaryPerHour);
		}
	}, [salaryPerHour]);

	/**
	 * Update salaryPerHour
	 * Both in LocalStorage and this context's state
	 */
	const updateSalaryPerHour = (_salaryPerHour: number) => {
		updateSalaryPerHourInLS(_salaryPerHour);
		setSalaryPerHour(_salaryPerHour);
	};

	return (
		<AppContext.Provider
			value={{ salaryPerHour, updateSalaryPerHour }}
			{...props}
		/>
	);
};

export default AppContextProvider;
