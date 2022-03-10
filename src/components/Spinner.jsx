import estilo from "../pages/css/film_details.module.css";
import { FaSpinner } from 'react-icons/fa';

export function Spinner(){
    return(<div className={estilo.loading}>
        <FaSpinner className={estilo.spinning} size={60}/>
    </div>);
}