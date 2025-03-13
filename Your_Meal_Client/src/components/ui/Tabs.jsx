import { useState } from "react";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Button from "./Button";

const Tabs = ({tabs, classes, init}) => {
    const [activeTab, setActiveTab] = useState(init);
    return (
        <div className="tabs">
            <div className="container">
                <div className="tabs-list">
                    {tabs.map((tab) => 
                        <Button
                            key={tab.label}
                            className={activeTab === tab.label ? `${classes} active-tab` : classes}
                            onClick={() => setActiveTab(tab.label)}
                        >
                            {tab.label}
                        </Button>
                    )}
                </div>
                <div className="tab-content">   
                    {tabs.map((tab) => 
                        activeTab === tab.label ? <div key={tab.label}>{tab.content}</div> : null
                    )}
                </div>
            </div>
        </div>
    )
}

export default Tabs;