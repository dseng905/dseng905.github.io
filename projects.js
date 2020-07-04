
const ProjectTile = (props) => {
  const [mouseOver, setMouseOver] = React.useState(false);

  return (
    <div>
      <a className="project-link" target="_blank" href={props.url}>
        <div 
          className="project-tile"
          style={{backgroundImage: 'url(' + props.img + ')'}}
          onMouseOver={() => setMouseOver(true)}
          onMouseLeave={() => setMouseOver(false)}
        >
          <div className="project-text">
            {
              mouseOver ? 
              (
                <div>
                  <p className="project-desc">{props.desc}</p>
                  <div className="tech-list">
                    {props.tech.map(item => (
                      <p className="tech"><nobr>{item}</nobr></p>
                    ))}
                  </div>
                </div>
              ) :
              (<p className="project-name">{props.name}</p>)
            }
          </div>
        </div>
      </a>
    </div>
  )
}


 

const ProjectSection = (props) => (
  <div>
    <h2>{props.title}</h2>
    <div className="project-tiles">
    {
      props.projects.map(obj => (
        <ProjectTile 
          name={obj.name} 
          img={obj.img} 
          url={obj.url} 
          desc={obj.desc} 
          tech={obj.tech}
        />
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
        {
          this.state.projects.map((obj) => (
            <ProjectSection 
              title={obj.title} 
              projects={obj.projects} 
            />
          ))
        }
      </div>
    )
  }
}

ReactDOM.render(<ProjectLibrary />, document.getElementById('projects-render'));

