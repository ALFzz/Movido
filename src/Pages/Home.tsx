import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { Poster } from "../Components/Poster/Poster";
import { Recommendation } from "../Components/Recomendation/Recomendation";
import '../Components/Recomendation/Recomendation'


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