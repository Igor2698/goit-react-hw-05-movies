import css from './Moovies.module.css'
import { useSearchParams } from 'react-router-dom';

export const Moovies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const moovie = searchParams.get('moovie') ?? '';


    const updateQueryString = evt => {
        const moovieValue = evt.target.value;
        if (moovieValue === '') {
            return setSearchParams({});
        }
        setSearchParams({ moovie: moovieValue });
    };

    return <form>
        <input type="text" value={moovie} onChange={updateQueryString} />
        <button className={css.button}></button>
    </form>
};
