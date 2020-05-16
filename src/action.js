export function createSet(payload){
    return {
        type:'set',
        payload,
    };
}

export function createAdd(payload){
    return (dispatch,state)=>{
        const {todos} = state;
        
    }
}

export function createRemove(payload){
    return {
        type:'remove',
        payload,
    };
}

export function createToggle(payload){
    return {
        type:'toggle',
        payload,
    };
}