import React from "react";
import Testimonials from "./sections/Testimonials";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Starter from "./sections/Starter";
import Why from "./sections/Why";
import Blogs from "./sections/Blogs";
import ScrollToTop from "./components/ScrollToTop";
import { motion } from "framer-motion";

function App() {
return (
<motion.div initial="hidden" animate="show">
<ScrollToTop />
<Starter />
<About />
<Why />
<Testimonials />
<Blogs />
<Footer />
</motion.div>
);
}

export default App;

import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import { useScroll } from "../components/useScroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { GoPlay } from "react-icons/go";
import { motion } from "framer-motion";
import WorkImage from "../assets/work.svg";
import "../styles/sections/Starter.scss";
import { headerAnimation, imageAnimation } from "../utils/Animations";

export default function Starter() {
const [element, controls] = useScroll();

return (
<div className="main-container" ref={element}>
<Navbar />
<div className="container">
<motion.div
className="content"
variants={headerAnimation}
animate={controls}
transition={{ delay: 0.2, type: "tween" }} >
<h1>
We Provide Solutions to Help You to Build or Grow Your Buisness!
</h1>
<p>
A professional web and mobile app development agency with over 100+
web and app developed. We provide a high- quality service in web and
mobile app development as well as in design.
</p>
<div className="button-container">
<Button content="Watch Video" icon={<GoPlay />} />
<Button
color="pink"
content="Request Quote"
icon={<HiOutlineArrowNarrowRight />}
/>
</div>
</motion.div>
<motion.div
className="image"
variants={imageAnimation}
animate={controls}
transition={{ type: "tween" }} >
<img src={WorkImage} alt="Work Image" />
</motion.div>
</div>
</div>
);
}

@import "../utils/Colors.scss";
.main-container {
// margin: 0 10rem;
margin: 0 10%;
.container {
display: grid;
grid-template-columns: repeat(2, 1fr);
.content {
margin-top: 3.4rem;
margin-right: 3rem;
h1 {
font-size: 3rem;
color: $headingColor;
}
p {
font-size: 1.4rem;
color: $lightFontColor;
line-height: 1.9rem;
}
.button-container {
display: flex;
button {
margin-right: 1rem;
}
}
}
.image {
img {
height: 35rem;
width: 35rem;
}
}
}
}

@media screen and (min-width: 320px) and (max-width: 480px) {
.main-container {
.container {
grid-template-columns: 1fr;
.content {
margin-right: 0;
h1 {
font-size: 4rem;
}
p {
font-size: 2rem;
line-height: 2.5rem;
}
}
.image {
margin-left: 2rem;
img {
height: 25rem;
width: 25rem;
}
}
}
}
}

@media screen and (max-width: 768px) {
html {
font-size: 8px;
}
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
.main-container {
padding-bottom: 3rem;
.container {
.content {
h1 {
font-size: 2rem;
}
p {
font-size: 1rem;
line-height: 1.4rem;
}
}
.image {
img {
height: 30rem;
width: 30rem;
}
}
}
}
}

@import "../utils/Colors.scss";
button {
color: white;
text-transform: uppercase;
padding: 0.8rem 1rem;
border: 0.1rem solid transparent;
border-radius: 0.25rem;
font-weight: bolder;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: 0.4s ease-in-out;

svg {
margin-left: 0.5rem;
font-size: large;
}
}
.blue {
background-color: $buttonBlueColor;
transition: 0.4s ease-in-out;
&:hover {
background-color: white;
border: 0.1rem solid $buttonBlueColor;
color: $buttonBlueColor;
}
}

.pink {
background-color: $buttonPinkColor;
transition: 0.4s ease-in-out;
&:hover {
background-color: white;
border: 0.1rem solid $buttonPinkColor;
color: $buttonPinkColor;
}
}

.inverse {
background-color: white;
color: $buttonPinkColor;
border: $buttonPinkColor 0.1rem solid;
transition: 0.4s ease-in-out;
&:hover {
background-color: $buttonPinkColor;
border: 0.1rem solid transparent;
color: white;
}
}

@media screen and (min-width: 320px) and (max-width: 480px) {
button {
font-size: 1.5rem;
padding: 1.5rem 1.5rem;
svg {
font-size: small;
}
}
}

@media screen and (min-width: 481px) and (max-width: 768px) {
button {
font-size: 1.3rem;
padding: 1.5rem 1.5rem;
svg {
font-size: small;
}
}
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
button {
font-size: 0.7rem;
padding: 0.8rem;
white-space: nowrap;
}
}

import React from "react";
import "../styles/components/BrandName.scss";

function BrandName({ isFooter = false }) {
return (
<div className={`brand ${isFooter === true ? "footer" : ""}`}>
<span>cryo</span>
</div>
);
}

export default BrandName;

@import "../utils/Colors.scss";

.brand {
cursor: pointer;
span {
text-transform: uppercase;
font-size: xx-large;
border: 0.1rem solid #f50460;
padding: 0.6rem 1rem;
border-radius: 0.3rem;
color: $blueColor;
font-weight: bolder;
letter-spacing: 0.2rem;
}
}
.footer {
span {
color: white;
border-color: white;
}
}

import React, { useState } from "react";
import Button from "./Button";
import BrandName from "./BrandName";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import "../styles/components/Navbar.scss";
import { navbarAnimation } from "../utils/Animations";

export default function Navbar() {
const [toggleNavbar, setToggleNavbar] = useState(false);
const navbarToggler = () => {
setToggleNavbar(!toggleNavbar);
};
return (
<motion.div
className={`navbar ${toggleNavbar === true ? "active" : ""}`}
variants={navbarAnimation}
transition={{ delay: 0.1 }} >
<div className="col">
<BrandName />
<div className="collapseble-button">
{!toggleNavbar ? (
<GiHamburgerMenu onClick={navbarToggler} />
) : (
<MdClose onClick={navbarToggler} />
)}
</div>
</div>
<nav>
<div className="links">
<ul>
<li>
<a href="#about">About</a>
</li>
<li>
<a href="#services">Services</a>
</li>

            <li>
              <a href="#testimonial">Testimonial</a>
            </li>

            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <Button content="Contact" />
            </li>
          </ul>
        </div>
      </nav>
    </motion.div>

);
}

@import "../utils/Colors.scss";
.navbar {
margin: 2rem 0;
display: flex;
justify-content: space-between;
.col {
display: flex;
justify-content: space-between;
align-items: center;
.collapseble-button {
display: none;
}
}
nav {
.links {
ul {
display: flex;
list-style-type: none;
align-items: center;
justify-content: center;
margin: 0.3rem 2rem;
color: $lightFontColor;
li {
a {
text-decoration: none;
font-size: 1.2rem;
color: $blueColor;
&:hover {
color: $buttonPinkColor;
}
&:focus {
color: $blueColor;
}
&:active {
color: $blueColor;
}
}
text-transform: uppercase;
margin: 0 1rem;
}
}
}
}
}
@media screen and (min-width: 320px) and (max-width: 768px) {
.navbar.active {
nav {
display: block;
}
}

.navbar {
flex-direction: column;
justify-content: flex-start;

    .col {
      .collapseble-button {
        display: block;
        font-size: 4rem;
      }
    }
    nav {
      display: none;
      .links {
        ul {
          flex-direction: column;
          align-items: flex-start;
          margin: 0.3rem 0rem;
          li {
            margin: 2rem 0 0 0;
            &:first-of-type {
              margin-top: 4rem;
            }
            a {
              font-size: x-large;
            }
          }
        }
      }
    }

}
}
