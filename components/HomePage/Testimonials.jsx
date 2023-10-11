import Image from "next/image";
import React from "react";

function Testimonials() {
  const Card = ({ item }) => {
    return (
      <div className="testimonial-card">
        <div className="info">
          <Image src={item.image} />
          <div>
            <span className="name">{item.name}</span>
            <span className="designition">{item.designition}</span>
          </div>
        </div>
        <p className="text">{item.text}</p>
      </div>
    );
  };
  const data = [
    {
      name: "Mila McSabbu",
      designition: "Freelance Designer",
      text: "“We were blown away when we saw Mixland. The combination of social, email, knowledge base, mobile, ets.”",
      image: require("../../public/assets/testimonials/t1.png"),
    },
    {
      name: "Robert Fox",
      designition: "UI/UX Designer",
      text: "“Mixlandhas helped us become much more efficient. Provided consistency in messaging too. It's not a lot of voices.”",
      image: require("../../public/assets/testimonials/t2.png"),
    },
    {
      name: "Jenny Wilson",
      designition: "Web Developer",
      text: "“Mixland is a very friendly tool. As it sits inside Gmail, it doesn't give you an alien feel. Complexities of a ticketing.”",
      image: require("../../public/assets/testimonials/t3.png"),
    },
    {
      name: "Wade Warren",
      designition: "Director, Technology",
      text: "“We test and compare the best support management software for collaborating with a team, hitting deadlines.”",
      image: require("../../public/assets/testimonials/t4.png"),
    },
    {
      name: "Savannah Nguyen",
      designition: "Support Manager",
      text: "“Support desk is the skimping on core features. It's strong at enabling with collaboration on visual materials.”",
      image: require("../../public/assets/testimonials/t5.png"),
    },
    {
      name: "Cody Fisher",
      designition: "Director of IT",
      text: "“Support to be a team's best option for project management, but when all the stars align, it's a powerful tool.”",
      image: require("../../public/assets/testimonials/t6.png"),
    },
  ];
  return (
    <section className="container testimonials">
      <h2>Our blessed clients said about their experience</h2>
      <div className="testimonials-grid">
        {data.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
