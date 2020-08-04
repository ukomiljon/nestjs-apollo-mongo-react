

interface reactBI {
    datasources: any[]
}

const initReactBI: reactBI = {
    datasources: []
}

export default function reducer(state = initReactBI, action: any) {

    if (action.type == 'ADD_DATASOURCE') {
        console.log("ADD_DATASOURCE", action.datasource)
        return {
            ...state,
            datasources: [...state.datasources, action.datasource],
        }
    }
 
    return state
}