function Header({ projects = [], onChange = () => {} }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href='/' title='Go to home'>Todoist Printer</a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <form className="form-inline my-2 my-lg-0">
                    <select className="form-control ml-auto mr-sm-2" onChange={onChange}>
                        <option>Select a project...</option>
                        {projects.map(project => <option key={project.id} value={project.id}>{project.name}</option>)}
                    </select>
                </form>
            </div>
        </nav>
    );
}

export default Header;
