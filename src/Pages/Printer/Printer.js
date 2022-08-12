import {useEffect, useState} from "react";
import {getProjects, getSectionOfProject, getTasks} from "../../Repositories/ProjectsRepository";
import Header from "../../Components/Header";
import Tasks from "../../Components/Tasks";

function Printer() {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);
    const [projectId, setProjectId] = useState(null);
    const [tasks, setTasks] = useState([]);
    const [sections, setSections] = useState([]);

    useEffect(() => {
        getProjects().then((projects) => {
            setProjects(projects);
        }).catch(error => {
            console.error('Error to fetch projects:');
            console.log(error)
            setError(error);
        });
    }, []);

    useEffect(() => {
        if (projectId === null) {
            return;
        }

        getTasks(projectId).then((tasks) => {
            setTasks(tasks);
        }).catch(error => {
            console.error('Error to fetch projects:');
            console.log(error)
            setError(error);
        });
    }, [projectId]);

    useEffect(() => {
        if (projectId === null) {
            return;
        }

        getSectionOfProject(projectId).then((sections) => {
            setSections(sections);
        }).catch(error => {
            console.error('Error to fetch projects:');
            console.log(error)
            setError(error);
        });
    }, [projectId]);

    const changeProject = function (e) {
        console.log('Define projectId to', e.target.value);
        setProjectId(e.target.value);
    }

    return (
        <>
            <Header projects={projects} onChange={changeProject} />
            <Tasks tasks={tasks} sections={sections} />
        </>
    );
}

export default Printer;
