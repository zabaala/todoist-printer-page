import {chooseBadgeClass} from "../Repositories/ProjectsRepository";
import {useState} from "react";

function Tasks({tasks = [], sections = []}) {
    const getSectionName = (sectionId) => {
        return sections.filter(section => section.id === sectionId)[0]?.name;
    }

    const getSectionClass = (sectionId) => {
        const sectionName = getSectionName(sectionId);
        return chooseBadgeClass(sectionName)
    }

    const getContent = (task) => {
        return (
            <>
                <strong>{task.content}</strong><br/>
                {task.description}
            </>
        );
    }

    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-12">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Section</th>
                                <th>Name</th>
                                <th>Completed?</th>
                            </tr>
                        </thead>
                        <tbody>
                        {tasks.map(task => (
                            <tr key={task.id}>
                                <td className='text-center'>
                                    <h5>
                                        <span className={getSectionClass(task.sectionId)}>
                                            {getSectionName(task.sectionId)}
                                        </span>
                                    </h5>
                                </td>
                                <td>{getContent(task)}</td>
                                <td
                                    className='text-center'
                                    dangerouslySetInnerHTML={
                                    {__html: task.completed ? 'Yes' : '<span class="text-muted">no</span>'}
                                }></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Tasks;
