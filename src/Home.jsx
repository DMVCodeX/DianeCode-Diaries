export function Home() {
  return (
    <div className="container-fluid">
      <h1 className="center-text main-heading m-4">Dianes Code Diaries</h1>
      <img className=" rounded-5 center-image " src="https://avatars.githubusercontent.com/u/122197490?v=4" alt="" />

      <div className="center-text m-5">
        <a
          className="a-tag"
          href={
            "https://docs.google.com/document/d/1gchmlZLRTPBWpAXw1CxJoviSzonqgOLx/edit?usp=sharing&ouid=109020970947806247945&rtpof=true&sd=true"
          }
          target="_blank"
          rel="noreferrer"
        >
          {/* Link PDF */}
          <h2 className="center-text pink-font m-1 d-inline">
            {" "}
            Resume{" "}
            <img
              className=""
              src="https://img.icons8.com/?size=512&id=24239&format=png"
              alt=""
              width="40"
              height="40"
            />
          </h2>
        </a>

        <a className="a-tag" href={"https://fitgenie.netlify.app/"} target="_blank" rel="noreferrer">
          <h2 className="center-text pink-font m-1 d-inline">
            {" "}
            FitGenie App{" "}
            <img
              className=""
              src="https://img.icons8.com/?size=512&id=23938&format=png"
              alt=""
              width="40"
              height="40"
            />
          </h2>
        </a>

        <a className="a-tag" href="/blog" rel="noreferrer">
          <h2 className="center-text pink-font m-1 d-inline">
            {" "}
            Blog{" "}
            <img
              className=""
              src="https://img.icons8.com/?size=512&id=NvKD1nx5oUzn&format=png"
              alt=""
              width="40"
              height="40"
            />
          </h2>
        </a>
      </div>

      <h2 className="center-text m-4 "> Tech Stack</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title pink-font">Backend</h3>
              <p className="card-text">
                <ul>
                  <li>
                    {" "}
                    Ruby{" "}
                    <img src="https://img.icons8.com/?size=512&id=22189&format=png" alt="" width="30" height="30" />
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title pink-font">Database</h3>
              <p className="card-text">
                <ul>
                  <li>
                    PostgreSQL{" "}
                    <img src="https://img.icons8.com/?size=512&id=38600&format=png" alt="" width="30" height="30" />
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title pink-font">Frontend</h3>
              <p className="card-text">
                <ul>
                  <li>
                    {" "}
                    JavaScrpit{" "}
                    <img
                      src="https://img.icons8.com/?size=512&id=WOB9D18y7S7J&format=png"
                      alt=""
                      width="30"
                      height="30"
                    />
                  </li>
                  <li>
                    HTML <img src="https://img.icons8.com/?size=512&id=2778&format=png" alt="" width="30" height="30" />
                  </li>
                  <li>
                    CSS <img src="https://img.icons8.com/?size=512&id=38273&format=png" alt="" width="30" height="30" />
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title pink-font">Frameworks</h3>
              <p className="card-text">
                <ul>
                  <li>
                    Ruby on Rails{" "}
                    <img
                      src="https://img.icons8.com/?size=512&id=ZMFmFsekpKfY&format=png"
                      alt=""
                      width="35"
                      height="35"
                    />
                  </li>
                  <li>
                    React.js{" "}
                    <img src="https://img.icons8.com/?size=512&id=58811&format=png" alt="" width="30" height="30" />
                  </li>

                  <li>
                    Bootstrap{" "}
                    <img
                      src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
                      alt=""
                      width="30"
                      height="30"
                    />
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
