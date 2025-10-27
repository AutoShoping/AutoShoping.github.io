import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const DEMO_USERS = [
  {
    id: "2",
    email: "admin@cesdeals.com",
    password: "admin123",
    name: "Admin User",
  },
];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Error loading user from localStorage:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const simpleHash = (str: string): string => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash.toString(36);
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    const registeredUsers = JSON.parse(
      localStorage.getItem("registered_users") || "[]"
    );
    
    let foundUser = DEMO_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      const hashedPassword = simpleHash(password);
      foundUser = registeredUsers.find(
        (u: { email: string; passwordHash: string }) => 
          u.email === email && u.passwordHash === hashedPassword
      );
    }

    if (foundUser) {
      const userToSave = {
        id: foundUser.id,
        email: foundUser.email || email,
        name: foundUser.name,
      };
      setUser(userToSave);
      localStorage.setItem("user", JSON.stringify(userToSave));
      return true;
    }

    return false;
  };

  const register = async (
    email: string,
    password: string,
    name: string
  ): Promise<boolean> => {
    const registeredUsers = JSON.parse(
      localStorage.getItem("registered_users") || "[]"
    );
    
    const existingUser = [...DEMO_USERS, ...registeredUsers].find(
      (u) => u.email === email
    );
    if (existingUser) {
      return false;
    }

    const newUser = {
      id: Date.now().toString(),
      email,
      passwordHash: simpleHash(password),
      name,
    };

    registeredUsers.push(newUser);
    localStorage.setItem("registered_users", JSON.stringify(registeredUsers));

    const userToSave = {
      id: newUser.id,
      email: newUser.email,
      name: newUser.name,
    };
    setUser(userToSave);
    localStorage.setItem("user", JSON.stringify(userToSave));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
