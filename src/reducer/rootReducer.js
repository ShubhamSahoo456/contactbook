let initial=[
    
];

const rootReducer =(state = initial ,action)=>{
    switch(action.type){
        case "ADD_CONTACT" : 
            state=[...state, action.payload];
            return state;
        
        case "UPDATE_CONTACT":
            const updateState= state.map((contact)=>contact.id===action.payload.id?action.payload:contact);
            state=updateState;
            return state;

        case "DELETE_CONTACT":
            const deleteItem=state.filter((contact)=>{const item=contact.id !== action.payload; return item});
            state=deleteItem;
            return state;
              

        default : return state;
    }
}

export default rootReducer;