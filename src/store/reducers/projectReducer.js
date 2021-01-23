const initState = {
    projects: [
        {id:1, title: "first", content: "content of the first"},
        {id:2, title: "second", content: "content of the second"},
        {id:2, title: "third", content: "content of the third"}
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer