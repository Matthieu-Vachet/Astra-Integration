import { Footer, Navbar } from "@/components";
import Popup from "@/components/ui/popup";
import React from "react";

interface Props {
    children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col items-center w-full">
            <Navbar />
            <Popup />
            {children}
            <Footer />
        </div>
    );
};

export default MarketingLayout;
