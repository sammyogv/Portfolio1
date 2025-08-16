
import { FaArrowRight } from "react-icons/fa";
import SingleExperience from "./SingleExperience.jsx";


function AllExperience(){


    const experience= [
        {
            Job: "Software Engineer",
            company: "Tech Solutions Inc.",
            year: "2021-2023",
            responsibilities: [
                "Developed and maintained web applications",
                "Collaborated with cross-functional teams",
                "Implemented new features based on client requirements",
                "Optimized application performance"
            ]
        },
        {
            Job: "Data Analyst",
            company: "Data Insights LLC",
            year: "2019-2021",
            responsibilities: [
                "Analyzed large datasets to extract insights",
                "Created data visualizations and reports",
                "Worked with stakeholders to define data needs",
                "Automated data processing tasks"
            ]
        },

        {
            Job: "Data Analyst",
            company: "Data Insights LLC",
            year: "2019-2021",
            responsibilities: [
                "Analyzed large datasets to extract insights",
                "Created data visualizations and reports",
                "Worked with stakeholders to define data needs",
                "Automated data processing tasks"
            ]
        },
    ] 


    return(
        <div className="flex sm:flex-col md:flex-row sm:justify-center gap-5 mt-[100px] mx-auto px-10 justify-center items-center  ">
            {experience.map((exp, index) => (
                <div className="flex justify-center gap-3 items-center ">
                    <SingleExperience key={index} experience={exp} />
                    {index < 2 ? <FaArrowRight className="text-orange text-7xl sm:hidden md:block" /> : ""}
                </div>
            ))}
        </div>
    )
}

export default AllExperience

