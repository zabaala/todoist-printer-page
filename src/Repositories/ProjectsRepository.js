import { TodoistApi } from '@doist/todoist-api-typescript'

export function chooseBadgeClass(name) {
    let classes = '';

    switch (name.toLowerCase()) {
        case 'done':
            classes ='badge badge-success';
            break;
        case 'backlog':
            classes ='badge badge-light';
            break;
        case 'doing':
            classes ='badge badge-primary';
            break;
        default:
            classes ='badge badge-info';
            break;
    }

    return classes;
}

export function getProjects() {
    return (new TodoistApi(process.env.REACT_APP_TODOIST_ACCESS_TOKEN)).getProjects();
}

export function getTasks(project_id) {
    const api = new TodoistApi(process.env.REACT_APP_TODOIST_ACCESS_TOKEN);
    return api.getTasks({
        projectId: project_id
    });
}

export function getSectionOfProject(project_id) {
    const api = new TodoistApi(process.env.REACT_APP_TODOIST_ACCESS_TOKEN);
    return api.getSections(project_id);
}
