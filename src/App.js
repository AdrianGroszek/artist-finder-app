import './App.scss';
import Footer from './Footer.js';
import Logo from './Logo.js';
import Main from './Main.js';
import Box from './Box.js';
import Search from './Search.js';
import ArtistsList from './ArtistsList.js';
import BoxWrapper from './BoxWrapper.js';
import ArtistDetails from './ArtistDetails.js';
import SearchHistory from './SearchHistory.js';

function App() {
	return (
		<>
			<Logo />
			<Main>
				<Box>
					<Search />
					{/* <p className='empty-field-text'>Brak wyszukiwania</p> */}
					<ArtistsList />
				</Box>
				<BoxWrapper>
					<ArtistDetails />
					<SearchHistory />
				</BoxWrapper>
			</Main>
			<Footer />
		</>
	);
}

export default App;
