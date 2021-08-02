import React, {useContext, createContext, useState} from 'react'

const fakeAuth = {
    isAuthenticated: false,
    login(cb : any) {
        fakeAuth.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    logout(cb : any) {
        fakeAuth.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}
  

const authContext = createContext({
    user: '',
    login: (callback: any) => {},
    logout: (callback: any) => {}
})

export const useProvideAuth = () => {

    const [user, setUser] = useState('')

    const login = (callback : any) => {
        return fakeAuth.login(() => {
            setUser("user")
            callback()
        })
    }

    const logout = (callback : any) => {
        return fakeAuth.logout(() => {
            setUser('')
            callback()
        })
    }

    return {
        user,
        login,
        logout
    }

}

export const ProvideAuth =  ({children} : any) => {

    const auth = useProvideAuth();

    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    )

}

export const useAuth = () => {
    return useContext(authContext)
}
