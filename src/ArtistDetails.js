function ArtistDetails() {
	return (
		<div className='box artist-details-box'>
			<img src='https://picsum.photos/400' alt='picture' />
			<div className='artist-info-box'>
				<h3>Malik Montana</h3>
				<p>Wykonawca</p>
			</div>
			<div className='artist-details-box'>
				<p>
					<span>Gatunki: </span>Rap, Polski rap, hip-hop
				</p>
				<p>
					<span>Popularność </span>805 210 słuchaczy w tym miesiącu
				</p>
			</div>
			{/* <p className='empty-field-text'>Brak wyszukiwania</p> */}
		</div>
	);
}

export default ArtistDetails;
