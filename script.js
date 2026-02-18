function startProcess(selectedDay) {

    const loadingDiv = document.getElementById("loading");
    const finalDiv = document.getElementById("finalResult");

    loadingDiv.innerHTML = "";
    finalDiv.innerHTML = "";

    // Get today's real day
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();
    const actualDay = days[today];

    const steps = [
        "🔍 Consulting Elon Musk...",
        "🛰 Contacting NASA satellites...",
        "🧬 Running DNA analysis...",
        "🔭 Connecting to Hubble telescope...",
        "📡 Finalizing prediction..."
    ];

    let i = 0;

    const interval = setInterval(() => {
        if (i < steps.length) {
            loadingDiv.innerHTML += steps[i] + "<br>";
            i++;
        } else {
            clearInterval(interval);

            if (selectedDay === actualDay) {
                finalDiv.innerHTML = 
                `✅ You selected <b>${selectedDay}</b>.<br><br>
                🎉 You're right! Your IQ is higher than 99% of humanity.`;
            } else {
                finalDiv.innerHTML = 
                `❌ You selected <b>${selectedDay}</b>.<br><br>
                🤡 Incorrect! Today is <b>${actualDay}</b>.<br>
                Oops! Today is <b>${actualDay}</b>.
Better luck next time, genius in progress!`;
            }
        }
    }, 1000);
}
