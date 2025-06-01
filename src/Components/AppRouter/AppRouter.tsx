import { Routes, Route,  } from "react-router-dom"
import { authRoutes, publicRoutes } from "./routes"
import { useContext } from "react"
import { Context } from "../../main"

export const AppRouter = () => {
    // const isAuth = false
   
    
    
    return (
        <>

            <Routes>
                

                {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={Component} />
            )}
            
            </Routes>



            
        </>
    )
}