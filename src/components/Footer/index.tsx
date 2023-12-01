import React, { useEffect, useState } from "react";
import {
  Column,
  Container,
  FooterBtn,
  FooterWrapper,
  IconWrapper,
  IconsContainer,
  Logo,
  StyledFooter,
} from "./styles";
import SubTitle from "../SubTitle";
import AnySizeTitle from "../Title";
import LogoHacks from "../../assets/img/LOGOHACK.png";

const matcher = () => {
  return window.matchMedia("(max-width: 993px)").matches;
};

function Footer() {
  const [isSmallScreen, setIsSmallScreen] = useState(matcher());

  const checkScreenSize = () => {
    setIsSmallScreen(matcher());
  };

  useEffect(() => {
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <FooterWrapper>
      <StyledFooter>
         {!isSmallScreen && <Logo background={LogoHacks} />}

        <Container>
          <Column>
            <AnySizeTitle color="#CCFF5A" text="OVERHACKS" fontSize="17px" />
            <FooterBtn>
              <SubTitle
                textAlign="left"
                color="#F4FFDD"
                text="About"
                cursor="pointer"
              />
            </FooterBtn>
            <FooterBtn>
              <SubTitle
                textAlign="left"
                color="#F4FFDD"
                text="Contact us"
                cursor="pointer"
              />
            </FooterBtn>
            <FooterBtn>
              <SubTitle
                textAlign="left"
                color="#F4FFDD"
                text="Terms of service"
                cursor="pointer"
              />
            </FooterBtn>
          </Column>
          <Column>
            <AnySizeTitle color="#CCFF5A" text="HACKATONS" fontSize="17px" />
            <FooterBtn
              href="https://forms.gle/Exqa4wAzTi1kSzbU9"
              target="_blank"
            >
              <SubTitle
                textAlign="left"
                color="#F4FFDD"
                text="Host a hackaton"
                cursor="pointer"
              />
            </FooterBtn>
            <FooterBtn>
              <SubTitle
                textAlign="left"
                color="#F4FFDD"
                text="Browse hackatons"
                cursor="pointer"
              />
            </FooterBtn>
          </Column>
          {!isSmallScreen && (
            <Column>
              <AnySizeTitle
                color="#CCFF5A"
                text="SOCIAL MEDIA"
                fontSize="17px"
              />
              <FooterBtn href="https://x.com/overhackscom" target="_blank">
                <SubTitle
                  textAlign="left"
                  color="#F4FFDD"
                  text="Twitter"
                  cursor="pointer"
                />
              </FooterBtn>
              <FooterBtn
                href="https://www.linkedin.com/company/overhacks/"
                target="_blank"
              >
                <SubTitle
                  textAlign="left"
                  color="#F4FFDD"
                  text="LinkedIn"
                  cursor="pointer"
                />
              </FooterBtn>
              <FooterBtn
                href="https://medium.com/@overhacks.com/"
                target="_blank"
              >
                <SubTitle
                  textAlign="left"
                  color="#F4FFDD"
                  text="Medium"
                  cursor="pointer"
                />
              </FooterBtn>
            </Column>
          )}
        </Container>
        { isSmallScreen && <IconsContainer>
          <IconWrapper href="https://x.com/overhackscom" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M17.9525 5.70978C17.9647 5.88609 17.9647 6.06241 17.9647 6.24035C17.9647 11.6622 13.8371 17.9153 6.28966 17.9153V17.9121C4.06013 17.9153 1.8769 17.2767 0 16.0726C0.324193 16.1116 0.65001 16.1311 0.97664 16.1319C2.82429 16.1335 4.61913 15.5136 6.07272 14.372C4.31688 14.3387 2.77717 13.1938 2.23928 11.5225C2.85436 11.6411 3.48812 11.6167 4.09181 11.4518C2.17753 11.065 0.800325 9.38315 0.800325 7.42987V7.37787C1.37071 7.69556 2.00934 7.87187 2.6626 7.89137C0.859638 6.68642 0.30388 4.28788 1.39265 2.4126C3.47593 4.97608 6.54966 6.53448 9.84928 6.69942C9.51859 5.27427 9.97034 3.78087 11.0364 2.77904C12.689 1.22552 15.2882 1.30515 16.8418 2.95698C17.7607 2.77579 18.6415 2.4386 19.4475 1.96084C19.1412 2.91067 18.5001 3.7175 17.6437 4.23019C18.457 4.13431 19.2517 3.91656 20 3.58424C19.4491 4.40976 18.7552 5.12883 17.9525 5.70978Z"
                fill="white"
              />
            </svg>
          </IconWrapper>
          <IconWrapper>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.36937 7.14658C6.73698 4.81551 10.3103 3.26657 12.1046 2.51511C17.2115 0.383401 18.285 0.015336 18.9751 0C19.1285 0 19.4659 0.0306723 19.6959 0.214704C19.8799 0.368065 19.926 0.567433 19.9566 0.720793C19.9873 0.874154 20.018 1.19621 19.9873 1.44159C19.7112 4.35543 18.515 11.4253 17.9016 14.6766C17.6409 16.0568 17.1348 16.5169 16.644 16.5629C15.5705 16.6549 14.7577 15.8574 13.7302 15.1827C12.1046 14.1245 11.1998 13.465 9.62015 12.4222C7.79516 11.226 8.97604 10.5665 10.0189 9.493C10.2949 9.21695 15.0031 4.92286 15.0951 4.53946C15.1104 4.49345 15.1104 4.30942 15.0031 4.2174C14.8957 4.12539 14.7424 4.15606 14.6197 4.18673C14.451 4.2174 11.8745 5.93504 6.85967 9.3243C6.12354 9.83039 5.46409 10.0758 4.86598 10.0604C4.20654 10.0451 2.94898 9.69236 1.99815 9.38564C0.847949 9.01758 -0.0722116 8.81821 0.00446848 8.1741C0.0504765 7.8367 0.510557 7.49931 1.36937 7.14658Z"
                fill="white"
              />
            </svg>
          </IconWrapper>
          <IconWrapper>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10.0006 0.000640776C4.4759 0.000640776 0 4.59314 0 10.2532C0 14.7855 2.86518 18.627 6.83605 19.9822C7.33796 20.079 7.51922 19.7618 7.51922 19.4875C7.51922 19.244 7.5136 18.6001 7.50984 17.7452C4.72655 18.363 4.14026 16.3669 4.14026 16.3669C3.68461 15.1853 3.02706 14.8681 3.02706 14.8681C2.12201 14.2344 3.09894 14.2478 3.09894 14.2478C4.10151 14.3177 4.62904 15.3019 4.62904 15.3019C5.52097 16.8706 6.96919 16.4169 7.54235 16.1529C7.62985 15.4922 7.89049 15.0379 8.17426 14.7848C5.95412 14.5279 3.6196 13.6468 3.6196 9.71814C3.6196 8.59613 4.00713 7.68237 4.64779 6.96469C4.53716 6.70773 4.19839 5.66325 4.73592 4.25097C4.73592 4.25097 5.57285 3.97735 7.48609 5.30249C8.28677 5.07501 9.13682 4.9616 9.98625 4.95583C10.8363 4.9616 11.6857 5.07565 12.4864 5.30249C14.3884 3.97735 15.2247 4.25097 15.2247 4.25097C15.7616 5.66325 15.4228 6.70709 15.3253 6.96469C15.9597 7.68237 16.3473 8.59677 16.3473 9.71814C16.3473 13.6558 14.0096 14.524 11.787 14.7746C12.1345 15.0815 12.4602 15.7127 12.4602 16.6707C12.4602 18.0419 12.4477 19.1466 12.4477 19.4805C12.4477 19.7471 12.6227 20.0675 13.1377 19.9643C17.1379 18.6231 20 14.7784 20 10.2526C20 4.5925 15.5241 0 9.99938 0L10.0006 0.000640776Z"
                fill="white"
              />
            </svg>
          </IconWrapper>
          <IconWrapper href="https://www.linkedin.com/company/overhacks/"
                target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4.65548 6.42633H0.640452C0.462258 6.42633 0.317871 6.5711 0.317871 6.74962V19.6766C0.317871 19.8552 0.462258 19.9999 0.640452 19.9999H4.65548C4.83368 19.9999 4.97806 19.8552 4.97806 19.6766V6.74962C4.97806 6.5711 4.83368 6.42633 4.65548 6.42633Z"
                fill="white"
              />
              <path
                d="M2.64942 0C1.18852 0 0 1.18984 0 2.65235C0 4.11551 1.18852 5.3058 2.64942 5.3058C4.10916 5.3058 5.29671 4.11544 5.29671 2.65235C5.29677 1.18984 4.10916 0 2.64942 0Z"
                fill="white"
              />
              <path
                d="M14.868 6.10504C13.2554 6.10504 12.0634 6.7998 11.3403 7.58921V6.74962C11.3403 6.5711 11.1959 6.42633 11.0177 6.42633H7.17265C6.99445 6.42633 6.85006 6.5711 6.85006 6.74962V19.6766C6.85006 19.8552 6.99445 19.9999 7.17265 19.9999H11.1789C11.3571 19.9999 11.5015 19.8552 11.5015 19.6766V13.2808C11.5015 11.1255 12.0856 10.2859 13.5847 10.2859C15.2174 10.2859 15.3471 11.6319 15.3471 13.3917V19.6767C15.3471 19.8553 15.4915 20 15.6697 20H19.6774C19.8556 20 20 19.8553 20 19.6767V12.586C20 9.38122 19.3903 6.10504 14.868 6.10504Z"
                fill="white"
              />
            </svg>
          </IconWrapper>
          <IconWrapper>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
            >
              <path
                d="M16.9419 1.29661C15.6473 0.690882 14.263 0.250664 12.8157 0C12.638 0.321342 12.4304 0.753555 12.2872 1.09738C10.7487 0.866015 9.22445 0.866015 7.7143 1.09738C7.57116 0.753555 7.3588 0.321342 7.17947 0C5.73067 0.250664 4.3448 0.692499 3.05016 1.29982C0.438869 5.24582 -0.269009 9.09381 0.0849305 12.8872C1.81688 14.1805 3.49534 14.9662 5.14548 15.4804C5.55291 14.9196 5.91628 14.3235 6.22931 13.6953C5.63313 13.4688 5.06211 13.1892 4.52256 12.8647C4.6657 12.7586 4.80571 12.6478 4.94098 12.5337C8.23183 14.0729 11.8074 14.0729 15.0589 12.5337C15.1958 12.6478 15.3358 12.7586 15.4774 12.8647C14.9362 13.1908 14.3637 13.4704 13.7675 13.697C14.0805 14.3235 14.4423 14.9212 14.8513 15.4819C16.503 14.9678 18.183 14.1822 19.915 12.8872C20.3303 8.4897 19.2056 4.67705 16.9419 1.29661ZM6.67765 10.5543C5.68977 10.5543 4.87963 9.63204 4.87963 8.50898C4.87963 7.38591 5.67247 6.46207 6.67765 6.46207C7.68285 6.46207 8.49297 7.38429 8.47567 8.50898C8.47723 9.63204 7.68285 10.5543 6.67765 10.5543ZM13.3223 10.5543C12.3344 10.5543 11.5243 9.63204 11.5243 8.50898C11.5243 7.38591 12.3171 6.46207 13.3223 6.46207C14.3275 6.46207 15.1376 7.38429 15.1203 8.50898C15.1203 9.63204 14.3275 10.5543 13.3223 10.5543Z"
                fill="white"
              />
            </svg>
          </IconWrapper>
        </IconsContainer>}
      </StyledFooter>
    </FooterWrapper>
  );
}

export default Footer;
