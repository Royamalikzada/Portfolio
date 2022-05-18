export default class Project {
    constructor (title, image, technologies, gitCode) {
        this.title = title;
        this.image = image;
        this.technolgies = technologies;
        this.gitCode = gitCode;
    }

    createProject() {
        return (
            <div className="col-md-4 col-sm-12">
                <div>
                    <div className="card text-center visibleBorder mb-3" style={{width: "100%"}}>
                        <img src={this.image} className="card-img-top" style={{height: "20rem"}} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{this.title}</h5>
                            <p className="card-text">{this.technolgies}</p>
                            <a href={this.gitCode} style={{textDecoration: "none"}} target="_blank" className="selectedBtn selectedColor p-2">Go to the Git</a>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}