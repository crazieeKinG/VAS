import React, { useEffect, useState } from "react";
import { AuthProvider } from "./AuthContext";
import { RoutesPath } from "./routes/RoutesPath";
import "./App.css";
import { Provider } from "react-redux";
import { RootState, store } from "./store/store";
import { useSelector } from "react-redux";
import "./utils/axiosConfig";

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
