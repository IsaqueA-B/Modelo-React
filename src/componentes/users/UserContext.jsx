import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const saved = localStorage.getItem('currentUser');
        if (saved) {
            try {
                setUser(JSON.parse(saved));
            } catch {
                localStorage.removeItem('currentUser');
                localStorage.removeItem('isAdmin');
            }
        }
        setLoading(false);
    }, []);

    const login = async (email, senha) => {
        // Credenciais fixas para modo template
        if (email === 'admin@email.com' && senha === 'admin123') {
            const usuario = { nome: 'Admin', email, nivel_acesso: 'admin' };
            setUser(usuario);
            localStorage.setItem('currentUser', JSON.stringify(usuario));
            localStorage.setItem('isAdmin', 'true');
            return usuario;
        } else {
            throw new Error('Email ou senha inválidos');
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('currentUser');
        localStorage.removeItem('isAdmin');
    };

    return (
        <UserContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </UserContext.Provider>
    );
}

export const useUser = () => useContext(UserContext);