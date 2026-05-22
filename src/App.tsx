import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Realisations } from './components/Realisations';
import { Apps } from './components/Apps';
import { Partners } from './components/Partners';
import { SaaS } from './components/SaaS';
import { GithubRepos } from './components/GithubRepos';
import { Stack } from './components/Stack';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { InstallPrompt } from './components/InstallPrompt';
import { UpdatePrompt } from './components/UpdatePrompt';
import './index.css';

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Stack />
        <Realisations />
        <SaaS />
        <Apps />
        <Partners />
        <GithubRepos />
        <Contact />
      </main>
      <Footer />
      <InstallPrompt />
      <UpdatePrompt />
    </>
  );
}

export default App;
