import { useState } from "react";
import { VariableWrapper } from "./components/VariableWrapper";
import * as tools from "./tools";

const initialPerson = {
	firstName: "",
	lastName: "",
	age: 0,
};

function App() {
	const [firstName, setFirstName] = useState("Roger");
	const [randomNumber, setRandomNumber] = useState(Math.random());
	const [isOnline, setIsOnline] = useState(false);
	const [htmlColors, setHtmlColors] = useState<string[]>([]);
	const [person, setPerson] = useState(initialPerson);

	const handleColorRemove = () => {
		const _htmlColors: string[] = structuredClone(htmlColors);
		_htmlColors.pop();
		setHtmlColors(_htmlColors);
	};

	const handleColorAdd = () => {
		const _htmlColors: string[] = structuredClone(htmlColors);
		_htmlColors.push(tools.getRandomHtmlColor());
		setHtmlColors(_htmlColors);
	};

	const handleFirstNameChange = (value: string) => {
		const _person = structuredClone(person);
		_person.firstName = value;
		setPerson(_person);
	};

	const handleLastNameChange = (value: string) => {
		const _person = structuredClone(person);
		_person.lastName = value;
		setPerson(_person);
	};

	const handleAgeChange = (value: string) => {
		const _person = structuredClone(person);
		_person.age = Number(value);
		setPerson(_person);
	};
	
	const formIsValid = () => {
		return person.firstName.trim() != '' && person.lastName.trim() != '' && Number(person.age) > 0 
	}

	return (
		<>
			<h1 className="text-3xl mb-3 text-slate-800">State and Events</h1>

			<VariableWrapper>
				<button onClick={() => setFirstName("Andy")}>Change</button>
				<p className="text-2xl">FirstName: {firstName}</p>
			</VariableWrapper>

			<VariableWrapper>
				<button onClick={() => setRandomNumber(Math.random())}>
					Change
				</button>
				<p className="text-2xl">Random number: {randomNumber}</p>
			</VariableWrapper>

			<VariableWrapper>
				<button onClick={() => setIsOnline(!isOnline)}>Toggle</button>
				<p className="text-2xl">
					{isOnline ? "user is online" : "user is OFFLINE"}
				</p>
			</VariableWrapper>

			<VariableWrapper>
				<div className="flex flex-col justify-start">
					<div className="flex justify-start gap-3">
						<button className="self-start" onClick={handleColorAdd}>
							Add Color
						</button>
						<button
							className="self-start"
							onClick={handleColorRemove}
						>
							Remove Color
						</button>
					</div>
					{htmlColors.length > 0 && (
						<div className="text-2xl flex gap-2 flex-wrap mt-3">
							{htmlColors.map((color, index) => (
								<div
									key={index}
									className="text-[.8rem] w-[5rem] font-bold flex justify-center rounded p-2"
									style={{ backgroundColor: color }}
								>
									{color}
								</div>
							))}
						</div>
					)}
				</div>
			</VariableWrapper>

			<VariableWrapper>
				<div className="flex flex-col">
					<form className="w-full">
						<fieldset style={{border: formIsValid() ? '' : '1px solid red'}} className="border border-gray-500 p-4 w-full rounded">
							<legend>Your contact details:</legend>

							<div className="mb-4 flex gap-2">
								<label className="w-[5rem]" htmlFor="firstName">
									First name:
								</label>
								<input
									type="text"
									autoFocus 
									name="firstName"
									onChange={(e) =>
										handleFirstNameChange(e.target.value)
									}
									value={person.firstName}
									id="firstName"
								/>
							</div>

							<div className="mb-4 flex gap-2">
								<label className="w-[5rem]" htmlFor="lastName">
									Last name:
								</label>
								<input
									type="text"
									name="lastName"
									onChange={(e) =>
										handleLastNameChange(e.target.value)
									}
									value={person.lastName}
									id="lastName"
								/>
							</div>

							<div className="flex gap-2">
								<label className="w-[5rem]" htmlFor="age">
									Age:
								</label>
								<input
									className="text-right w-[4rem]"
									type="text"
									name="age"
									onChange={(e) =>
										handleAgeChange(e.target.value)
									}
									value={person.age}
									id="age"
								/>
							</div>
						</fieldset>
					</form>
					<pre className="mt-4 font-mono text-xs text-gray-950 font-bold">{JSON.stringify(person, null, 2)}</pre>
				</div>
			</VariableWrapper>
		</>
	);
}

export default App;
