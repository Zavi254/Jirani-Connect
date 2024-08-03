import data from "../data/data.json";

const OurTeam = () => {
  return (
    <section id="our-team">
      <h2 className="our-team-headline">{data.our_team.headline}</h2>
      <p className="our-team-subheadline">{data.our_team.sub_headline}</p>
      <div className="our-team-cards-container">
        {data.our_team.members.map((member, index) => (
          <div key={index} className="team-card">
            <img
              src={member.profileImage}
              alt=""
              className="our-team-profile-image"
            />
            <p className="our-team-profile-name">{member.name}</p>
            <p className="our-team-profile-profession">{member.profession}</p>
            <div className="our-team-socials">
              {member.socials.map((social, i) => (
                <a key={i} href={social.url}>
                  <img
                    src={social.icon}
                    alt={social.platform}
                    className="our-team-social-icon"
                  />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
