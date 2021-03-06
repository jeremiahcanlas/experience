import React from "react";
import Fade from "react-reveal/Fade";

const Perks = ({ footer }) => {
  const perksData = [
    {
      title: "Subscribe Anytime",
      color: "#ffcc00",
      content: "You can subcscribe anytime, and watch your favourite team!",
    },
    {
      title: "No Cancellation Fee ",
      color: "#097054",
      content: "Have stress-free cancellation without any hidden fees.",
    },
    {
      title: "Satisfaction Guranteed",
      color: "#cc0000",
      content:
        "If you're not happy, we'll glady give you a refund at full cost!",
    },
  ];

  return (
    <div
      className="perks-container"
      style={{ scrollSnapAlign: footer ? "none" : "start" }}
    >
      <div className="black-content">
        <div className="perks">
          {perksData.map((perk, index) => (
            <Fade
              bottom
              delay={(index + 1) * 90}
              duration={600}
              key={index + 2}
            >
              <div className="perk">
                <div
                  className="border"
                  style={{ borderColor: `${perk.color}` }}
                ></div>
                <h3 style={{ color: `${perk.color}` }}>{perk.title}</h3>
                <p>{perk.content}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Perks;
