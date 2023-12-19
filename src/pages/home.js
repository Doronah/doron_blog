import {Link, Outlet} from "react-router-dom";
import catImg from './cat.jpg';

export function Home() {
  return (
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Welcome to My Blog!</h1>
            <img src={catImg} alt=""/>
            <p className="lead text-body-secondary">
              Happy to see ypu here! I'm Doron. i am a student and love lerning rograming 
            </p>
            <p>
              <Link to="/posts" className="btn btn-primary my-2">Go to posts</Link>
            </p>
          </div>
        </div>
      </section>
  );
}