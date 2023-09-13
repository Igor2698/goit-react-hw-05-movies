import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from './Layout/Layout';

const MoovieDetails = lazy(() => import('pages/MoovieDetails/MoovieDetails'));
const Moovies = lazy(() => import('pages/Moovies/Moovies'));
const NotFound = lazy(() => import('pages/Error/NotFound'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Review'));
const Home = lazy(() => import('pages/Home/Home'));
export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="moovies" element={<Moovies />} />
          <Route path="moovies/:id" element={<MoovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
