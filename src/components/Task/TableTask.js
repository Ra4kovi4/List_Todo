import { useSelector } from "react-redux";
import { Task } from "./Task";
import { getTasks } from "../../redux/selectors";

import css from "./Task.module.css";

export const TableTask = () => {
	const tasks = useSelector(getTasks);

	return (
		<>
			{tasks.length === 0 ? (
				<p>You don't have any task yet</p>
			) : (
				<div>
					<table className={css.table}>
						<thead className={css.tableheart}>
							<tr className={css.table}>
								<th>id</th>
								<th>title</th>
								<th>description</th>
								<th>status</th>
							</tr>
						</thead>
						<tbody>
							{tasks.map(({ id, title, text, status }) => (
								<Task
									key={id}
									id={id}
									title={title}
									text={text}
									status={status}
								/>
							))}
						</tbody>
					</table>
				</div>
			)}
		</>
	);
};
