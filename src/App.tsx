import { useState } from "react";
import { VariableWrapper } from "./components/VariableWrapper";

function App() {
	const [firstName, setFirstName] = useState("Roger");
	const [randomNumber, setRandomNumber] = useState(Math.random());

	console.log('in app: ' + Math.random());

	return (
		<>
			<h1 className="text-3xl mb-3 text-slate-800">State and Events</h1>

			<VariableWrapper>
				<button onClick={() => setFirstName('Andy')}>Change</button>
				<p className="text-2xl">FirstName: {firstName}</p>
			</VariableWrapper>

			<VariableWrapper>
				<button onClick={() => setRandomNumber(Math.random())}>Change</button>
				<p className="text-2xl">Random number: {randomNumber}</p>
			</VariableWrapper>

		</>
	);
}

export default App;
