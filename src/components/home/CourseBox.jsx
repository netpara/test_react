export default function CourseBox(props){
return(
<div>
    <h2>{props?.course?.title}</h2>
    <p>{props?.course?.details}</p>
    <span>time : 10</span>
</div>
)
}