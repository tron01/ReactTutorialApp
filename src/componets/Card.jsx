import LoginBtn from "./LoginBtn";
import CardTitle from "./CardTitle";
import CardText from "./CardText";

const Card =({ text,Title })=>{
    return (
        <div class="card w-50 bg-dark text-white">
        <div class="card-body">
          
          <CardTitle ctitle={Title}></CardTitle>
          <CardText ctext={text}></CardText>
          <LoginBtn/>
         
        </div>

      </div>
    )
}

export default Card