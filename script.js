function startProcess(day) {

    const loadingDiv = document.getElementById("loading");
    const finalDiv = document.getElementById("finalResult");

    loadingDiv.innerHTML = "";
    finalDiv.innerHTML = "";

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
            finalDiv.innerHTML = 
                `✅ You selected <b>${day}</b>.<br><br>
                 🎉 You're right! Your IQ is higher than 99% of humanity.`;
        }
    }, 1000);
}