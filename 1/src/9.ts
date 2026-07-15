// Utility Types

// Partial

interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?:boolean
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {...assign, ...propsToUpdate}
}

const assign1: Assignment = {
    studentId: "aa",
    title: "b",
    grade: 0
}


console.log(updateAssignment(assign1, {grade: 95}))
const assignGraded: Assignment = updateAssignment(assign1, {grade: 95});

// Required and Readonly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database, etc.
    return assign
}

const assignVerifier: Readonly<Assignment> = { ...assignGraded, verified: true }


recordAssignment({...assignGraded, verified: true});

// Record

const hexColorMap: Record<string, string> = {
    red: "11",
    green: "22",
    blue: "33"
}

type Students = "Sara" | "Kelly"
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "B",
    Kelly: "U"
}

interface Grades {
    assign1: number,
    assign2: number,
}

const gradeData: Record<Students, Grades> = {
    Sara: {assign1: 8, assign2:9},
    Kelly:{assign1:1, assign2:12}
}

// Pick and Omit
type AssignResult = Pick<Assignment, "studentId" | "grade">

const score: AssignResult = {
    studentId: "k123",
    grade: 85
}

type AssignPreview = Omit<Assignment, "grade" | "verified">

const preview: AssignPreview = {
    studentId: "k123",
    title: "Final Project"
}


// Exclude and Extract

type adjustedGrade = Exclude<LetterGrades, "U">
type highGrades = Extract<LetterGrades, "A" | "B">


// Nonnullable

type allPossibleGrades = 'Dave' | 'John' | null | undefined

type NamesOnly = NonNullable<allPossibleGrades>


// ReturnType

//type newAssign = {title: string, points: number}

const createNewAssign = (title:string, points: number)  => {
    return {title, points}
}

type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types", 100)
console.log(tsAssign)


// Parameters
type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ["Generics", 100]

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)


// Awaited - helps us with the ReturnType of a Promise
interface User {
    id:number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> =>{
    const data = await fetch (
        'https://jsonplaceholder.typicode.com/users'
    ).then (res => {
        return res.json()
    }).catch(err => {
        if(err instanceof Error) console.log(err.message)
    })
    return data
}

type FetchUsersReturnType =Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(users => console.log(users))