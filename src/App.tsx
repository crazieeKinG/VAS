import React from "react";
import { AuthProvider } from "./AuthContext";
import { RoutesPath } from "./routes/RoutesPath";
import "./App.css";
function App() {
    return (
        <div>
            <AuthProvider>
                <RoutesPath />
            </AuthProvider>
        </div>
    );
}

export default App;
