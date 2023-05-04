export function Home() {
  return (
    <div className="container-fluid">
      <h1 className="center-text main-heading m-4">Dianes Code Diaries</h1>

      <img className="center-image" src="https://avatars.githubusercontent.com/u/122197490?v=4" alt="" />
      <a
        className="a-tag"
        href={"https://docs.google.com/document/d/1gchmlZLRTPBWpAXw1CxJoviSzonqgOLx/edit"}
        target="_blank"
        rel="noreferrer"
      >
        <h2 className="center-text pink-font m-5">
          {" "}
          Resume{" "}
          <img className="" src="https://img.icons8.com/?size=512&id=24239&format=png" alt="" width="40" height="40" />
        </h2>
      </a>
      <h2 className="center-text m-4"> Tech Stack</h2>
      <h3 className="center-text pink-font m-3"> Backend:</h3>
      <p className="center-text">
        Ruby <img src="https://img.icons8.com/?size=512&id=22189&format=png" alt="" width="30" height="30" />
      </p>
      <h3 className="center-text pink-font m-3"> Frontend:</h3>
      <p className="center-text">
        JavaScrpit{" "}
        <img src="https://img.icons8.com/?size=512&id=WOB9D18y7S7J&format=png" alt="" width="30" height="30" />
      </p>
      <p className="center-text">
        HTML <img src="https://img.icons8.com/?size=512&id=2778&format=png" alt="" width="30" height="30" />
      </p>
      <p className="center-text">
        CSS <img src="https://img.icons8.com/?size=512&id=38273&format=png" alt="" width="30" height="30" />
      </p>
      <h3 className="center-text pink-font m-3"> Database:</h3>
      <p className="center-text">
        PostgreSQL <img src="https://img.icons8.com/?size=512&id=38600&format=png" alt="" width="30" height="30" />
      </p>
      <h3 className="center-text pink-font m-3"> Frameworks:</h3>
      <p className="center-text">Ruby on Rails</p>
      <p className="center-text">React.js</p>
      <p className="center-text">Bootstrap</p>
    </div>
  );
}
