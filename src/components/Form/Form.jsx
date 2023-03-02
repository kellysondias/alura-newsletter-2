import React from "react";

export const Form = ({ onSubmit }) => {
	const safeSubmit = (event) => {
		event.preventDefault();
		event.stopPropagation();

		const name = event.target[0].value;
		const email = event.target[1].value;

		onSubmit({ name, email });
	};

	return (
		<form
			onSubmit={safeSubmit}
			className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5"
		>
			<input
				type="text"
				placeholder="Insira seu nome..."
				required
				className="alura-input"
			/>
			<input
				type="email"
				placeholder="Insira seu e-mail..."
				required
				className="alura-input"
			/>
			<button
				type="submit"
				className="alura-button"
			>
				Seguir
			</button>
		</form>
	);
};
