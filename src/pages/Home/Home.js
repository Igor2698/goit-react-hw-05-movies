
import { useEffect, useState } from "react";
import { getMoovies } from "api";

import { ImagePendingView } from "components/Loader";
import { MoovieList } from "components/MoovieList/MoovieList";

import TextErrorView from "components/TextErrorView";
import css from './Home.module.css'

const Home = () => {


    const [moovies, setMoovies] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)




    useEffect(() => {
        async function getQuizzes() {
            try {
                setLoading(true);

                const response = await getMoovies();


                setMoovies(response.results)
                setLoading(false);
                console.log(response);


            } catch (error) {
                setError(error)

                console.log(error);
            }
        }

        getQuizzes();
    }, []);





    return (<>

        {error && <TextErrorView message={error.message} />}

        {loading && <ImagePendingView />}
        <h1 className={css.moovieListTitle}>The most popular</h1>

        <MoovieList newMoovies={moovies} />
    </>
    );
};

export default Home
