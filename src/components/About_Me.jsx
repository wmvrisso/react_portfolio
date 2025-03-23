const AboutMe = () => {
  return (
    <main>
      {/* First Grid */}
      <section className="w3-row-padding w3-padding-64 w3-container">
        <div className="w3-content">
          <div className="w3-twothird w3-padding-large">
            <h1>EQUAL VS UNEQUAL</h1>
            <h5 className="w3-padding-16">
              In the example below, you will see shapes divided into equal parts
              and unequal parts.
            </h5>
          </div>
        </div>
      </section>

      <hr className="styled-line" />

      {/* Second Grid */}
      <section className="w3-row-padding w3-light-grey w3-padding-64 w3-container">
        <div className="w3-content">
          <div className="w3-third w3-center">
            <i className="w3-padding-64 w3-text-red w3-margin-right"></i>
          </div>

          <div className="w3-twothird w3-padding-large">
            <h1>GIVE IT A TRY!</h1>
            <h5 className="w3-padding-16">
              Identify 4 shapes that have been split into equal parts and answer
              the question below.
            </h5>
          </div>
        </div>
        <div
          className="w3-container"
          style={{
            float: "left",
            width: "100%",
            textAlign: "center",
            padding: "20px",
          }}
        ></div>
      </section>
    </main>
  );
};

export default AboutMe;
