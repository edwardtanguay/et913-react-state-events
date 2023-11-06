import { useState } from "react";

function App() {
	const [firstName, setFirstName] = useState("Roger");

	return (
		<>
			<h1 className="text-3xl mb-3 text-slate-800">State and Events</h1>
			<div className="bg-slate-400 p-4 rounded flex gap-2">
				<button onClick={() => setFirstName('Andy')}>Change</button>
				<p className="text-2xl">FirstName: {firstName}</p>
			</div>
		</>
	);
}

export default App;
