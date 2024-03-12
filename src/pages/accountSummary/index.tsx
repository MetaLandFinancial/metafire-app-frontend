import Navbar from '@/components/shared/Navbar';
import Hero from "@/components/accountSummary/Hero";
import Profile from "@/components/accountSummary/Profile.";
import Footer from "@/components/shared/Footer";

const AccountSummary = () => {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Profile/>
            <Footer/>
        </>
    );
};

export default AccountSummary;
