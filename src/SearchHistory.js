import HistoryItem from './HistoryItem.js';

function SearchHistory() {
	return (
		<div className='box history-box'>
			<h3>Historia wyszukiwania</h3>
			<ul className='search-history-list'>
				<HistoryItem />
				<HistoryItem />
				<HistoryItem />
				<HistoryItem />
				<HistoryItem />
				<HistoryItem />
				<HistoryItem />
				<HistoryItem />
			</ul>
			{/* <p className='empty-field-text'>Brak wyszukiwania</p> */}
		</div>
	);
}

export default SearchHistory;
