import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

export default function configureStore(preloadedState) {
    const composeEnhancers =
        typeof window === "object" &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                  // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
              })
            : compose;

    const enhancer = composeEnhancers(
        applyMiddleware(thunkMiddleware)
        // other store enhancers if any
    );
    return createStore(rootReducer, preloadedState, enhancer);
}
