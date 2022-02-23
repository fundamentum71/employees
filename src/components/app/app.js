import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../searsh-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form';

function App() {
	const data = [
		{ name: 'John C.', salary: 800, increase: false, id: 1 },
		{ name: 'Alex M.', salary: 3000, increase: true, id: 2 },
		{ name: 'Carl W.', salary: 5000, increase: false, id: 3 },
		{ name: 'Clark S.', salary: 8000, increase: true, id: 4 },
	];

	return (
		<div className="app">
			<AppInfo />

			<div className="search-panel">
				<SearchPanel />
				<AppFilter />
			</div>
			<EmployersList data={data} />
			<EmployeesAddForm />
		</div>
	);
}

export default App;
