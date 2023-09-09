/**
 * Get Salary per hour
 */
export const getSalaryPerHourFromLS = () => {
	if (document) {
		const salaryPerHour = localStorage.getItem("salaryPerHour");
		if (salaryPerHour) return JSON.parse(salaryPerHour);
	}
	return 0;
};

/**
 * Update Salary per hour
 */
export const updateSalaryPerHourInLS = (_salaryPerHour: number) => {
	localStorage.setItem("salaryPerHour", JSON.stringify(_salaryPerHour));
};
