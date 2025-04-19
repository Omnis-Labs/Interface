import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="relative flex flex-col space-y-4 py-2">
            <div className="!mb-6 space-y-4">
                {children}
            </div>
        </div>
    );
};

export default Layout;