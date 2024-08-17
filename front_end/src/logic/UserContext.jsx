import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
// إنشاء السياق
const UserContext = createContext();

// مقدم السياق
export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const router = useRouter();
    useEffect(() => {
        // استرجاع المستخدم من localStorage عند التحميل الأولي
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        router.push("/home")

        localStorage.removeItem('user');
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}

// هوك لاستخدام سياق المستخدم
export function useUser() {
    return useContext(UserContext);
}
