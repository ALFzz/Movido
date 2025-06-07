import { Routes, Route,  } from "react-router-dom"
import { publicRoutes } from "./routes"

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