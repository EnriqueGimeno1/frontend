import { ErrorMessage, useField } from "formik";
import { useState } from "react";

export const CustomInput = ({ label, ...props }) => {
	const [field, , helper] = useField(props);

	const handleInputChange = (event) => {
		// Disable default event handler
		event.preventDefault();

		// Extract current Input value
		const { value } = event.target;

		// Display current Input value
		// console.log(value);

		// VALIDATION - Verifying for character restrictions
		if (props.allowedCharacters) {
			// Verifying if the field value changed

			switch (props.allowedCharacters) {
				// CASE: Positive integers only
				case "positiveIntegers": {
					const regex = /^[1-9]\d*$/;
					if (regex.test(value.toString()) || value === "") {
						helper.setValue(value);
					}
					break;
				}

				// CASE: Letters only
				case "justLetters": {
					const regex = /[\p{Letter}\s]+/gu;
					if (regex.test(value.toString()) || value === "") {
						helper.setValue(value);
					}

					break;
				}
				default: {
					break;
				}
			}
		} else {
			// Default behavior when the 'allowedCharacters' prop is not received
			helper.setValue(value);
		}
	};

	return (
		<>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input
				className="text-input"
				{...field}
				{...props}
				// value={userInput}
				onChange={handleInputChange}
			/>
			<ErrorMessage
				name={props.name}
				component="span"
				className="custon-span-error-class"
			/>
		</>
	);
};
