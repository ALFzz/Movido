import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Poster } from "./Home/Poster/Poster";
import { Recommendation } from "./Home/Recomendation/Recomendation";


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