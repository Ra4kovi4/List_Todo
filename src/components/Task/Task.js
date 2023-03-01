import { useState } from "react";
import { TaskModal } from "../Modal/TaskModal";
import PropTypes from "prop-types";
import css from "./Task.module.css";

export const Task = ({ id, title, text, status }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	//Переключение состояния модального окна
	const modalToggle = () => {
		setIsModalOpen((prevState) => !prevState);
	};
	return (
		<>
			<tr key={id} onClick={modalToggle} className={css.tableRow}>
				<td className={css.tabledescription}>{id}</td>
				<td className={css.tabledescription}>{title}</td>
				<td className={css.tabledescription}>{text}</td>
				<td className={css.tabledescription}>
					<input type='checkbox' checked={status} readOnly />
				</td>
			</tr>

			{isModalOpen && (
				<TaskModal
					id={id}
					title={title}
					text={text}
					status={status}
					onCloseModal={modalToggle}
				/>
			)}
		</>
	);
};

Task.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	status: PropTypes.bool.isRequired,
};
