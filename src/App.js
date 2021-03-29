import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/Company/About/about';
import whyUs from './Components/Company/WhyChooseUs/whyUs';
import LogoDesign from './Components/Services/LogoDesign/logoDesign';
import GraphicDesign from './Components/Services/GraphicDesign/graphicDesigning';
import ContentWriting from './Components/Services/ContentWriting/contentWriting';
import DigitalMarketing from './Components/Services/DigitalMarketing/digitalMarketing';
import WebDev from './Components/Services/WebDevelopment/webDevelopment';
import Projects from './Components/Projects/project'; 
import Blog from './Components/Blog/Blog';
import SocialMedia from './Components/Services/SocialMediaMarketing/socialMedia'
import ContactUs from './Components/Contactus/ContactUs';
import Team from './Components/Company/OurTeam/team'
import TeamProfile from './Components/Company/TeamProfile/teamprofile';
import Login from './Components/Login/login'




function App() {

  return (
    <div>
      <Header />
        
        <Switch>

          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/whyus" exact component={whyUs} />
          <Route path="/team" exact component={Team} />
          <Route path="/teamprofile" exact component={TeamProfile} />
          <Route path="/logodesign" exact component={LogoDesign} />
          <Route path="/graphicdesign" exact component={GraphicDesign} />
          <Route path="/contentwriting" exact component={ContentWriting} />
          <Route path="/digitalmarketing" exact component={DigitalMarketing} />
          <Route path="/webdev" exact component={WebDev} />
          <Route path="/socialmedia" exact component={SocialMedia} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/contactus" exact component={ContactUs} />
          <Route path="/login" exact component={Login} />
          
        </Switch>

      <Footer />
    </div>
  );
}

export default App;
