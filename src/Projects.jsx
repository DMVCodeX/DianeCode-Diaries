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
              <ol>
                FitGenie is a cutting-edge fitness application meticulously crafted using the Ruby on Rails framework,
                which seamlessly adheres to the Model-View-Controller (MVC) architecture and embraces the principles of
                RESTful API conventions. This dynamic web app redefines the fitness journey with a plethora of robust
                features designed to empower users on their path to a healthier lifestyle. Key Functionalities:
                <br />
                <br />
                <li>
                  Workout Customization: FitGenie is your fitness architect. It offers a diverse library of workouts,
                  allowing users to curate personalized workout plans tailored to their fitness goals.
                </li>
                <br />
                <li>
                  Comprehensive Workout Resources: For every workout, users have access to a treasure trove of
                  resources, including high-resolution images, detailed step-by-step descriptions, and instructive
                  videos, ensuring they perform exercises with precision and confidence.
                </li>
                <br />
                <li>
                  Google Calendar Integration: Staying committed to your fitness regimen is a breeze with FitGenie. The
                  app seamlessly integrates with Google Calendar, enabling users to effortlessly schedule their workouts
                  without leaving the platform. FitGenie is not just an app; it is your virtual fitness companion,
                  simplifying gym planning, elevating workout experiences, and empowering you to reach your fitness
                  milestones. Your journey to a healthier, more active lifestyle begins here.
                </li>
              </ol>
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
