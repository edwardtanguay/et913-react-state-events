interface IProps {
	children: React.ReactNode;
}

export const VariableWrapper = ({ children }: IProps) => {
	console.log("in VariableWrapper: " + Math.random());
	return (
		<div className="bg-slate-400 p-4 rounded flex gap-2 mb-3">
			{children}
		</div>
	);
};
