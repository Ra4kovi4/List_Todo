//Импортируем хук
import { useDispatch } from "react-redux";
import { useState } from "react";
// Импортируем генератор экшена
import { addTask } from "../../redux/tasksSlice";

import css from "./TaskForm.module.css";

export const TaskForm = () => {
	// Получаем ссылку на функцию отправки экшенов
	const [errorTitle, setErrorTitle] = useState(false);
	const [errorText, setErrorText] = useState(false);

	const [title, setTitle] = useState("");
	const [text, setText] = useState("");

	// Следит за инпутом
	const hanldeChange = (event) => {
		const { name, value } = event.currentTarget;

		switch (name) {
			case "title":
				setTitle(value);
				break;

			case "text":
				setText(value);
				break;
			default:
				console.log("eroor");
		}
		if (!title) {
			setErrorTitle(false);
			return;
		}
		if (!text) {
			setErrorText(false);
			return;
		}
	};

	const dispatch = useDispatch();

	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.target;
		const title = form.elements.title.value;
		const text = form.elements.text.value;

		if (!title) {
			setErrorTitle(true);
			return;
		}
		if (!text) {
			setErrorText(true);
			return;
		}
		// Вызываем генератор экшена и передаем текст задачи для поля payload
		// Отправляем результат - экшен создания задачи
		dispatch(addTask(title, text));

		form.reset();
	};

	return (
		<form className={css.form} onSubmit={handleSubmit}>
			<div className={css.wrapper}>
				<label htmlFor='title' className={css.inputWrapper}>
					Title
				</label>
				<input
					id='title'
					className={errorTitle ? css.fieldError : css.field}
					type='text'
					name='title'
					placeholder='title'
					value={title}
					onChange={(event) => hanldeChange(event)}
				/>
				{errorTitle && <p className={css.errorMessage}>This field is empty</p>}
			</div>

			<div className={css.wrapper}>
				<label htmlFor='text' className={css.inputWrapper}>
					Description
				</label>

				<input
					id='description'
					className={errorText ? css.fieldError : css.field}
					type='text'
					name='text'
					placeholder='text'
					value={text}
					onChange={(event) => hanldeChange(event)}
				/>
				{errorText && <p className={css.errorMessage}>This field is empty</p>}
			</div>
			<div className={css.btnWrapper}>
				<button type='submit' className={css.btn}>
					Create
				</button>
			</div>
		</form>
	);
};
