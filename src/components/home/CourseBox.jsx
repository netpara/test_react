export default function CourseBox({ title: ti , detailes = "default"}){
return(
<div>
    <h2>{ti}</h2>
    <p>{detailes}</p>
    <span>time : 10</span>
</div>
)
}