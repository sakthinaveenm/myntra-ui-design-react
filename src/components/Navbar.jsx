import React, { useState } from "react";
import user from "bootstrap-icons/icons/person.svg";
import search from "bootstrap-icons/icons/search.svg";
import heart from "bootstrap-icons/icons/heart.svg";
import bag from "bootstrap-icons/icons/bag.svg";

import {
  CContainer,
  CNavbar,
  CNavbarBrand,
  CNavItem,
  CNavLink,
  CNav,
  CCollapse,
} from "@coreui/react";

import { myntralogo, option } from "../consants/constants";
import "./Navbar.css";
import Categories from "./Categories";
import { v4 as uuidv4 } from "uuid";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [men, setMen] = useState(false);
  const [women, setWomen] = useState(false);
  const [kids, setKids] = useState(false);

  let random = uuidv4();
  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="nav navbar">
        <CContainer fluid className="logospace">
          <CNavbarBrand href="https://myntra.com">
            <img src={myntralogo} alt="" width="60" height="60" />
          </CNavbarBrand>
          <CCollapse className="navbar-collapse padding" visible={visible}>
            {option.map((value) => {
              return (
                <CNavItem
                  key={random}
                  className={`${value.css} `}
                  onClick={() => {
                    console.log(value);
                  }}
                >
                  <CNavLink href="#" className="option">
                    {value.title}
                  </CNavLink>
                </CNavItem>
              );
            })}
          </CCollapse>
          <CNav className="justify-content-end">
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <img
                src={search}
                alt=""
                className={`search ${visible ? "active" : ""}`}
              />
              <input
                type="search"
                className={`searchinside ${visible ? "active" : ""}`}
                placeholder="Search for products, brands and more"
                onMouseClick={() => {
                  setVisible(true);
                }}
              ></input>
            </form>
            <img
              src={user}
              alt=""
              width="30"
              height="30"
              style={{ marginLeft: "20px" }}
            />
            <img
              src={heart}
              alt=""
              width="25"
              height="28"
              style={{ marginLeft: "20px" }}
            />
            <img
              src={bag}
              alt=""
              width="30"
              height="25"
              style={{ marginLeft: "20px" }}
            />
          </CNav>
        </CContainer>
      </CNavbar>
      {men ? <Categories /> : null}
    </>
  );
}
