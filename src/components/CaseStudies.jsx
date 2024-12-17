import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      imageSrc: "https://via.placeholder.com/300x200",
      title: "A leading real estate tech marketplace",
      description:
        "An end-to-end automated, cost-saving, and integrated invoice solution.",
    },
    {
      id: 2,
      imageSrc: "https://via.placeholder.com/300x200",
      title: "Leading FMCG manufacturing company",
      description:
        "This FMCG giant has grown in leaps with a turnover of close to 2000 Cr.",
    },
    {
      id: 3,
      imageSrc: "https://via.placeholder.com/300x200",
      title: "India's leading cab aggregator",
      description: "Saved over Rs 10 crore ITC loss annually.",
    },
    {
      id: 4,
      imageSrc: "https://via.placeholder.com/300x200",
      title: "A Major Textile Manufacturing Company",
      description:
        "Unlocked accumulated savings worth over Rs 10 Cr with automation.",
    },

    {
        id: 5,
        imageSrc: "https://via.placeholder.com/300x200",
        title: "A leading real estate tech marketplace",
        description:
          "An end-to-end automated, cost-saving, and integrated invoice solution.",
      },
      {
        id: 6,
        imageSrc: "https://via.placeholder.com/300x200",
        title: "Leading FMCG manufacturing company",
        description:
          "This FMCG giant has grown in leaps with a turnover of close to 2000 Cr.",
      },
   
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-4xl font-bold">
            Auto-pilot GST lifecycle for 100% compliance
          </h2>
          <a
            href="#"
            className="text-yellow-500 hover:underline font-medium text-lg"
          >
            View all case studies →
          </a>
        </div>

        {/* React-Slick Slider */}
        <Slider {...settings}>
          {caseStudies.map((caseStudy) => (
           <Card
           key={caseStudy.id}
           imageSrc={caseStudy.imageSrc} 
           title={caseStudy.title}
           description={caseStudy.description}
           />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CaseStudies;
