"use strict";
// Utility Types
const updateAssignment = (assign, propsToUpdate) => {
    return { ...assign, ...propsToUpdate };
};
const assign1 = {
    studentId: "aa",
    title: "b",
    grade: 0
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
// Required and Readonly
const recordAssignment = (assign) => {
    // send to database, etc.
    return assign;
};
const assignVerifier = { ...assignGraded, verified: true };
recordAssignment({ ...assignGraded, verified: true });
// Record
const hexColorMap = {
    red: "11",
    green: "22",
    blue: "33"
};
const finalGrades = {
    Sara: "B",
    Kelly: "U"
};
const gradeData = {
    Sara: { assign1: 8, assign2: 9 },
    Kelly: { assign1: 1, assign2: 12 }
};
const score = {
    studentId: "k123",
    grade: 85
};
const preview = {
    studentId: "k123",
    title: "Final Project"
};
// ReturnType
//type newAssign = {title: string, points: number}
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
};
fetchUsers().then(users => console.log(users));
