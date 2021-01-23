import React from 'react'

const ProjectDetails = (props) => {

    const id = props.match.params.id

    return (
        <div className="container section project-detils">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>lorem ipsum dolor sit amet consectetur lorem ipsum dolor sit amet consecteturlorem Poste ipsum dolor sit amet consectetur</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Martins</div>
                    <div>21st January, 2021</div>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectDetails
