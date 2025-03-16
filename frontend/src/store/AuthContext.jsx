import { useState, createContext } from "react"
export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [auth, setAuth]  = useState(null)

    const logout = (email, password) => {
        if (email === 'test@test.com' && password === '123123') {setAuth({email})}
    }
    const stateGlobal ={
        auth, logout
    }
  return (
    <AuthContext.Provider value={stateGlobal}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
