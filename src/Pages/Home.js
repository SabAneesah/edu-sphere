import Navbar from "../Components/NavBar";
import CardContainer from "../Components/CardContainer";
import IntoCard from "../Components/IntroCard";
import FeaturetteContainer from "../Components/FeaturetteContainer";
import Footer from "../Components/Footer";
import PopUpChatbot from "../ChatbotComponents/PopUpChatbot";

function Home() {
  return (
    <div>
    <Navbar isSignin={false}/>  
    <IntoCard/>
    <CardContainer/>
    <FeaturetteContainer/>
    <PopUpChatbot/>
    <Footer/>
    </div>
  );
}

export default Home;