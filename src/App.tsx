import React from "react";
import { AuthProvider } from "./AuthContext";
import { RoutesPath } from "./routes/RoutesPath";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
function App() {
    return (
        <div>
            <Provider store={store}>
                <RoutesPath />
            </Provider>
        </div>
    );
}

export default App;
