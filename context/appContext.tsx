import {
	getSalaryPerHourFromLS,
	updateSalaryPerHourInLS,
} from "@/hooks/salary";
import { getStartTimeFromLS, updateStartTimeInLS } from "@/hooks/time";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

interface AppContextValue {
	salaryPerHour: number | undefined;
	updateSalaryPerHour: (salaryPerHour: number) => void;
	startTime: string | undefined;
	updateStartTime: (startTime: string) => void;
}

export const AppContext = createContext<AppContextValue>({
	salaryPerHour: undefined,
	updateSalaryPerHour: () => {},
	startTime: undefined,
	updateStartTime: () => {},
});

const AppContextProvider = (props: PropsWithChildren) => {
	const [salaryPerHour, setSalaryPerHour] = useState<number | undefined>(
		undefined
	);
	const [startTime, setStartTime] = useState<string | undefined>(undefined);

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
	 * Sync startTime state with current value in LocalStorage
	 */
	useEffect(() => {
		if (startTime === undefined) {
			const _startTime = getStartTimeFromLS();
			setStartTime(_startTime);
		}
	}, [startTime]);

	/**
	 * Update salaryPerHour
	 * Both in LocalStorage and this context's state
	 */
	const updateSalaryPerHour = (_salaryPerHour: number) => {
		updateSalaryPerHourInLS(_salaryPerHour);
		setSalaryPerHour(_salaryPerHour);
	};

	/**
	 * Update startTime
	 */
	const updateStartTime = (_startTime: string) => {
		updateStartTimeInLS(_startTime);
		setStartTime(_startTime);
	};

	return (
		<AppContext.Provider
			value={{ salaryPerHour, updateSalaryPerHour, startTime, updateStartTime }}
			{...props}
		/>
	);
};

export default AppContextProvider;
