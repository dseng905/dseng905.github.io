
class ProjectTile extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false
    }
  }

  render(){
    return (
      <div>
        <a className="project-link" target="_blank" href={this.props.url}>
          <div 
            className="project-tile"
            style={{
              backgroundSize: 'cover', 
              backgroundImage: 'url(' + this.props.img + ')'
            }}
            onMouseOver={() => this.setState({mouseOver: true})}
            onMouseLeave={() => this.setState({mouseOver: false})}
          >
            <div className="project-text">
              {
                this.state.mouseOver ? 
                (
                  <div>
                    <p className="project-desc">{this.props.desc}</p>
                    <div className="tech-list">
                      {this.props.tech.map(item => (<p className="tech"><nobr>{item}</nobr></p>))}
                    </div>
                  </div>
                ) :
                (<p className="project-name">{this.props.name}</p>)
              }
            </div>
          </div>
        </a>
      </div>
    )
  }
}
 

const ProjectSection = (props) => (
  <div>
    <h2>{props.title}</h2>
    <div className="project-tiles">
    {
      props.projects.map(obj => (
        <ProjectTile name={obj.name} img={obj.img} url={obj.url} desc={obj.desc} tech={obj.tech}/>
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

