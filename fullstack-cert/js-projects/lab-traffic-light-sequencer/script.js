function runSequence(config, cycles){
    if (config.phases.length === 0) {
    	console.log("No phases found.");
    	return;
  	}
	for (let cycle = 1; cycle <= cycles; cycle++){
		if(config.fault === true){
			break;
		}
		for (let i = 0; i < config.phases.length; i++){
			let { color, duration } = config.phases[i];
			if(duration <= 0){
				console.log("Invalid phase detected");
				continue;
			}
			console.log(`Switching to ${color} for ${duration}s`);
		}
	}
}

function generateTimeline(config, cycles){
	let timeLine = [];
	let currTime = 0;
	for (let cycle = 1; cycle <= cycles; cycle++){
		for (let i = 0; i < config.phases.length; i++){
			let {duration} = config.phases[i];
			currTime += duration;
			timeLine.push(currTime);
		}
	}
	return timeLine;
}