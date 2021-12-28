import {
  faCheckCircle,
  faClock,
  faFilePdf,
  faGraduationCap,
  faHandPaper,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "animate.css";
import FadeImage from "../components/atoms/FadeImage";
import Text from "../components/atoms/Text";
import ElevatedButton from "../components/molecules/ElevatedButton";
import Navbar from "../components/organisms/Navbar";
import InterestCard from "../components/molecules/InterestCard";
import PingNotification from "../components/atoms/PingNotification";

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Saddam Sinatrya Jalu Mukti</title>
        </Helmet>
        <Navbar />
        <HeroSection />
        <QualificationSection />
      </div>
    );
  }
}

function HeroSection() {
  const interests = [
    {
      name: "Android App Development",
      src: "/icons/icons8-flutter.svg",
      alt: "Flutter",
      href: "flutter.dev",
    },
    {
      name: "Web App Development",
      src: "/icons/icons8-react.svg",
      alt: "React",
      href: "reactjs.org",
    },
    {
      name: "Data Science",
      src: "/icons/icons8-python.svg",
      alt: "Python",
      href: "kaggle.com",
    },
    {
      name: "Cryptocurrency & NFT",
      src: "/icons/icons8-ethereum.svg",
      alt: "Ethereum",
      href: "facebook.com/groups/kkpc.id",
    },
    {
      name: "Metaverse",
      src: "/icons/icons8-meta.svg",
      alt: "Metaverse",
      href: "reddit.com/r/metaverse",
    },
  ];

  return (
    <main className="container py-12 md:py-16 lg:py-20 grid grid-cols-none md:grid-cols-3 items-center md:gap-10 lg:gap-20">
      <div className="hidden md:block">
        <FadeImage
          src="/images/avatar.png"
          alt="Avatar Meta"
          className="animate__animated animate__fadeInUp mb-4"
        />
        <Text caption className="text-center">
          Auto Generated by&nbsp;
          <Link to="//readyplayer.me" className="text-blue-600">
            Ready Player Me
          </Link>
        </Text>
      </div>
      <div className="md:col-span-2">
        <Text
          headline4
          className="text-indigo-600 animate__animated animate__slideInRight"
        >
          <FontAwesomeIcon
            icon={faHandPaper}
            className="text-orange-500 mr-4 animate__animated animate__wobble animate__delay-1s animate__repeat-3"
          />
          <span>Introduce me,</span>
        </Text>
        <Text
          headline2
          className="animate__animated animate__slideInRight mb-4 sm:max-w-4xl"
        >
          Saddam Sinatrya Jalu Mukti
        </Text>
        <Text
          body1
          className="animate__animated animate__slideInRight sm:max-w-xl mb-6"
        >
          A passionate and rational developer who wants to learn and evolve with
          a team. Experienced with the latest cutting-edge development tools and
          tech stack.
        </Text>
        <div className="animate__animated animate__slideInRight mb-6">
          <Text headline5 className="mb-2">
            My Interests
          </Text>
          <div className="flex gap-0 sm:gap-4 md:gap-6">
            <div className="shrink">
              {interests.slice(0, 3).map((item) => (
                <InterestCard
                  name={item.name}
                  src={item.src}
                  alt={item.alt}
                  href={item.href}
                />
              ))}
            </div>
            <div className="shrink">
              {interests.slice(3).map((item) => (
                <InterestCard
                  name={item.name}
                  src={item.src}
                  alt={item.alt}
                  href={item.href}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="sm:flex sm:justify-center lg:justify-start">
          <PingNotification>
            <ElevatedButton>
              <FontAwesomeIcon icon={faFilePdf} className="mr-4" />
              <span>Download CV</span>
            </ElevatedButton>
          </PingNotification>
        </div>
      </div>
    </main>
  );
}

function QualificationSection() {
  const educations = [
    {
      name: "State University of Malang",
      status: false,
      description: "2019-2023 (Expected)",
    },
    {
      name: "Boyolangu State Vocational High School 1",
      status: true,
      description: "2016-2019 (With Highest Grade)",
    },
  ];

  return (
    <section className="bg-gray-50">
      <div className="container py-4 sm:py-6 md:py-8 lg:py-10 flex flex-wrap items-center">
        <div className="basis-1/3">
          <Text headline5 className="text-center">
            <FontAwesomeIcon icon={faGraduationCap} /> Educations
          </Text>
          <div className="grid grid-cols-12 text-white">
            {educations.map((item) => (
              <div className="flex md:contents">
                <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                  <div className="h-full w-6 flex items-center justify-center">
                    <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                  </div>
                  <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                    <FontAwesomeIcon
                      icon={item.status ? faCheckCircle : faClock}
                    />
                  </div>
                </div>
                <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                  <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
                  <p className="leading-tight text-justify w-full">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
