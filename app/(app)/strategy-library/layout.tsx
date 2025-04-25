import { ReactNode } from "react";
// import { ChatProvider } from "./ai-portfolio-manager/_contexts/chat";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            {/* <ChatProvider> */}
            {children}
            {/* </ChatProvider> */}
        </div>
    );
};

export default Layout;