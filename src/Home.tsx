import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Poster } from "./Poster/Poster";
import { Recommendation } from "./Recomendation/Recomendation";


export function Home() {

    return (
        <>
            <Header/>
            <Poster/>
            <Recommendation header="Фильмы недели" subtitle="Только свежие новинки"/>
            <Recommendation header="Фильмы недели" subtitle="Только свежие новинки"/>
            <Recommendation header="Фильмы недели" subtitle="Только свежие новинки"/>
            <Footer/>            
            
        </>
    )


}