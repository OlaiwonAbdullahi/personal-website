const SELECTORS = {
	CURRENT_TIME: `[data-testid="currentTimeUTC"]`,
	CURRENT_DAY: `[data-testid="currentDay"]`
}
const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const INTERVAL = 1000

/** @type {number} */
let timerId;

const updateInfo = () => {
	const currentDate = new Date()
	const currentTime = currentDate.toUTCString();
	const currentDay = currentDate.getDay();
	document.querySelector(SELECTORS.CURRENT_TIME).textContent = currentTime;
	document.querySelector(SELECTORS.CURRENT_DAY).textContent = DAYS[currentDay];
}


const run = () => {
	timerId = setInterval(updateInfo, INTERVAL)
}

run()
