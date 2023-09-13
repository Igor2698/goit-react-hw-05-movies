
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoovieByName } from 'api';
import { Form } from '../components/Form'

export const Moovies = () => {
    const location = useLocation()

    const [searchParams, setSearchParams] = useSearchParams();
    const [moovie, setMoovie] = useState(searchParams.get('query') ?? '');
    const [newMoovies, setNewMoovies] = useState()
    const query = searchParams.get('query') ?? ''




    const updateQueryString = evt => {
        evt.preventDefault()
        if (moovie === '') {
            return setSearchParams({});
        }
        setSearchParams({ query: moovie });
    };

    const handleMoovieChange = evt => {
        setMoovie(evt.target.value);
    };

    useEffect(() => {


        async function getMoovies() {
            try {
                const response = await getMoovieByName(query);
                setNewMoovies(response.results)


            } catch (error) {

                console.log(error);
            }
        }

        getMoovies();
    }, [query])






    return (<>
        <Form updateQueryString={updateQueryString} moovie={moovie} handleMoovieChange={handleMoovieChange} />


        {newMoovies && <ul>
            {newMoovies.map(moovie => <li key={moovie.id}><Link to={`/moovies/${moovie.id}`} state={{ from: location }} >{moovie.title}</Link></li>)}
        </ul>}



    </>
    );
};
