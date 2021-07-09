import React from "react";
import SignIn from "../components/SignIn";
import ScrollToTop from "../ScrollToTop";
import { motion } from "framer-motion"; 


function SigninPage() {
  return (
    
      <motion.div
        animate={{ opacity: 1, transition: { duration: 1 } }}
        initial={{ opacity: 0 }}
      >
        <ScrollToTop />
        <SignIn />
      </motion.div>
    
  );
}

export default SigninPage;
