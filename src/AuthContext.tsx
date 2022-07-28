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

export interface AuthUser {
    auth: UserDetails;
    setAuth: React.Dispatch<SetStateAction<UserDetails>>;
}

export const AuthContext = createContext<AuthUser | undefined>(undefined);

type Props = {
    children: JSX.Element;
};

export const AuthProvider: React.FC<Props> = ({ children }) => {
    const defaultUserDetails: UserDetails = {
        username: "",
        isLoggedIn: false,
    };

    const getStoredUserDetails = () => {
        const localData = localStorage.getItem("userDetails") as string;
        return localData === null ? defaultUserDetails : JSON.parse(localData);
    };

    const storedUserDetails = getStoredUserDetails();
    const [auth, setAuth] = useState<UserDetails>(storedUserDetails);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
