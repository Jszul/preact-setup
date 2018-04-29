import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1>Joseph Szul - Preact Config</h1>
				<p>This is a basic Preact APP setup.</p>
			</div>
		);
	}
}
