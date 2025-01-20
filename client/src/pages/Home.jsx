import Footer from '../components/Home_Compo/footer';
import Header from '../components/Home_Compo/header';
import Aboutthedoctor from '../components/Home_Compo/Aboutthedoctor';
import Whoweare from '../components/Home_Compo/Whoweare';
import Landingview from '../components/Home_Compo/Landingview';
import Treatment from '../components/Home_Compo/Treatment';
import Othertreatment from '../components/Home_Compo/Othertreatment';






const Home = () => {
  return (
    <div>
      <Header />
      <main>
        {/* LAnding view */}
        <Landingview/>
        {/*About the Doctor*/}
        <Aboutthedoctor/>
        {/*Who we are*/}
        <Whoweare/>
        {/*Treatment*/}
        <Treatment/>
        {/* Other traeatment */}
        <Othertreatment/>
      </main>
      <Footer />
    </div>
  );
};

export default Home;