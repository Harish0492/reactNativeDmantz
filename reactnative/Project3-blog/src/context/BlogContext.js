import createDataContext from "./createDataContext";


const BlogReducer=(state,action)=>{
    switch (action.type){
        case "add_Blog post":
            return [...state, { title: 'Blog post #${ state.length + 1}' }];
            default:
            return state;
    }

};
const addBlogPost=dispatch=>{
    return()=>{
        dispatch({type:"add_Blog post"});
    };
    
};
export const {Context,Provider}=createDataContext(
    BlogReducer,
    {addBlogPost},
    []
    ); 
    