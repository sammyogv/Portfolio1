
import ProjectText from "./ProjectText.jsx";
import SingleProject from "./SingleProject.jsx";
import image1 from "../../assets/images/website1.jpg";
import image2 from "../../assets/images/website2.jpg";
import image3 from "../../assets/images/website4.jpg";




function ProjectMain(){

    const projects = [
        {
            name: "Weather App",
            year: 2025,
            link: "#",
            align: "right",
            image: image1
        },
        {
            name: "To Do List",
            year: 2025,
            link: "#",
            align: "left",
            image: image2
        },
        {
            name: "Stop Watch",
            year: 2025,
            link: "#",
            align: "right",
            image:image3
        }
    ];


    return(
       <div id="project" className="mx-auto max-w-[1200px] px-4 ">
          <ProjectText />
          <div className="gap-20 mt-12 flex flex-col flex-1">
            {projects.map((project, index) => (
              <SingleProject key={index} {...project} />
            ))}
          </div>
        </div>
    )
}

export default ProjectMain

