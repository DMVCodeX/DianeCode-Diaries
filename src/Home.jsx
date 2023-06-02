export function Home() {
  return (
    <div className="container-fluid">
      <h1 className="center-text main-heading m-4">Dianes Code Diaries</h1>
      <img className=" rounded-3 center-image " src="https://avatars.githubusercontent.com/u/122197490?v=4" alt="" />

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
          <h4 className="center-text pink-font  d-inline">
            {" "}
            Resume{" "}
            <img
              className=""
              src="https://img.icons8.com/?size=512&id=24239&format=png"
              alt=""
              width="40"
              height="40"
            />
          </h4>
        </a>

        <a className="a-tag" href={"https://fitgenie.netlify.app/"} target="_blank" rel="noreferrer">
          <h4 className="center-text pink-font m-1 d-inline">
            {" "}
            FitGenie App{" "}
            <img
              className=""
              src="https://img.icons8.com/?size=512&id=23938&format=png"
              alt=""
              width="40"
              height="40"
            />
          </h4>
        </a>

        <a className="a-tag" href="/blog" rel="noreferrer">
          <h4 className="center-text pink-font m-1 d-inline">
            {" "}
            Blog{" "}
            <img
              className=""
              src="https://img.icons8.com/?size=512&id=NvKD1nx5oUzn&format=png"
              alt=""
              width="40"
              height="40"
            />
          </h4>
        </a>
      </div>
      <hr />
      <h2 className="center-text m-3 "> Tech Stack</h2>

      <hr />

      <div className="row row-cols-md-1 g-4 center-text">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title pink-font">Backend</h3>
              <p className="card-text">
                {" "}
                Ruby <img src="https://img.icons8.com/?size=512&id=22189&format=png" alt="" width="30" height="30" />
                <br />
                JavaScrpit OOP{" "}
                <img src="https://img.icons8.com/?size=512&id=RwtOBojoLS2N&format=png" alt="" width="30" height="30" />
              </p>
            </div>
          </div>
        </div>
        <br />
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title pink-font">Database</h3>
              <p className="card-text">
                PostgreSQL{" "}
                <img src="https://img.icons8.com/?size=512&id=38561&format=png" alt="" width="30" height="30" />
                <br />
                Prisma{" "}
                <img src="https://img.icons8.com/?size=512&id=aqb9SdV9P8oC&format=png" alt="" width="30" height="30" />
                <br />
                MySQL{" "}
                <img src="https://img.icons8.com/?size=512&id=UFXRpPFebwa2&format=png" alt="" width="40" height="40" />
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title pink-font">Frontend</h3>
              <p className="card-text">
                {" "}
                JavaScrpit{" "}
                <img src="https://img.icons8.com/?size=512&id=RwtOBojoLS2N&format=png" alt="" width="30" height="30" />
                <br />
                HTML5 <img src="https://img.icons8.com/?size=512&id=20909&format=png" alt="" width="30" height="30" />
                <br />
                CSS <img src="https://img.icons8.com/?size=1x&id=21278&format=png" alt="" width="30" height="30" />
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title pink-font">Frameworks</h3>
              <p className="card-text">
                Ruby on Rails{" "}
                <img src="https://img.icons8.com/?size=512&id=ZMFmFsekpKfY&format=png" alt="" width="35" height="35" />
                <br />
                Express.js{" "}
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEX////q6uqgoaEZGhtzc3SSk5Ourq5hYmLHx8f09PVOTk+7u7vf39+DhITT09M3ODgiPZ4kAAAAxElEQVR4Ac2OMQgBARSGv6sDQfbSKaWsHsgV6vZS9lK3F9lL2ctsvcmm7GWfyF5XNhvTbef+yT7x1ft7/f3/6/HHOC3r1gnmQLhGamYjDj5U7ALk7UbD4tp4T2EA4EnDFeGMxQygdQWqEwp+OQsBkXrlAU76nAA4Y2mlB2drotVMDMHN5mtMwbMYVeQjNsEKkaJcm3wv10fcl4Dr8zgSnQB2L/RYKdrKA3LW0etun6yFCMwsyTK6qzrFu733xbQOeAk/4gMf6S1GJRc9sQAAAABJRU5ErkJggg=="
                  alt=""
                  width="30"
                  height="30"
                />
                <br />
                React.js{" "}
                <img src="https://img.icons8.com/?size=512&id=123603&format=png" alt="" width="30" height="30" />
                <br />
                Bootstrap{" "}
                <img
                  src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
                  alt=""
                  width="30"
                  height="30"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
