export function BlushMediumBox({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-full max-w-2xl mx-auto mb-8 p-8 bg-blush-medium rounded-lg shadow-lg">
			{ children }
		</div>
	);
}
