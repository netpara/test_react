export default function CourseBox({course}){
return(
<div>
    <h2>{course?.title}</h2>
    <p>{course?.details}</p>
    <span>time : 13</span>
</div>
)
}