import React, { useRef } from "react";
import { connect } from "react-redux";
import { Form } from "@unform/web";
import Input from "../Input";
import { atualizaHeroi } from "../../Redux/Actions/marvelActions";

const FormHero = ({ hero, atualizaHeroi, returnHome }) => {
	const formRef = useRef(null);

	const handleSubmit = (dados) => {
		if (dados.name === "") {
			formRef.current.setFieldError("name", "Obrigatório");
		} else {
			atualizaHeroi(hero.id, dados);
			returnHome();
		}
	};

	return (
		<Form ref={formRef} initialData={hero} onSubmit={handleSubmit}>
			<label>Name:</label>
			<Input name="name" />

			<label>Description:</label>
			<Input name="description" textArea />

			<button type="submit" className="salvar">
				Salvar
			</button>
		</Form>
	);
};

const mapStateToProps = (state) => {
	return {
		hero: state.root.heroiSpecific,
	};
};

export default connect(mapStateToProps, { atualizaHeroi })(FormHero);
