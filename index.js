document.addEventListener('DOMContentLoaded', function() {
    function updateTimeAndDay() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'long' })

        document.querySelector('[data-testid="currentTimeUTC"]').textContent = utcTime
        document.querySelector('[data-testid="currentDay"]').textContent = dayOfWeek
    }

    updateTimeAndDay()
    setInterval(updateTimeAndDay, 1000)
})
