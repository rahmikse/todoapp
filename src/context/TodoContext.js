import React, {createContext,useReducer,useContext} from "react";

export const TodoLayerContext = createContext();

export const TodoLayer = ({initialState,reducer,children}) =>(
    <TodoLayerContext.Provider value={useReducer(reducer,initialState)}>
    {children}
    </TodoLayerContext.Provider>
)
export const useTodoLayerValue = ()=> useContext(TodoLayerContext)