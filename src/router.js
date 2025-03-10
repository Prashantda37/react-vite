import React, {Suspense, lazy} from 'react';
import { Routes, Route } from "react-router-dom";
import BaseLayout from './components/layouts/baseLayout';

const Home = lazy(() => import('./pages/home'))
const Aboutus = lazy(() => import('./pages/about-us'))
const NoteFound = lazy(() => import('./pages/notFound'))
// import Home from './pages/home';
// import NoteFound from './pages/notFound';
// import Aboutus from './pages/about-us';


const Router = () => {
	return (<Routes>
		<Route element={<BaseLayout />}>
			<Route index element={<Home />} />
			<Route path="/about" element={<Aboutus />} />
			<Route path="*" element={<NoteFound />} />
		</Route>
	</Routes>);
}
 
export default Router;