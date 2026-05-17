//this data will be fetched from CDN
const fs = require("fs");
const data = fs.readFileSync("data.json", "utf8");
const rawData = JSON.parse(data);
// console.log(rawData);

function normalizeDirectory(rawData) {
    // Lookup tables
    const departmentsById = {};
    const programsById = {};
    const instructorsById = {};
    const instructorsByEmail = {};

    // Convert object into iterable array
    const departmentEntries = Object.entries(rawData);

    departmentEntries.forEach(([departmentName, departmentData], index) => {
        // Generate department ID
        const departmentId = departmentData.Dept_code || `dept-${index + 1}`;

        // Store department
        departmentsById[departmentId] = {
            id: departmentId,
            name: departmentName,
            programIds: [],
        };

        // Loop through programs
        departmentData.programs.forEach((program) => {
            programsById[program.id] = {
                ...program,
                departmentId,
            };

            departmentsById[departmentId].programIds.push(program.id);

            // Normalize instructors
            program.instructors.forEach((instructor) => {
                instructorsById[instructor.id] = {
                    ...instructor,
                    programId: program.id,
                    departmentId,
                };

                // Create fast email lookup
                if (instructor.email) {
                    instructorsByEmail[instructor.email] = instructor.id;
                }
            });
        });
    });

    return {
        departmentsById,
        programsById,
        instructorsById,
        instructorsByEmail,
    };
}

const normalizedData = normalizeDirectory(rawData);
// console.log(normalizedData);



function getInstructorByEmail(email, normalizedData) {

    const instructorId =
        normalizedData.instructorsByEmail[email];

    if (!instructorId) {
        return "Instructor not found";
    }

    const instructor =
        normalizedData.instructorsById[instructorId];

    const department =
        normalizedData.departmentsById[
        instructor?.departmentId
        ];

    return {
        name: instructor?.name ?? "Unknown Instructor",

        officeHours:
            instructor?.officeHours ??
            "Not Available",

        department:
            department?.name ??
            "Unknown Department"
    };
}

// console.log(
//     getInstructorByEmail(
//         "dmitri@edu.com",
//         normalizedData
//     )
// );


function listRoomsByBuilding(buildingCode, normalizedData) {

    return Object.values(normalizedData.programsById)

        .filter(program =>
            program.buildingCode === buildingCode
        )

        .map(program => program.room)

        .filter(room => room != null)

        .sort((a, b) => a.localeCompare(b, undefined, {
            numeric: true
        }));
}

// List rooms
// console.log(
//     listRoomsByBuilding(
//         "CSE",
//         normalizedData
//     )
// );


function renderDirectorySummary(normalizedData) {

    const departments =
        Object.keys(normalizedData.departmentsById).length;

    const programs =
        Object.keys(normalizedData.programsById).length;

    const instructors =
        Object.keys(normalizedData.instructorsById).length;

    const missingOfficeHours =
        Object.values(normalizedData.instructorsById)
            .filter(instructor =>
                instructor.officeHours == null
            ).length;

    const programsWithoutRooms =
        Object.values(normalizedData.programsById)
            .filter(program =>
                program.room == null
            ).length;

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

console.log(
    renderDirectorySummary(
        normalizedData
    )
);