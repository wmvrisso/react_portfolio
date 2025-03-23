import React from "react";

const Resume = () => {
  return (
    <div className="resume-container p-8 bg-gray-900 text-white">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Radzion</h1>
        <span className="bg-green-500 text-black px-2 py-1 rounded">
          7 years of experience
        </span>
        <span className="bg-purple-600 px-2 py-1 rounded">CS Degree</span>
        <button className="bg-blue-500 px-4 py-2 rounded">Download</button>
      </header>
      <p className="mb-4">
        💪 React, TypeScript, UX/UI, Web3 + AWS, Node.js, DynamoDB
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-bold">Web3</h2>
        <div>
          <h3>Front-end Engineer at Terraform Labs 🌍</h3>
          <p>2 years 5 months (Mar 2022 - Aug 2024)</p>
          <ul>
            <li>Developed features using React and TypeScript.</li>
            <li>Built front-ends for NFT protocols using Next.js.</li>
            <li>
              Led front-end and back-end development for Enterprise Protocol.
            </li>
            <li>Integrated DynamoDB with Node.js.</li>
          </ul>
        </div>
        <div>
          <h3>Front-end Engineer at IOG ❄️</h3>
          <p>5 months (Sep 2021 - Feb 2022)</p>
          <ul>
            <li>Developed NFT gallery for Lace using React and TypeScript.</li>
            <li>Enhanced wallet functionalities and UX/UI improvements.</li>
          </ul>
        </div>
        <div>
          <h3>Front-end Engineer at Zerion 🌐</h3>
          <p>10 months (Oct 2020 - Aug 2021)</p>
          <ul>
            <li>Improved wallet management for Zerion.</li>
            <li>Integrated staking and internationalization with React.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold">Full-Stack</h2>
        <div>
          <h3>Senior Software Developer at Kontist 📈</h3>
          <p>1 year 2 months (Jul 2019 - Sep 2020)</p>
          <ul>
            <li>Improved onboarding using React and React Native.</li>
            <li>Developed a web app with TypeScript.</li>
            <li>Built back-end features with Node.js and PostgreSQL.</li>
          </ul>
        </div>
        <div>
          <h3>Software Developer at KREO 🏗️</h3>
          <p>2 years 2 months (Apr 2017 - Jun 2019)</p>
          <ul>
            <li>Led development for construction software with React.</li>
            <li>Implemented a floor plan editor.</li>
            <li>Managed infrastructure with AWS and Terraform.</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-bold">My Projects</h2>
        <div>
          <h3>Increaser</h3>
          <p>
            A productivity toolkit built with TypeScript and React, deployed on
            AWS with Terraform.
          </p>
        </div>
        <div>
          <h3>RadzionKit ⭐253</h3>
          <p>
            A full-stack toolkit for React, Node.js, and DynamoDB, built as a
            TypeScript monorepo.
          </p>
        </div>
        <div>
          <h3>Radzion Dev 📺1940 subscribers</h3>
          <p>
            A YouTube channel covering React, TypeScript, and AWS for
            developers.
          </p>
        </div>
      </section>

      <footer className="flex justify-around p-4 bg-gray-800">
        <p>📧 radzionc@gmail.com</p>
        <p>💼 radzionc</p>
        <p>🔗 radzion</p>
      </footer>
    </div>
  );
};

export default Resume;
