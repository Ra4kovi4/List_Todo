import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { toggleStatus } from "../../redux/tasksSlice";
import PropTypes from "prop-types";

import css from "./TaskModale.module.css";

const modalRoot = document.querySelector("#modal-root");

export const TaskModal = ({ id, title, text, status, onCloseModal }) => {
	const dispatch = useDispatch();

	//закрытие модалки при нажатии на backdrop
	const handleBackdropClose = (e) => {
		if (e.target === e.currentTarget) {
			onCloseModal();
		}
	};

	//закрытие модалки при нажатии на "Escape",
	//вешаем слушателя событий на клавиатуру, после закрытия- снимаем слушателя
	useEffect(() => {
		const handlerCloseKeydown = (e) => {
			if (e.code === "Escape") {
				onCloseModal();
			}
		};
		window.addEventListener("keydown", handlerCloseKeydown);
		return () => window.removeEventListener("keydown", handlerCloseKeydown);
	}, [onCloseModal]);

	return createPortal(
		<div className={css.backdrop} onClick={handleBackdropClose}>
			<div className={css.modalWindow}>
				<h3 className={css.modalTitle}>{title}</h3>
				<h4>Description:</h4>
				<p>{text}</p>
				<label className={css.statusWrapper}>
					Status:
					<input
						className={css.statusInfo}
						type='checkbox'
						checked={status}
						onChange={() => dispatch(toggleStatus(id))}
					/>
				</label>
				<button type='button' onClick={onCloseModal} className={css.modalBtn}>
					Close
				</button>
			</div>
		</div>,
		modalRoot
	);
};

TaskModal.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	status: PropTypes.bool.isRequired,
};
