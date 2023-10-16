"use client";

import Script from "next/script";
import React from "react";

const Document = () => {
  return (
    <>
      <Script id="chat-bot" type="text/javascript">
        {`var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/652cdac8eb150b3fb9a1b700/1hcrjd84r';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

let spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', function(){
  spinnerWrapper.style.display= 'none';
});
`}
      </Script>
    </>
  );
};

export default Document;
