import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
} from "react";

interface UserDetails {
    username: string;
    isLoggedIn: boolean;
}

interface AuthUser {
    auth: UserDetails;
    setAuth: React.Dispatch<SetStateAction<UserDetails>>;
}

export const AuthContext = createContext<AuthUser | undefined>(undefined);

type Props = {
    children: React.ReactNode;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
    const defaultUserDetails: UserDetails = {
        username: "",
        isLoggedIn: false,
    };

    const getStoredUserDetails = (): UserDetails => {
        const localData = localStorage.getItem("userDetails");

        if (localData !== null) {
            return JSON.parse(localData);
        }

        return defaultUserDetails;
    };

    const storedUserDetails = getStoredUserDetails();
    const [auth, setAuth] = useState<UserDetails>(storedUserDetails);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
