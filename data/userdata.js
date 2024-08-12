// named export (single)
export const userData = [
    {
        firstname: "Max",
        lastname: "Mustermann",
    }
]

const userData2 = [
    {
        firstname: "Susi",
        lastname: "Sorglos"
    }
]

const userData3 = [
    {
        firstname: "Gundula",
        lastname: "Gause"
    }
]

// named export (collection)
export { userData2, userData3 }

const userData4 = {
    firstname: "Klaus",
    lastname: "Kleber"
}

// default export
export default userData4