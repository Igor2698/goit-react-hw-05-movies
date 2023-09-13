import css from './Moovies.module.css'
import { useSearchParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoovieByName } from 'api';

export const Moovies = () => {
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

    console.log(newMoovies);




    return (<>
        <form onSubmit={updateQueryString}>
            <input type="text" name="moovie" value={moovie} onChange={handleMoovieChange} />
            <button type="submit" className={css.button}></button>
        </form>


        {newMoovies && <ul>
            {newMoovies.map(moovie => <li key={moovie.id}><Link to={`/moovies/${moovie.id}`} >{moovie.title}</Link></li>)}
        </ul>}



    </>
    );
};
