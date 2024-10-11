import '@mantine/core/styles.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@/index.css';
import Home from '@/screens/home';
import { MantineProvider } from '@mantine/core';

const paths = [
	{
		path: '/',
		element: <Home />,
	},
];
const BrowserRouter = createBrowserRouter(paths);

export default function App() {
	return (
		<MantineProvider>
			{<RouterProvider router={BrowserRouter} />}
		</MantineProvider>
	);
}
