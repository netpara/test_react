import CourseBox from "./CourseBox";
import CourseList from "./CourseList";

export default function Main(){
return(
<div>
    <h1>
        hi parstoo
    </h1>
    <CourseList>
    
        <CourseBox course={{
        title: "course number one",
        details : "this is about the course"
    }}/>
        <CourseBox course={{
        title: "course number two",
        details : "this is about the course"
    }}/>
        <CourseBox course={{
        title: "course number tree",
        details : "this is about the course"
    }}/>
    </CourseList>

</div>
)
}