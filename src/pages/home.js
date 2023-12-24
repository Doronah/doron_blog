import {Link, Outlet} from "react-router-dom";
import catImg from './cat.jpg';

export function Home() {
  return (
      <section className="center-container">
          <div className="cols">
            <h1 className="sen">Welcome to My Blog!</h1>
            <img src={catImg} alt=""/>
            <p className=" text-body">
              Happy to see ypu here! I'm Doron. i am a student and love lerning rograming 
            </p>
            <p>
              <Link to="/posts" className="btn btn-primary">Go to posts</Link>
            </p>
          </div>
      </section>
  );
}