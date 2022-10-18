import React from 'react';
import {CDBBox, CDBBtn, CDBFooter, CDBIcon} from "cdbreact";
import logo from "../logo.svg";

function Footer(props) {
   return (
       <div className={"fixed-bottom"}>
          <CDBFooter className={"shadow bg-dark text-light"}>
             <CDBBox
                 display={"flex"}
                 justifyContent={"between"}
                 alignItems={"center"}
                 className={"mx-auto py-4 flex-wrap"}
                 style={{width: '80%'}}
             >
                <CDBBox display={"flex"} alignItems={"center"}>
                   <img src={logo} alt={"Logo"} width={"40"} height={"30"}/>
                   <span className={"ml-4 h5 mb-0 font-weight-bold text-white"}>Shakeel</span>
                </CDBBox>
                <CDBBox>
                   <small className="ml-2">&copy; Shakeel, 2022. All rights reserved.</small>
                </CDBBox>
                <CDBBox display={"flex"}>
                   <CDBBtn flat color={"dark"} className={"p-2"}>
                      <CDBIcon fab icon={"facebook-f"}/>
                   </CDBBtn>
                   <CDBBtn flat color={"dark"} className={"p-2 mx-3"}>
                      <CDBIcon fab icon={"twitter"}/>
                   </CDBBtn>
                   <CDBBtn flat color={"dark"} className={"p-2"}>
                      <CDBIcon fab icon={"instagram"}/>
                   </CDBBtn>
                </CDBBox>
             </CDBBox>
          </CDBFooter>
       </div>
   );
}

export default Footer;