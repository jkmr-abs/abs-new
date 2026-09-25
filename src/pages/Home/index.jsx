import Footer from '../../components/Footer';
import data from '../../data/data';
import ClientsSection from './Clients/ClientsSection';
import ExpertiseSection from './Expertise/ExpertiseSection';
import HeroSection from './Hero/HeroSection';
import ServicesSection from './Services/ServicesSection';
import TeamsSection from './Teams/TeamsSection';

function Home({ onNavigate }) {
  return (
    <>
      <HeroSection data={data.hero} onNavigate={onNavigate} />
      <ServicesSection services={data.services} />
      <ExpertiseSection data={data.expertise} />
      <ClientsSection data={data.clients} />
      <TeamsSection data={data.teams} />
      <Footer onNavigate={onNavigate} />
    </>
  );
}

export default Home;
