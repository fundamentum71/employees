import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../searsh-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					name: 'John C.',
					salary: 800,
					increase: false,
					rise: true,
					id: 1,
				},
				{
					name: 'Alex M.',
					salary: 3000,
					increase: false,
					rise: false,
					id: 2,
				},
				{
					name: 'Carl W.',
					salary: 6000,
					increase: true,
					rise: false,
					id: 3,
				},
				{
					name: 'Clark S.',
					salary: 8000,
					increase: false,
					rise: false,
					id: 4,
				},
			],
		};
		this.maxId = 5;
	}

	deleteItem = (id) => {
		this.setState(({ data }) => {
			return {
				data: data.filter((item) => item.id !== id),
			};
		});
	};
	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
			id: this.maxId++,
		};
		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr,
			};
		});
	};

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map((item) => {
				if (item.id === id) {
					return {
						...item,
						[prop]: !item[prop],
					};
				}
				return item;
			}),
		}));
	};

	render() {
		const employees = this.state.data.length;
		const increased = this.state.data.filter((item) => item.increase).length;
		return (
			<div className="app">
				<AppInfo employees={employees} increased={increased} />

				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>
				<EmployersList
					data={this.state.data}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
				/>
				<EmployeesAddForm onAdd={this.addItem} />
			</div>
		);
	}
}

export default App;
