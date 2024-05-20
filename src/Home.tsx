import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Poster } from "./Home/Poster/Poster";
import { Recommendation } from "./Home/Recomendation/Recomendation";
import './Home/Recomendation/Recomendation.scss'


export function Home() {

    return (
        <>
            
            <Poster/>
            <div className="hz">
            <Recommendation header="Фильмы недели" subtitle="Только свежие новинки"/>
            </div>
            
            <Recommendation header="Фильмы недели" subtitle="Только свежие новинки"/>
            <Recommendation header="Фильмы недели" subtitle="Только свежие новинки"/>
            <Footer/>            
            
        </>
    )


}