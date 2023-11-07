export const getRandomHtmlColor = () => {
	const allHtmlColors: string[] = [
		"red",
		"green",
		"blue",
		"purple",
		"orange",
		"pink",
		"brown",
		"gray",
	];
	const randomIndex = Math.floor(Math.random() * allHtmlColors.length);
	const htmlColor = allHtmlColors[randomIndex];
	return htmlColor;
};

