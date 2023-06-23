export function Projects() {
  return (
    <>
      <div className="container-fluid">
        <h1 className="center-text main-heading m-4">Projects</h1>
        <img
          className="center-image "
          src="https://img.icons8.com/?size=512&id=9XLTd4dQZtZ9&format=png"
          alt=""
          width="200"
          height="200"
        />
        <hr />
        <div className="center-text m-5">
          <div>
            <a className="a-tag" href={"https://fitgenie.netlify.app/"} target="_blank" rel="noreferrer">
              <h2 className="center-text pink-font m-1">
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
            <br />
            <h5>
              FitGenie is a single page fitness web application designed to enhance the efficiency of gym planning and
              workout routines through its user-friendly interface, empowering users to effortlessly customize and
              manage their individualized workout plans.
            </h5>
            <br />
          </div>
          <hr />

          <br />
          <div>
            <a className="a-tag" href="/blog" rel="noreferrer">
              <h2 className="center-text pink-font m-1">
                {" "}
                Github Portfolio{" "}
                <img
                  className=""
                  src="https://img.icons8.com/?size=512&id=16318&format=png"
                  alt=""
                  width="40"
                  height="40"
                />
              </h2>
            </a>
            <br />
          </div>
          <hr />
          <br />

          <a className="a-tag" href="/blog" rel="noreferrer">
            <h2 className="center-text pink-font m-1">
              {" "}
              Blog{" "}
              <img
                className=""
                src="https://img.icons8.com/?size=512&id=12446&format=png"
                alt=""
                width="40"
                height="40"
              />
            </h2>
          </a>
          <hr />
          <br />
        </div>
      </div>
    </>
  );
}
