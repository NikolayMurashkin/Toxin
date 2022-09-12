import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './App';
import './index.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
	palette: {
		dark100: "#1F2041",
		dark75: "rgba(31, 32, 65, 0.75)",
		dark50: "rgba(31, 32, 65, 0.5)",
		dark25: "rgba(31, 32, 65, 0.25)",
		dark5: "rgba(31, 32, 65, 0.05)",
		purple: "#1F2041",
		green: "#6FCF97",
		white: "#FFFFFF"
	}
});



const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);