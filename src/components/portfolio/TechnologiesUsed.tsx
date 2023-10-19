import React from "react";
import "./technologies.css";
import Image from "next/image";

const TechnologiesUsed = () => {
  const images = [
    {
      image: "https://docs.amplify.aws/assets/logo-dark.svg",
      alt: "amplify",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg",
      alt: "android",
    },
    {
      image: "https://angular.io/assets/images/logos/angular/angular.svg",
      alt: "angular",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original-wordmark.svg",
      alt: "angularjs",
    },
    {
      image: "https://www.vectorlogo.zone/logos/appwriteio/appwriteio-icon.svg",
      alt: "appwrite",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      alt: "aws",
    },
    {
      image:
        "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
      alt: "azure",
    },
    {
      image: "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg",
      alt: "babel",
    },
    {
      image: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg",
      alt: "bash",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
      alt: "bootstrap",
    },
    {
      image: "https://cdn.worldvectorlogo.com/logos/cockroachdb.svg",
      alt: "cockroachdb",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      alt: "css3",
    },
    {
      image: "https://cdn.worldvectorlogo.com/logos/django.svg",
      alt: "django",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg",
      alt: "docker",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg",
      alt: "express",
    },
    {
      image: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
      alt: "figma",
    },
    {
      image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      alt: "firebase",
    },
    {
      image: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
      alt: "flutter",
    },
    {
      image:
        "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
      alt: "gcp",
    },
    {
      image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      alt: "git",
    },
    {
      image: "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
      alt: "heroku",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      alt: "html5",
    },
    {
      image:
        "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
      alt: "illustrator",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      alt: "java",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      alt: "javascript",
    },
    {
      image: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
      alt: "jenkins",
    },
    {
      image:
        "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
      alt: "kafka",
    },
    {
      image: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
      alt: "kubernetes",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
      alt: "linux",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      alt: "mongodb",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      alt: "mysql",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-plain.svg",
      alt: "nestjs",
    },
    {
      image: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg",
      alt: "nextjs",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg",
      alt: "nginx",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg",
      alt: "nodejs",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/oracle/oracle-original.svg",
      alt: "oracle",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg",
      alt: "photoshop",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
      alt: "postgresql",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      alt: "python",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      alt: "react",
    },
    {
      image: "https://reactnative.dev/img/header_logo.svg",
      alt: "reactnative",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg",
      alt: "redis",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
      alt: "redux",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
      alt: "sass",
    },
    {
      image: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
      alt: "spring",
    },
    {
      image:
        "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      alt: "tailwind",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      alt: "typescript",
    },
  ];

  return (
    <>
      <div className="mx-12 my-16 text-secondary technologies">
        <div className="text-center md:py-28 py-10">
          <h1 className="md:text-[36px] text-[24px] font-bold">
            Technologies{" "}
            <span className="md:text-[36px] text-[24px] text-primary">
              we have been using:
            </span>
          </h1>
          <p className="text-secondary text-[12px] md:text-[16px] font-semibold">
            {"'"}Any sufficiently advanced technology is indistinguishable from
            magic{"'"}
          </p>
        </div>
        <div className="slider">
          <div className="slide-track">
            {images.map((item, index) => (
              <Image
                className="slide text-center hover:scale-110 transform ease-in-out transition-all duration-300"
                key={index}
                src={item.image}
                alt={item.alt}
                width={40}
                height={40}
              />
            ))}

            {images.map((item, index) => (
              <Image
                className="slide text-center hover:scale-110 transform ease-in-out transition-all duration-300"
                key={index}
                src={item.image}
                alt={item.alt}
                width={40}
                height={40}
              />
            ))}

            {images.map((item, index) => (
              <Image
                className="slide text-center hover:scale-110 transform ease-in-out transition-all duration-300"
                key={index}
                src={item.image}
                alt={item.alt}
                width={40}
                height={40}
              />
            ))}

            {images.map((item, index) => (
              <Image
                className="slide text-center hover:scale-110 transform ease-in-out transition-all duration-300"
                key={index}
                src={item.image}
                alt={item.alt}
                width={40}
                height={40}
              />
            ))}

            {images.map((item, index) => (
              <Image
                className="slide text-center hover:scale-110 transform ease-in-out transition-all duration-300"
                key={index}
                src={item.image}
                alt={item.alt}
                width={40}
                height={40}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologiesUsed;
