export default function AccommodationPage() {
	return (
		<div className="min-h-screen bg-blush-light p-8">
			<div className="max-w-4xl mx-auto">
				<h1 className="text-4xl font-serif text-sage-darker mb-8 text-center">
					Boende
				</h1>

				<div className="bg-blush-medium rounded-lg p-6 mb-6">
					<h2 className="text-2xl font-semibold text-sage-darker mb-4">
						Osaby Herrgård
					</h2>
					<p className="text-sage-dark mb-4">
						Osaby Herrgård ligger vackert beläget vid sjön Åsnen i hjärtat av Småland.
						Här kan ni bo i historisk miljö med moderna bekvämligheter. Herrgården
						erbjuder charmiga rum med utsikt över parken och sjön.
					</p>
					<p className="text-sage-dark">
						Avståndet till festlokalen är cirka 15 minuter med bil.
					</p>
				</div>

				<div className="bg-blush-medium rounded-lg p-6">
					<h2 className="text-2xl font-semibold text-sage-darker mb-4">
						Stjärnviks Säteri
					</h2>
					<p className="text-sage-dark mb-4">
						Stjärnviks Säteri är en idyllisk gård med anor från 1600-talet.
						Boendet erbjuder en lugn och avkopplande miljö omgiven av vacker natur.
						Perfekt för er som vill kombinera bröllopsfirande med en mini-semester.
					</p>
					<p className="text-sage-dark">
						Avståndet till festlokalen är cirka 10 minuter med bil.
					</p>
				</div>
			</div>
		</div>
	);
}
