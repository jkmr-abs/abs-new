import Footer from '../../components/Footer';
import ClientSection from './components/ClientSection';
import ExpertiseSection from './components/ExpertiseSection';
import HomeSection from './components/HomeSection';
import ServiceSection from './components/ServiceSection';
import TeamSection from './components/TeamSection';

function Home({ onNavigate }) {
  return (
    <>
      <HomeSection onNavigate={onNavigate} />
      <ServiceSection onNavigate={onNavigate} />
      <ExpertiseSection onNavigate={onNavigate} />
      <ClientSection onNavigate={onNavigate} />
      <TeamSection onNavigate={onNavigate} />
      <Footer onNavigate={onNavigate} />
    </>
  );
}

export default Home;
