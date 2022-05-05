import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import SoryIMG from "../components/images/sorry-image.jpg"


const LoadingToRedirectAdmin = () => {
    const [count,setCount] = useState(3);
    const history = useHistory();
    useEffect(()=>{
      const interval = setInterval(()=>{
          setCount((currentCount)=>--currentCount)
      },1000);
      count === 0 && history.push("/hsam-admin");
      return ()=>clearInterval(interval);
    },[count,history]);
    return (
      <div>
        <img style={{maxWidth: "35rem", marginLeft: "25rem"}} alt="sryIMG" src={SoryIMG} />
        <p>You can't access some page without login that's why you are, Redirecting to login page to you in {count} seconds</p>
      </div>
    )
}

export default LoadingToRedirectAdmin