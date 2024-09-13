const projectStatus = Object.freeze({
  PENDING: Symbol("Pending Execution"),
  SUCCESS: Symbol("Executed Successfully"),
  FAILURE: Symbol("Execution Failed"),
});

class ProjectIdea {
  constructor(title, description, status) {
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }

  updateProjectStatus(newStatus) {
    this.status = newStatus;
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(newIdea) {
    this.ideas.push(newIdea);
  }

  unpin(idea) {
    this.ideas.splice(this.ideas.indexOf(idea), 1);
  }

  count() {
    return this.ideas.length;
  }

  toString() {
    let representation = `${this.title} has ${this.count()} idea${this.count() > 1 ? "s" : ""} ->\n`;

    this.ideas.forEach(
      (idea) =>
        (representation += `${idea.title} (${idea.status.description}) - ${idea.description}\n`),
    );
    return representation;
  }
}

let windowLocks = new ProjectIdea(
  "Smart Window Locks",
  "An automation project allowing users to lock, unlock windows automatically based on weather conditions.",
);

let breakfastChef = new ProjectIdea(
  "Breakfast Chef Robot",
  "A robot that can follow a given list of instructions and prepare breakfast for the user and let them know through their phone.",
);
breakfastChef.updateProjectStatus(projectStatus.FAILURE);

let usedVideoGamesStore = new ProjectIdea(
  "Online Used Video Games Store",
  "An online platform where users can buy second hand physical copies of video games from other users.",
);
usedVideoGamesStore.updateProjectStatus(projectStatus.SUCCESS);

let hardwareProjectIdeas = new ProjectIdeaBoard("Hardware Project Board");
hardwareProjectIdeas.pin(windowLocks);
hardwareProjectIdeas.pin(breakfastChef);

let softwareProjectIdeas = new ProjectIdeaBoard("Software Project Board");
softwareProjectIdeas.pin(usedVideoGamesStore);

console.log(softwareProjectIdeas.toString());

console.log(hardwareProjectIdeas.toString());
hardwareProjectIdeas.unpin(breakfastChef);
console.log(hardwareProjectIdeas.toString());
