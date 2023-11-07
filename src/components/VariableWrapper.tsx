interface IProps {
	children: React.ReactNode;
}

export const VariableWrapper = ({ children }: IProps) => {
	return (
		<div className="bg-slate-400 p-4 rounded flex gap-2 mb-3 w-[40rem]">
			{children}
		</div>
	);
};
