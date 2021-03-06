import React, { Component } from "react";
import Profile from "./Profile";
const x = require("../../assests/profile-1-1x.jpg");
const profileData = [
  {
    id: "Lilly, 22",
    name: "Lilly",
    age: "22",
    image:
      "https://images.unsplash.com/photo-1507527690292-7888f1022d36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80",
    small: require("../../assests/profile-1-1x.jpg"),
    large: require("../../assests/profile-1-1x.jpg"),
  },
  {
    id: "Bianca,21",
    name: "Bianca",
    age: "21",
    image:
      "https://images.unsplash.com/photo-1550521128-32b407becb08?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    small: require("../../assests/profile-2-1x.jpg"),
    large: require("../../assests/profile-2-2x.jpg"),
  },
  {
    id: "Jimmy,24",
    name: "Jimmy",
    age: "24",
    image:
      "https://images.unsplash.com/photo-1546512565-39d4dc75e556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=996&q=80",
    small: require("../../assests/profile-3-1x.jpg"),
    large: require("../../assests/profile-3-2x.jpg"),
  },
  {
    id: "Nini,22",
    name: "Nini",
    age: "22",
    image:
      "https://images.unsplash.com/photo-1526265218618-bdbe4fdb5360?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    small: require("../../assests/profile-4-1x.jpg"),
    large: require("../../assests/profile-4-2x.jpg"),
  },
];
export default class ProfileSection extends Component {
  render() {
    return (
      <section className="profile__section">
        <h2 className="section__heading--secondary  margin-bottom-large">
          Top Profiles
        </h2>
        <div className="row margin-bottom-large">
          {profileData.map(profile => {
            return (
              <Profile
                key={profile.id}
                name={profile.name}
                image={profile.image}
                age={profile.age}
                small={profile.small}
                srcSet={`${profile.small} 1x, ${profile.large} 2x`}
                large={profile.large}
              />
            );
          })}
        </div>
        <a href="#s" className="btn  btn--profile btn-animated">
          See all profiles
        </a>
      </section>
    );
  }
}
