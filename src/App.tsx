import { useState } from "react";
import { VariableWrapper } from "./components/VariableWrapper";
import * as tools from "./tools";

function App() {
	const [firstName, setFirstName] = useState("Roger");
	const [randomNumber, setRandomNumber] = useState(Math.random());
	const [isOnline, setIsOnline] = useState(false);
	const [htmlColors, setHtmlColors] = useState<string[]>([]);

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
		</>
	);
}

export default App;
