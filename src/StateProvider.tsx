// import React, {
//   createContext,
//   useContext,
//   useReducer,
//   ReactNode,
//   Dispatch,
// } from "react";

// // Prepares the data layer
// interface StateContextValue {
//   basket: any;
//   user: any;
// }

// const StateContext = createContext<
//   [StateContextValue, Dispatch<any>] | undefined
// >(undefined);

// // Wrap our app and provide the Data Layer
// interface StateProviderProps {
//   reducer: React.Reducer<StateContextValue, any>;
//   initialState: StateContextValue;
//   children: ReactNode;
// }

// export const StateProvider: React.FC<StateProviderProps> = ({
//   reducer,
//   initialState,
//   children,
// }) => {
//   const store = useReducer(reducer, initialState);

//   return (
//     <StateContext.Provider value={store}>{children}</StateContext.Provider>
//   );
// };

// export const useStateValue = () => {
//   const context = useContext(StateContext);
//   if (context === undefined) {
//     throw new Error("No state context");
//   }

//   return context;
// };

import React, { createContext, useContext, useReducer, ReactNode } from "react";

// Prepares the data layer
interface StateContextValue {
  // Define the structure of your state here
  // For example:
  basket: any[];
  user: any;
}

// Create the context
export const StateContext = createContext<
  [StateContextValue, React.Dispatch<any> | null]
>([{} as StateContextValue, null]);

// Wrap our app and provide the Data Layer
interface StateProviderProps {
  reducer: React.Reducer<StateContextValue, any>;
  initialState: StateContextValue;
  children: ReactNode;
}

export const StateProvider: React.FC<StateProviderProps> = ({
  reducer,
  initialState,
  children,
}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull info from the data layer
export const useStateValue = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateValue must be used within a StateProvider");
  }
  return context;
};
