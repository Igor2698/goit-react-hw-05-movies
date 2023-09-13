
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoovieByName } from 'api';
import { Form } from '../../components/Form'
import { ImagePendingView } from 'components/Loader';
import { MoovieList } from 'components/MoovieList/MoovieList';
import TextErrorView from 'components/TextErrorView';




const Moovies = () => {

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();

    const [newMoovies, setNewMoovies] = useState()
    const query = searchParams.get('query') ?? ''




    const updateQueryString = moovie => {

        const trimmedMoovie = moovie.trim()

        if (trimmedMoovie === '') {
            return setSearchParams({});
        }
        setSearchParams({ query: trimmedMoovie });
    };



    useEffect(() => {


        async function getMoovies() {
            try {
                setLoading(true);
                const response = await getMoovieByName(query);
                setNewMoovies(response.results)
                setLoading(false)


            } catch (error) {
                setError(error)

                console.log(error);
            }
        }

        getMoovies();
    }, [query])






    return (
        <>
            {error && <TextErrorView message={error.message} />}
            {loading && <ImagePendingView />}
            <Form updateQueryString={updateQueryString} />
            {newMoovies && <MoovieList newMoovies={newMoovies} />}



        </>
    );
};


export default Moovies



