import { MoviesGrid } from "./MoviesGrid";
import estilo from "./Peliculas_nuevas.module.css";

export function App(){
    return (
    <div>
        <header>
            <h1 className={estilo.title}>FILMS</h1>
        </header>
        <main>
            <MoviesGrid/>
        </main>
    </div>
    );
}