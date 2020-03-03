
const ProjectTile = (props) => (
  <div >
    <a className="project-link" target="_blank" href={props.url}>
      <div 
        className="project-tile"
        style={{
          backgroundSize: 'cover', 
          backgroundImage: 'url(' + props.img + ')'
        }}
      >
        <p className="project-name">{props.name}</p>
      </div>
    </a>
  </div>
)

const ProjectSection = (props) => (
  <div>
    <h2>{props.title}</h2>
    <div className="project-tiles">
    {
      props.projects.map(obj => (
        <ProjectTile name={obj.name} img={obj.img} url={obj.url}/>
      ))
    }
    </div>
  </div>
)

class ProjectLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
    fetch('projects.json')
      .then(res => res.json())
      .then(obj => 
        this.setState({
          projects: obj.projects
        }),
        () => {
          console.log('File failed to load.')
          this.setState({
            projects: []
          })
        })
  }

  render() {
    return (
      <div id="projects">
        <h1>Projects</h1>
        {
          this.state.projects.map((obj) => (
            <ProjectSection title={obj.title} projects={obj.projects} />
          ))
        }
      </div>
    )
  }
}

ReactDOM.render(<ProjectLibrary />, document.getElementById('projects-render'));

