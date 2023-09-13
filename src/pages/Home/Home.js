
import { useEffect, useState } from "react";
import { getMoovies } from "api";

import { ImagePendingView } from "components/Loader";
import { MoovieList } from "components/MoovieList/MoovieList";

import TextErrorView from "components/TextErrorView";

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

        <MoovieList newMoovies={moovies} />
    </>
    );
};

export default Home
