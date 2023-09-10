/**
 * Get start time
 */
export const getStartTimeFromLS = () => {
	if (document) {
		const startTime = localStorage.getItem("startTime");
		if (startTime) return JSON.parse(startTime);
	}
	return 0;
};

/**
 * Update start time
 */
export const updateStartTimeInLS = (_startTime: string) => {
	localStorage.setItem("startTime", JSON.stringify(_startTime));
};
