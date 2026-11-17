import {tasks} from "../data/tasks";
import type {Task} from "../types/Task";
interface Props{
    task:Task;
}

const TaskCard=({task}:Props)=>{
    return(
        <div>
            <h4><b>id</b>{task.id}</h4>
            <h4><b>title</b>{task.title}</h4>
            <h4><b>status</b>{task.status}</h4>
            <h4><b>priority</b>{task.priority}</h4>
            <h4><b>description</b>{task.description}</h4>
        </div>
    );
};

export default TaskCard;