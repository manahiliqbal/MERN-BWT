import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(() => {
		try {
			const user = JSON.parse(localStorage.getItem("chat-user"));
			return user || null;
		} catch (error) {
			console.error("Failed to parse auth user from localStorage:", error);
			return null;
		}
	});

	// Sync authUser to localStorage when it changes
	useEffect(() => {
		if (authUser) {
			localStorage.setItem("chat-user", JSON.stringify(authUser));
		} else {
			localStorage.removeItem("chat-user");
		}
	}, [authUser]);

	return (
		<AuthContext.Provider value={{ authUser, setAuthUser }}>
			{children}
		</AuthContext.Provider>
	);
};
