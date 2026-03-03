/* ---Seeded Code--- */

const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: [ {} ]
};

/* ---Seeded Code--- */ 

function runSequence(config, cycles) {
    if (config.phases.length === 0) {
    	console.log("No phase found");
    	return;
  	}
	for (let cycle = 1; cycle <= cycles; cycle++) {
		if(config.fault === true) {
            console.log("Faulted phase!");
			break;
		}
		for (let i = 0; i < config.phases.length; i++) {
			let { color, duration } = config.phases[i];
			if(duration <= 0) {
				console.log("Invalid phase detected");
				continue;
			}
			console.log(`Switching to ${color} for ${duration}s`);
		}
	}
}

function generateTimeline(config, cycles) {
	let timeLine = [];
	let currTime = 0;
	for (let cycle = 1; cycle <= cycles; cycle++) {
		for (let i = 0; i < config.phases.length; i++) {
			let {duration} = config.phases[i];
			currTime += duration;
			timeLine.push(currTime);
		}
	}
	return timeLine;
}
