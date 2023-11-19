import SubTitle from "../../components/SubTitle";
import { Container, RowContainer } from "./styles";

import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import WhySection from "../../components/WhySection";
import SubTitleRow from "../../components/SubTitleRow";
import PartnersSection from "../../components/PartnersSection";
import AboutSection from "../../components/AboutSection";
import HackatonsSwiper from "../../components/HackatonsSwiper";
import { Hackathon, getHackathons } from "../../api/client";

function Hackatons() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [finishedPopupOpen, setFinishedPopupOpen] = useState(false);
  const [selectedSlideIdOngoing, setSelectedSlideIdOngoing] = useState(null);
  const [selectedSlideIdFinished, setSelectedSlideIdFinished] = useState(null);

  const handlePopupOpen = (id: any) => {
    if (popupOpen) {
      setPopupOpen(false);
      setSelectedSlideIdOngoing(null);
    } else if (!popupOpen) {
      setPopupOpen(true);
      setSelectedSlideIdOngoing(id);
    }
  };
  const handleFinishedPopupOpen = (id: any) => {
    if (finishedPopupOpen) {
      setFinishedPopupOpen(false);
      setSelectedSlideIdFinished(null);
    } else if (!finishedPopupOpen) {
      setFinishedPopupOpen(true);
      setSelectedSlideIdFinished(id);
    }
  };

  const [hackathons, setHackathons] = useState<Hackathon[]>([]);
  const [ongoingHackatons, setOngoingHackatons] = useState<Hackathon[]>([]);
  const [finishedHackatons, setFinishedHackatons] = useState<Hackathon[]>([]);

  // const testHackatons: Hackathon[] = [
  //   {
  //     __v: 0,
  //     id: 2,
  //     description:
  //       "<p>Get ready for 2 days of game development and free experiments with Telegram bots in Prague. Boost your skills and win a prize of 5000 USDT!<br />\r\n<br />\r\n23.09 [DAY 1]<br />\r\n<br />\r\n10.30 Doors opening and registration<br />\r\n<br />\r\n11:00 Start of the Building MODE: сonditions explaining!<br />\r\n<br />\r\n11:30 Intro to the TON Ecosystem<br />\r\n<br />\r\n12.00 TON Gaming Presentation<br />\r\n<br />\r\n13.00 Lunch &amp; networking<br />\r\n<br />\r\n14.00 TACT Workshop<br />\r\n<br />\r\n16.00 Workshop FunC<br />\r\n<br />\r\n17.30 TON Grants<br />\r\n<br />\r\n18.00 - till midnight GameDev Session<br />\r\n<br />\r\n24.09 [DAY 2]<br />\r\n<br />\r\n10.30 Doors opening: day 2 kick-off<br />\r\n<br />\r\n11.00 Building<br />\r\n<br />\r\n14.00 TON Lunch<br />\r\n<br />\r\n15.00 Building<br />\r\n<br />\r\n18.00 Demo hour<br />\r\n<br />\r\n19.00 Results and awarding of winners<br />\r\n<br />\r\n19.30 Networking<br />\r\n<br />\r\nDon&#39;t forget to register, and see you soon at TON Society Europe event!</p>\r\n",
  //     endDate: "2023-09-24T00:00:00.000Z",
  //     imageUrl:
  //       "https://storage.googleapis.com/overhacks-resources/ton_gamedev.jpeg",
  //     name: "TON-based GameDev Weekend",
  //     prize: "5000 USDT",
  //     projects: [],
  //     startDate: "2023-09-23T00:00:00.000Z",
  //     topics: ["crypto", "games", " web3"],
  //     format: "Online",
  //   },
  //   {
  //     __v: 0,
  //     id: 4,
  //     description:
  //       '<p>🚀 Prepare to elevate your coding prowess with the AIBC Summit Hackathon, powered by Ledger! 🚀</p>\r\n\r\n<p>🌐 <strong>Event Highlights:</strong></p>\r\n\r\n<ol>\r\n\t<li>💡 <strong>Diverse Tracks:</strong> Dive into the realms of 🎯 Gaming Wallets, 🎯 Social Bots, and 🎯 Web 3 Games.</li>\r\n\t<li>💰 <strong>Prize Bonanza:</strong> Win over ⭐ $25k in cash prizes, plus exclusive opportunities like free tickets to AIBC Dubai (with travel/accommodation covered) and incubation support from the Playnance team.</li>\r\n\t<li>🎮 <strong>Hackathon Thrills:</strong> Test your skills, collaborate, and stand a chance to win epic prizes!</li>\r\n\t<li>💬 <strong>Community Connection:</strong> Join our Discord channel for the hackathon at <a href="https://lnkd.in/e5W-eMAn" target="_new">https://lnkd.in/e5W-eMAn</a> and be part of the vibrant coding community.</li>\r\n\t<li>📝 <strong>Registration Open:</strong> Secure your spot now by registering at <a href="https://lnkd.in/ezRBerZ" target="_new">https://lnkd.in/ezRBerZ</a>.</li>\r\n</ol>\r\n\r\n<p>Don&#39;t miss out on this coding extravaganza &ndash; where innovation meets opportunity! 🚀💻 #AIBCSummitHackathon #CodeCollaborateWin 🌟</p>',
  //     endDate: "2022-05-16T00:00:00.000Z",
  //     imageUrl: "https://storage.googleapis.com/overhacks-resources/aibc.jpeg",
  //     name: "AIBC Hackathon",
  //     prize: "25000 $",
  //     projects: [],
  //     startDate: "2023-03-16T00:00:00.000Z",
  //     topics: ["crypto", "social bots", " web3 games"],
  //     format: "Online",
  //   },
  //   {
  //     __v: 0,
  //     id: 1,
  //     description:
  //       "<p>🚀 Get ready to elevate your coding game at the &quot;Ton Society Hacker House&quot; on the outskirts of Prague! 🚀</p>\n\n<p>🌐 **Highlights:**<br />\n1. 💡 **Coding Nirvana:** Escape the city chaos for two weeks of uninterrupted coding in a serene environment.<br />\n2. 🏡 **Work and Live:** Comfortable accommodations seamlessly blend with your coding haven.<br />\n3. 👩&zwj;💻 **Collab Paradise:** Connect with like-minded developers and supercharge your projects.<br />\n4. 🚀 **Master Classes:** Industry experts lead workshops to turbocharge your skills.<br />\n5. 🗣️ **Tech Talks and Panels:** Gain insights from tech demigods on the latest trends.<br />\n6. 💻 **Hackathon Hype:** Test your skills, collaborate, and stand a chance to win epic prizes.<br />\n7. 🤝 **Networking Extravaganza:** Forge connections beyond the event for future collaborations.<br />\n8. 🌳 **R&amp;R Reimagined:** Take breaks with outdoor activities to recharge your coding mojo.</p>\n\n<p>Don&#39;t miss the chance to code, connect, and conquer at the &quot;Ton Society Hacker House&quot; &ndash; where innovation meets adventure! 💻🌟 #TonSocietyHackerHouse #CodeConquerConnect 🚀</p>",
  //     endDate: "2024-01-15T00:00:00.000Z",
  //     imageUrl: "",
  //     name: "Ton society hackerhouse",
  //     prize: "5000 USDT",
  //     projects: [],
  //     startDate: "2024-01-15T00:00:00.000Z",
  //     topics: ['crypto', 'games', ' web3'],
  //     format: "Offline",
  //   },
  //   {
  //     __v: 0,
  //     id: 3,
  //     description:
  //       "<p>Welcome to the second Hack-a-TONx in HubHub. It is a series of hackathons that brings together Web2 and Web3 developers, designers, PMs, technologists, and cypherpunks to prototype new blockchain-enabled products, and enjoy lectures and workshops in Prague on February 11-12.<br />\r\nWhat you can get?<br />\r\n$300,000 in prize pool (including $50K sponsored by DWF Labs)<br />\r\nFast track to $250M TONcoin Fund, the premier Ecosystem Fund<br />\r\nFast track to additional grants<br />\r\nSecurity audit subsidies from TON Foundation w/ our partners: CertiK, Quantstamp<br />\r\nChance to meet TON Foundation and VC/Investors on TON with an all-expense paid travel to our operations in Dubai</p>",
  //     endDate: "2022-02-11T00:00:00.000Z",
  //     imageUrl: 
  //     "https://storage.googleapis.com/overhacks-resources/hubhub.jpeg",
  //     name: "Hack in HubHub",
  //     prize: "300000 USDT",
  //     projects: [],
  //     startDate: "2022-02-11T00:00:00.000Z",
  //     topics: ['crypto', 'games', ' web3'],
  //     format: "Offline",
  //   },
  //   {
  //     __v: 0,
  //     id: 1,
  //     description:
  //     "<p>🚀 Exciting News for Tech Enthusiasts! 🚀<br />\n<br />\n🌟 Get ready to unleash your creativity at the AIBC Summit&#39;s Hackathon, powered by Ledger! 🌟<br />\n<br />\n🔥 Imagine diving into cutting-edge tracks like Gaming Wallets, Social Bots, and Web 3 Games&mdash;your gateway to the future of technology! 🔥<br />\n<br />\n💰 And the rewards? Oh, they&#39;re HUGE! TBA in cash prizes, exclusive tickets to the AIBC Dubai event (with flights/accommodation covered), and incubation support from the brilliant minds at Playnance! 💡<br />\n<br />\n🚀 This isn&#39;t just a hackathon; it&#39;s your chance to shine and be part of something revolutionary! 🚀<br />\n<br />\n<br />\n🚀 Secure your spot now! Register for the hackathon at https://lnkd.in/ezRBerZe and let the tech adventure begin! 🚀<br />\n<br />\nDon&#39;t miss out on the opportunity of a lifetime&mdash;where groundbreaking ideas meet extraordinary rewards! 🌟🚀 #AIBCSummitHackathon #TechInnovation #UnlockTheFuture</p>"
  //     ,
  //     endDate: "2024-03-16T00:00:00.000Z",
  //     imageUrl: "",
  //     name: "AIBC Hackathon",
  //     prize: "TBA",
  //     projects: [],
  //     startDate: "2024-03-16T00:00:00.000Z",
  //     topics: ['crypto', 'social bots', ' web3 games'],
  //     format: "Online",
  //   },
  // ];

  // useEffect(() => {
  //   setHackathons(testHackatons)
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const hackathonsData = await getHackathons();
        setHackathons(hackathonsData);
      } catch (error) {
        console.error("Error fetching hackathons:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const currentDate = new Date().toISOString();

    const ongoing = hackathons.filter(
      (hackathon) => hackathon.startDate >= currentDate
    );
    const finished = hackathons.filter(
      (hackathon) => hackathon.startDate < currentDate
    );

    setOngoingHackatons(ongoing);
    setFinishedHackatons(finished);
  }, [hackathons]);

  console.log("hackathons", hackathons);
  console.log("ongoingHackatons", ongoingHackatons);
  console.log("finishedHackatons", finishedHackatons);

  return (
    <Container>
      <Header />

      <RowContainer id="hackatons">
        <SubTitleRow text="Ongoing" />
      </RowContainer>

      <HackatonsSwiper
        selectedHackatonId={selectedSlideIdOngoing}
        hackatons={ongoingHackatons}
        popupOpen={popupOpen}
        handlePopupOpen={handlePopupOpen}
        isOngoin={true}
      />

      <RowContainer>
        <SubTitleRow text="Finished" />
      </RowContainer>

      <HackatonsSwiper
        selectedHackatonId={selectedSlideIdFinished}
        hackatons={finishedHackatons}
        popupOpen={finishedPopupOpen}
        handlePopupOpen={handleFinishedPopupOpen}
        isOngoin={false}
      />

      <WhySection />

      <PartnersSection />

      <AboutSection />

      <Footer />
    </Container>
  );
}

export default Hackatons;
