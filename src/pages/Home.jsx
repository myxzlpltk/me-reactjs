import 'animate.css';

import React, { Component } from 'react';
import { faEnvelope, faFilePdf, faHandPaper, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faReact, faTwitter } from '@fortawesome/free-brands-svg-icons';

import ElevatedButton from '../components/molecules/ElevatedButton';
import FadeImage from '../components/atoms/FadeImage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment } from 'react/cjs/react.production.min';
import { Helmet } from 'react-helmet';
import InterestCard from '../components/molecules/InterestCard';
import Navbar from '../components/organisms/Navbar';
import PingNotification from '../components/atoms/PingNotification';
import ProjectCard from '../components/molecules/ProjectCard';
import Text from '../components/atoms/Text';

class Home extends Component {
	render() {
		return (
			<div>
				<Helmet>
					<title>Saddam Sinatrya Jalu Mukti</title>
				</Helmet>
				<Navbar />
				<HeroSection />
				<PortfolioSection />
				<ContactSection />
			</div>
		);
	}
}

const HeroSection = () => {
	const interests = [
		{
			name: 'Android App Development',
			src: '/icons/icons8-flutter.svg',
			alt: 'Flutter',
			href: 'flutter.dev'
		},
		{
			name: 'Web App Development',
			src: '/icons/icons8-react.svg',
			alt: 'React',
			href: 'reactjs.org'
		},
		{
			name: 'Data Science',
			src: '/icons/icons8-python.svg',
			alt: 'Python',
			href: 'kaggle.com'
		},
		{
			name: 'Cryptocurrency & NFT',
			src: '/icons/icons8-ethereum.svg',
			alt: 'Ethereum',
			href: 'facebook.com/groups/kkpc.id'
		},
		{
			name: 'Metaverse',
			src: '/icons/icons8-meta.svg',
			alt: 'Metaverse',
			href: 'reddit.com/r/metaverse'
		}
	];

	return (
		<main className="container pt-16 md:py-20 lg:py-24 pb-12 md:pb-16 lg:pb-20  grid grid-cols-none md:grid-cols-3 items-center md:gap-10 lg:gap-20" id="about-me">
			<div className="hidden md:block">
				<FadeImage
					src="/images/avatar.png"
					alt="Avatar Meta"
					className="animate__animated animate__fadeInUp mb-4"
				/>
				<Text caption className="text-center">
					Auto Generated by&nbsp;
					<a href="https://readyplayer.me" target="_blank" rel="noreferrer" className="text-blue-600">
						Ready Player Me
					</a>
				</Text>
			</div>
			<div className="md:col-span-2">
				<Text headline4 className="text-indigo-600 mb-4">
					<FontAwesomeIcon
						icon={faHandPaper}
						className="text-orange-500 mr-4 animate__animated animate__wobble animate__delay-1s animate__repeat-3"
					/>
					<span>Introduce me,</span>
				</Text>
				<Text headline2 className="mb-4 sm:max-w-4xl">
					Saddam Sinatrya Jalu Mukti
				</Text>
				<Text body1 className="sm:max-w-xl mb-6">
					A passionate and rational developer who wants to learn and evolve with a team. Experienced with the
					latest cutting-edge development tools and tech stack.
				</Text>
				<div className="mb-6">
					<Text headline5 className="mb-2">
						My Interests
					</Text>
					<div className="flex gap-0 sm:gap-4 md:gap-6">
						<div className="shrink">
							{interests
								.slice(0, 3)
								.map((item, i) => (
									<InterestCard
										key={`interest-${i}`}
										name={item.name}
										src={item.src}
										alt={item.alt}
										href={item.href}
									/>
								))}
						</div>
						<div className="shrink">
							{interests
								.slice(3)
								.map((item, i) => (
									<InterestCard
										key={`interest-${i}`}
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
						<ElevatedButton external to="//docs.google.com/document/d/1xLH3Dk8vcmizpPnb9Z0KvpRQFQuP8rbjqpbbZjcJFfM/edit?usp=sharing">
							<FontAwesomeIcon icon={faFilePdf} className="mr-4" />
							<span>Download CV</span>
						</ElevatedButton>
					</PingNotification>
				</div>
			</div>
		</main>
	);
};

const PortfolioSection = () => {
	let projects = [
		{ key: '1', name: 'Metaverse', src: 'https://fakeimg.pl/350x200/?text=Hello' },
		{ key: '2', name: 'Metaverse', src: 'https://fakeimg.pl/350x200/?text=Hello' },
		{ key: '3', name: 'Metaverse', src: 'https://fakeimg.pl/350x200/?text=Hello' },
		{ key: '4', name: 'Metaverse', src: 'https://fakeimg.pl/350x200/?text=Hello' },
		{ key: '5', name: 'Metaverse', src: 'https://fakeimg.pl/350x200/?text=Hello' }
	];

	return (
		<Fragment>
			<section className="bg-indigo-700" id="portfolio">
				<div className="container py-12 md:py-16 lg:py-20 items-center">
					<Text headline4 className="text-white text-center mb-4">
						My Portfolio
					</Text>
					<Text body2 className="text-white text-center max-w-4xl mx-auto">
						I've been learning many programming languages since 2016. Programming isn't just about coding as
						long as it works on my machine, but also developing something artistic. Imagine all the code
						works each other, forming a beautiful framework with clean and efficient code. Your program goes
						beyond source code because it's maintainable. However, here are some my achievement.
					</Text>
				</div>
			</section>
			<section className="-mt-10 mb-8">
				<div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-4 mb-8">
					{projects.map((item) => <ProjectCard key={item.key} name={item.name} src={item.src} />)}
				</div>
				<div className="container flex justify-center">
					<ElevatedButton external to="//github.com/myxzlpltk">
						<FontAwesomeIcon icon={faGithub} className="mr-4" />
						<span>See more at Github</span>
					</ElevatedButton>
				</div>
			</section>
		</Fragment>
	);
};

const ContactSection = () => {
	let contacts = [
		{ icon: faTwitter, href: 'http://twitter.com/myxzlpltk', name: 'Twitter' },
		{ icon: faGithub, href: 'http://github.com/myxzlpltk', name: 'Github' },
		{ icon: faEnvelope, href: 'mailto:saddam.binary@gmail.com', name: 'Email' }
	];

	return (
		<Fragment>
			<div className="h-20 w-full" />
			<section className="bg-indigo-700" id="contacts">
				<div className="container py-6 md:py-8 lg:py-10">
					<div className="flex flex-col md:flex-row gap-4 items-center p-16 max-w-5xl mx-auto bg-indigo-900 rounded-lg -mt-24 mb-16 text-white shadow-md">
						<div className="flex-1">
							<Text headline5 className="text-center">
								Start a project
							</Text>
						</div>
						<div className="flex-1">
							<Text body2 className="text-center">
								Interested in working together? We should queue up a chat. I’ll buy the coffee.
							</Text>
						</div>
						<div className="flex-1">
							<div className="flex items-center justify-center">
								<ElevatedButton>
									<span>Let's do this!</span>
								</ElevatedButton>
							</div>
						</div>
					</div>
					<img src="/images/logo-white.svg" alt="Logo" className="h-16 mx-auto mb-4" />
					<Text headline6 className="text-indigo-200 text-center font-light max-w-md mx-auto mb-8">
						Contact me at one of the following
					</Text>
					<div className="flex justify-center items-center mb-8">
						{contacts.map((item, i) => (
							<a key={`contact-${i}`} href={item.href} target="_blank" rel="noreferrer">
								<div
									key={item.name.toLowerCase()}
									className="flex items-center justify-center rounded-full border-2 border-white text-white hover:text-indigo-700 hover:bg-white duration-300 mb-4 mx-2 p-4"
								>
									<FontAwesomeIcon icon={item.icon} />
								</div>
							</a>
						))}
					</div>
					<Text body2 className="text-white text-center mx-auto">
						<span>Made with</span>
						<FontAwesomeIcon icon={faHeart} className="mx-2 text-red-500" fixedWidth />
						<span>and</span>
						<FontAwesomeIcon icon={faReact} className="mx-2" fixedWidth />
					</Text>
				</div>
			</section>
		</Fragment>
	);
};

export default Home;
