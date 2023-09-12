
import { useEffect, useState } from "react";
import { getMoovies } from "api";
import { Link } from "react-router-dom";


export const Home = () => {


    const [moovies, setMoovies] = useState([])




    useEffect(() => {
        async function getQuizzes() {
            try {

                const response = await getMoovies();

                setMoovies(response.results)


            } catch (error) {

                console.log(error);
            }
        }

        getQuizzes();
    }, []);





    return (

        <ul>
            {moovies.map(moovie => <li key={moovie.id}><Link to={`moovies/${moovie.id}`} >{moovie.title ?? moovie.name}</Link></li>
            )}
        </ul>
    );
};
