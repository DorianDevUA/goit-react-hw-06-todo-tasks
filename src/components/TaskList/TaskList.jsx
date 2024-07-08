import { useSelector } from 'react-redux';
import { statusFilters } from '../../redux/constants';
import { getTasks } from '../../redux/tasksSlice';
import { getStatusFilter } from '../../redux/filtersSlice';
import Task from '../Task';
import { ToDoItem, ToDoList } from './TaskList.styled';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

const TaskList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);

  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ToDoList>
      {visibleTasks.map(task => (
        <ToDoItem key={task.id}>
          <Task task={task} />
        </ToDoItem>
      ))}
    </ToDoList>
  );
};

export default TaskList;
