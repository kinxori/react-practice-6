//@ts-ignore
import "./menus.css"

import Menu from "./Menu";

const tabs = [
    { label: "Settings", menuContent: 
    <div className="divSettings">
        <h2>What is settings? 🧐</h2>
        <div>
            <ul>
                <li>The position, direction, or way in which something, such as an automatic control, is set.</li>
                <li>The context and environment in which a situation is set; the background.</li>
                <li>The time, place, and circumstances in which a narrative, drama, or film takes place.</li>
            </ul>
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstudy.com%2Fcimages%2Fmultimages%2F16%2Fsetting.png&f=1&nofb=1&ipt=cd3adcf7fc174196721bf2fc25879a3555c20c9cd6f2dac29b7d12454d55a626&ipo=images" alt="settings definition" />
        </div>
    </div> },

    { label: "About Us", menuContent: 
    <div className="divAbout">
        <h2>About the settings 🤪</h2>
        <div>
            <p>
                Some common settings might include the ability to customize the blog's layout and color scheme, set up user accounts and permissions, enable comments and social sharing features, and configure search engine optimization (SEO) settings. 
            </p>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fquotefancy.com%2Fmedia%2Fwallpaper%2F1600x900%2F51455-Imam-Ali-Quote-Two-things-define-you-Your-patience-when-you-have.jpg&f=1&nofb=1&ipt=0459af071b5244390e7ecca9530519d323a19b7d7754a2f26c1b1cd403e762da&ipo=images" alt="about" />
        </div>
    </div> },

    { label: "Contact", menuContent: 
    <div className="divContact">
        <h2>Reach to us 😳</h2>
        <div>
            <ul>
                <li>Email: lospanchos@gmail.com </li>
                <li>Phone: +1(1088845019)</li>
                <li>Adress: 39050 Tires, Bolzano, Italia</li>
            </ul>
            <img src="https://lh5.googleusercontent.com/p/AF1QipPmn8MoKTq0qi1hu4d6QR1pn6vaLEN1JvYcKRDJ=w203-h203-k-no" alt="nigerpass" />
        </div>
    </div> }
];

export default function ContentMenu(){

    return(
        <Menu tabs={tabs} />
        )
}
