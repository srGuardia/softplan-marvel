import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

const Input = ({ name, ...rest }) => {
	const inputRef = useRef(null);
	const { fieldName, registerField, defaultValue, error } = useField(name);

	useEffect(() => {
		registerField({
			name: fieldName,
			ref: inputRef.current,
			path: "value",
		});
	}, [fieldName, registerField]);

	return (
		<React.Fragment>
			{!rest.textArea ? (
				<input ref={inputRef} defaultValue={defaultValue} {...rest} />
			) : (
				<textarea ref={inputRef} defaultValue={defaultValue} {...rest} />
			)}
			{error && (
				<span style={{ color: "#ff0015", fontSize: "20px", fontWeight: 500 }}>
					*{error}
				</span>
			)}
		</React.Fragment>
	);
};

export default Input;
