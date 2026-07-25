// global rawData
let rawData;

// global normalizedData
let normalizedData;

const url =
    "https://cdn.freecodecamp.org/curriculum/workshop-smart-campus-directory/data.json";

async function loadData() {
    const response = await fetch(url);
    rawData = await response.json(); // assign globally
    console.log(rawData);

    normalizedData = normalizeDirectory(rawData); // assign globally

    // Anything that depends on normalizedData runs here, after it's ready
    console.log(renderDirectorySummary(normalizedData));
}

loadData();

function normalizeDirectory(rawData) {
    // Lookup tables
    const departmentsById = {};
    const programsById = {};
    const instructorsById = {};
    const instructorsByEmail = {};

    // Convert object into iterable array
    const departmentEntries = Object.entries(rawData);

    for (let i = 0; i < departmentEntries.length; i++) {
        const [departmentName, departmentData] = departmentEntries[i];
        const index = i;
        // Generate department ID
        const departmentId = departmentData.Dept_code || `dept-${index + 1}`;

        // Store department
        departmentsById[departmentId] = {
            id: departmentId,
            name: departmentName,
            programIds: [],
        };

        // Loop through programs - using for loop
        for (let j = 0; j < departmentData.programs.length; j++) {
            const program = departmentData.programs[j];
            programsById[program.id] = {
                ...program,
                departmentId,
            };

            departmentsById[departmentId].programIds.push(program.id);

            // Normalize instructors - using for loop
            for (let k = 0; k < program.instructors.length; k++) {
                const instructor = program.instructors[k];
                instructorsById[instructor.id] = {
                    ...instructor,
                    programId: program.id,
                    departmentId,
                };

                // Create fast email lookup
                if (instructor.email) {
                    instructorsByEmail[instructor.email] = instructor.id;
                }
            }
        }
    }

    return {
        departmentsById,
        programsById,
        instructorsById,
        instructorsByEmail,
    };
}

function getInstructorByEmail(email, normalizedData) {
    const instructorId = normalizedData.instructorsByEmail[email];

    if (!instructorId) {
        return "Instructor not found";
    }

    const instructor = normalizedData.instructorsById[instructorId];

    const department = normalizedData.departmentsById[instructor?.departmentId];

    return {
        name: instructor?.name ?? "Unknown Instructor",

        officeHours: instructor?.officeHours ?? "Not Available",

        department: department?.name ?? "Unknown Department",
    };
}

// console.log(
//     getInstructorByEmail(
//         "dmitri@edu.com",
//         normalizedData
//     )
// );

function listRoomsByBuilding(buildingCode, normalizedData) {
    const programValues = Object.values(normalizedData.programsById);
    const filteredPrograms = [];

    for (let i = 0; i < programValues.length; i++) {
        const program = programValues[i];
        if (program.buildingCode === buildingCode) {
            filteredPrograms.push(program);
        }
    }

    const rooms = [];
    for (let i = 0; i < filteredPrograms.length; i++) {
        rooms.push(filteredPrograms[i].room);
    }

    const validRooms = [];
    for (let i = 0; i < rooms.length; i++) {
        if (rooms[i] != null) {
            validRooms.push(rooms[i]);
        }
    }

    // Sorting validRooms
    validRooms.sort();

    return validRooms;
}

// List rooms
// console.log(
//     listRoomsByBuilding(
//         "CSE",
//         normalizedData
//     )
// );

function renderDirectorySummary(normalizedData) {
    const departmentKeys = Object.keys(normalizedData.departmentsById);
    const departments = departmentKeys.length;

    const programKeys = Object.keys(normalizedData.programsById);
    const programs = programKeys.length;

    const instructorKeys = Object.keys(normalizedData.instructorsById);
    const instructors = instructorKeys.length;

    const instructorValues = Object.values(normalizedData.instructorsById);
    let missingOfficeHours = 0;
    for (let i = 0; i < instructorValues.length; i++) {
        if (instructorValues[i].officeHours == null) {
            missingOfficeHours++;
        }
    }

    const programValues = Object.values(normalizedData.programsById);
    let programsWithoutRooms = 0;
    for (let i = 0; i < programValues.length; i++) {
        if (programValues[i].room == null) {
            programsWithoutRooms++;
        }
    }

    return `
Campus Directory Summary
------------------------
Departments: ${departments}
Programs: ${programs}
Instructors: ${instructors}
Missing Office Hours: ${missingOfficeHours}
Programs Without Rooms: ${programsWithoutRooms}
`;
}
