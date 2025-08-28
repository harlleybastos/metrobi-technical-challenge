import React, { useState, useEffect, useRef } from "react";

// Question 6: Write the code that animates "Zeno's Paradox of Achilles and the Tortoise"

const ZenosParadox = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [step, setStep] = useState(0);
  const [achillesPos, setAchillesPos] = useState(0);
  const [tortoisePos, setTortoisePos] = useState(100);
  const [stepHistory, setStepHistory] = useState([]);
  const [speed, setSpeed] = useState(1000); // Animation speed in ms

  const intervalRef = useRef(null);
  const maxSteps = 12; // Limit steps to prevent infinite animation

  // Initial positions and speeds
  const initialAchillesPos = 0;
  const initialTortoisePos = 100;
  const achillesSpeed = 10; // Achilles is 10x faster
  const tortoiseSpeed = 1;

  const resetAnimation = () => {
    setIsRunning(false);
    setStep(0);
    setAchillesPos(initialAchillesPos);
    setTortoisePos(initialTortoisePos);
    setStepHistory([]);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const calculateNextPositions = (
    currentStep,
    currentAchilles,
    currentTortoise
  ) => {
    // Time for Achilles to reach tortoise's current position
    const timeToReach = (currentTortoise - currentAchilles) / achillesSpeed;

    // New positions after this time
    const newAchillesPos = currentTortoise; // Achilles reaches where tortoise was
    const newTortoisePos = currentTortoise + tortoiseSpeed * timeToReach;

    return {
      timeToReach: timeToReach.toFixed(4),
      newAchillesPos: newAchillesPos.toFixed(2),
      newTortoisePos: newTortoisePos.toFixed(2),
      distance: (newTortoisePos - newAchillesPos).toFixed(2),
    };
  };

  const runStep = () => {
    setStep((currentStep) => {
      if (currentStep >= maxSteps) {
        setIsRunning(false);
        return currentStep;
      }

      const currentAchilles = parseFloat(achillesPos);
      const currentTortoise = parseFloat(tortoisePos);

      const nextStep = calculateNextPositions(
        currentStep,
        currentAchilles,
        currentTortoise
      );

      // Update positions
      setAchillesPos(parseFloat(nextStep.newAchillesPos));
      setTortoisePos(parseFloat(nextStep.newTortoisePos));

      // Add to history
      setStepHistory((prev) => [
        ...prev,
        {
          step: currentStep + 1,
          timeToReach: nextStep.timeToReach,
          achillesStart: currentAchilles.toFixed(2),
          achillesEnd: nextStep.newAchillesPos,
          tortoiseStart: currentTortoise.toFixed(2),
          tortoiseEnd: nextStep.newTortoisePos,
          remainingDistance: nextStep.distance,
        },
      ]);

      return currentStep + 1;
    });
  };

  const startAnimation = () => {
    if (step >= maxSteps) resetAnimation();
    setIsRunning(true);
  };

  const stopAnimation = () => {
    setIsRunning(false);
  };

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        runStep();
      }, speed);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, speed, achillesPos, tortoisePos, step]);

  // Calculate track width and positions for visualization
  const trackWidth = 600;
  const maxPosition = Math.max(tortoisePos + 50, 200);
  const achillesPixelPos = (achillesPos / maxPosition) * trackWidth;
  const tortoisePixelPos = (tortoisePos / maxPosition) * trackWidth;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-4">
        Zeno's Paradox: Achilles and the Tortoise
      </h1>

      {/* Explanation */}
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-2">The Paradox:</h2>
        <p className="text-sm text-gray-700">
          Achilles (10x faster) chases a tortoise with a 100-unit head start.
          According to Zeno's paradox, every time Achilles reaches where the
          tortoise was, the tortoise has moved further ahead. Theoretically,
          this creates infinite steps, suggesting Achilles can never catch the
          tortoise!
        </p>
      </div>

      {/* Animation Track */}
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h3 className="text-lg font-semibold mb-4">Race Track</h3>

        {/* Track */}
        <div
          className="relative bg-green-200 h-20 rounded-lg mb-4"
          style={{ width: trackWidth }}
        >
          {/* Finish line markers */}
          {[0, 100, 200, 300, 400, 500].map((pos) => (
            <div
              key={pos}
              className="absolute top-0 bottom-0 border-l border-gray-400 text-xs"
              style={{ left: `${(pos / maxPosition) * trackWidth}px` }}
            >
              <span className="absolute -top-6 -ml-2 text-gray-600">{pos}</span>
            </div>
          ))}

          {/* Achilles */}
          <div
            className="absolute top-2 transition-all duration-1000 ease-linear"
            style={{
              left: `${achillesPixelPos}px`,
              transform: "translateX(-50%)",
            }}
          >
            <div className="bg-red-500 text-white p-2 rounded text-xs font-bold">
              🏃‍♂️ A
            </div>
            <div className="text-xs text-center mt-1">
              {achillesPos.toFixed(1)}
            </div>
          </div>

          {/* Tortoise */}
          <div
            className="absolute bottom-2 transition-all duration-1000 ease-linear"
            style={{
              left: `${tortoisePixelPos}px`,
              transform: "translateX(-50%)",
            }}
          >
            <div className="bg-green-600 text-white p-2 rounded text-xs font-bold">
              🐢 T
            </div>
            <div className="text-xs text-center mt-1">
              {tortoisePos.toFixed(1)}
            </div>
          </div>
        </div>

        {/* Current Status */}
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <div className="font-semibold">Step</div>
            <div className="text-lg">{step}</div>
          </div>
          <div className="text-center">
            <div className="font-semibold">Distance Apart</div>
            <div className="text-lg">
              {(tortoisePos - achillesPos).toFixed(2)}
            </div>
          </div>
          <div className="text-center">
            <div className="font-semibold">Speed Ratio</div>
            <div className="text-lg">10:1</div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="bg-white p-4 rounded-lg shadow-lg mb-6">
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <button
            onClick={startAnimation}
            disabled={isRunning}
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {step === 0 ? "Start Race" : "Continue"}
          </button>
          <button
            onClick={stopAnimation}
            disabled={!isRunning}
            className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-gray-400"
          >
            Pause
          </button>
          <button
            onClick={resetAnimation}
            className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Reset
          </button>
          <button
            onClick={runStep}
            disabled={isRunning || step >= maxSteps}
            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-400"
          >
            Next Step
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-4">
          <label className="text-sm">Animation Speed:</label>
          <input
            type="range"
            min="200"
            max="2000"
            value={speed}
            onChange={(e) => setSpeed(parseInt(e.target.value))}
            className="w-32"
          />
          <span className="text-sm">{speed}ms</span>
        </div>
      </div>

      {/* Step History */}
      {stepHistory.length > 0 && (
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Step-by-Step Analysis</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2">Step</th>
                  <th className="p-2">Time to Reach</th>
                  <th className="p-2">Achilles: Start → End</th>
                  <th className="p-2">Tortoise: Start → End</th>
                  <th className="p-2">Remaining Gap</th>
                </tr>
              </thead>
              <tbody>
                {stepHistory.map((entry, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : ""}
                  >
                    <td className="p-2 text-center">{entry.step}</td>
                    <td className="p-2 text-center">{entry.timeToReach}s</td>
                    <td className="p-2 text-center">
                      {entry.achillesStart} → {entry.achillesEnd}
                    </td>
                    <td className="p-2 text-center">
                      {entry.tortoiseStart} → {entry.tortoiseEnd}
                    </td>
                    <td className="p-2 text-center font-bold">
                      {entry.remainingDistance}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {step >= maxSteps && (
            <div className="mt-4 p-4 bg-yellow-50 rounded">
              <p className="text-sm text-gray-700">
                <strong>The Resolution:</strong> While Zeno's paradox suggests
                infinite steps, in reality, the infinite series converges.
                Achilles catches the tortoise after exactly{" "}
                <strong>
                  {(
                    initialTortoisePos /
                    (achillesSpeed - tortoiseSpeed)
                  ).toFixed(2)}{" "}
                  time units
                </strong>{" "}
                at position{" "}
                <strong>
                  {(
                    (initialTortoisePos * achillesSpeed) /
                    (achillesSpeed - tortoiseSpeed)
                  ).toFixed(2)}
                </strong>
                . The mathematical series: 100 + 10 + 1 + 0.1 + 0.01 + ... =
                111.11...
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ZenosParadox;
