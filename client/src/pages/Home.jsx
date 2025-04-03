import React from 'react';


import Aboutthedoctor from '../components/Home_Compo/Aboutthedoctor';
import Whoweare from '../components/Home_Compo/Whoweare';
import Landingview from '../components/Home_Compo/Landingview';
import Treatment from '../components/Home_Compo/Treatment';
import Othertreatment from '../components/Home_Compo/Othertreatment';
import Whypeople from '../components/Home_Compo/Whypeople';
import Treatmenthours from '../components/Home_Compo/Treatmenthours';
import WhatsAppButton from '../components/Home_Compo/Whatsapp';
import Comment from '../components/Home_Compo/Comment';


const Home = () => {
  return (
    <div>
      <main>
        <WhatsAppButton />
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
        {/* Why people choose us  */}
        <Whypeople/>
        {/* Comment section */}
        <Comment/>
        {/* Treatment hours */}
        <Treatmenthours/>
      </main>
    </div>
  );
};

export default Home;