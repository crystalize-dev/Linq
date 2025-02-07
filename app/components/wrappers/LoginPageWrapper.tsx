import { motion } from 'framer-motion';
import React from 'react';

const LoginPageWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <motion.div
            layoutId="mainWin"
            className="dark:border-dark-border dark:bg-dark-bg flex h-full w-full items-center border-solid bg-light shadow-xl backdrop-blur-md lg:h-fit lg:w-fit lg:min-w-96 lg:rounded-xl lg:border dark:bg-dark dark:shadow-none"
        >
            {children}
        </motion.div>
    );
};

export default LoginPageWrapper;
