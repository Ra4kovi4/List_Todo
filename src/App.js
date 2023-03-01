import { Layout } from "./components/Layout/Layout";

import { TaskForm } from "./components/TaskForm/TaskForm";
import { TableTask } from "./components/Task/TableTask";

export const App = () => {
	return (
		<Layout>
			<TaskForm />
			<TableTask />
		</Layout>
	);
};
