import CourseBox from "./CourseBox";

export default function Main(){
return(
<div>
    <h1>
        hi parstoo
    </h1>
    {/* <CourseBox course={{
        title: "course number one",
        details : "this is about the course"
    }}/> */}
    <CourseBox title="javascript course" detailes="javascript details..." />
    <CourseBox title="react course " />
</div>
)
}