import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS

const store = createStore(
rootReducer,
composeEnhancer(applyMiddleware(thunk))
  // esta línea es para poder hacer peticiones a un server
);
export default store;


//import { createStore, applyMiddleware } from 'redux'; 
//import { composeWithDevTools } from 'redux-devtools-extension'; 
//import rootReducer from './reducers'; // Reemplaza con tu combinación de reducers 
// Tu middleware personalizado va aquí const middleware = []; 
// Puedes agregar más middlewares si es necesario 
//const store = createStore( rootReducer, composeWithDevTools(applyMiddleware(...middleware)) ); 
//export default store