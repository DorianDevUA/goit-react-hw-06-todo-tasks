import { useSelector } from 'react-redux';
import { Text } from './TaskCounter.styled';
import { getTasks } from '../../redux/tasks/selectors';

const TaskCounter = () => {
  const tasks = useSelector(getTasks);

  const count = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }

      return acc;
    },
    { active: 0, completed: 0 },
  );

  return (
    <div>
      <Text>All: {tasks.length}</Text>
      <Text>Active: {count.active}</Text>
      <Text>Completed: {count.completed}</Text>
    </div>
  );
};

export default TaskCounter;
