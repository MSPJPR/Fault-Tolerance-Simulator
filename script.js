// Simulate fault handling
document.getElementById("simulate-btn").addEventListener("click", function () {
  const errorType = document.getElementById("error-type").value;
  let output = "";

  if (errorType === "transient") {
    output = "Simulated a Transient Fault. Apply Error Correcting Codes.";
  } else if (errorType === "permanent") {
    output = "Simulated a Permanent Fault. Apply Redundancy Techniques.";
  }

  document.getElementById("output").innerText = output;
});

// Calculate fault tolerance metrics
document.getElementById("calculate-metrics").addEventListener("click", function () {
  const mttr = parseFloat(document.getElementById("mttr").value);
  const mtbf = parseFloat(document.getElementById("mtbf").value);
  let metricsOutput = "";

  if (isNaN(mttr) || isNaN(mtbf) || mttr <= 0 || mtbf <= 0) {
    metricsOutput = "Please enter valid positive numbers for MTTR and MTBF.";
  } else {
    const availability = (mtbf / (mtbf + mttr)) * 100;
    metricsOutput = `Calculated Metrics:
    \nAvailability: ${availability.toFixed(2)}%
    \nMTBF: ${mtbf} hours
    \nMTTR: ${mttr} hours`;
  }

  document.getElementById("metrics-output").innerText = metricsOutput;
});
