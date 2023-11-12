type ProductDescriptionType = {
  show: boolean;
};

const Description = ({ show }: ProductDescriptionType) => {
  const style = {
    display: show ? "flex" : "none",
  };

  return (
    <section style={style} className="product-single__description">
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Details and product description</h4>
        <p>
          "Classic Desk Essentials for a Productive Workspace. Crafted from
          high-quality materials, our stationery products add sophistication to
          your work environment. Each item in our collection is designed for
          both style and functionality, elevating your everyday tasks. Whether
          it's elegant notebooks, premium pens, or innovative organizational
          tools, our stationery brings efficiency and aesthetics to your
          workspace. Redefine your desk experience with our thoughtfully
          designed stationery products." <br></br>
        </p>
      </div>
      <div className="product-description-block">
        <i className="icon-cart"></i>
        <h4>Details and product description</h4>
        <p>
          "Classic Desk Essentials for a Productive Workspace. Crafted from
          high-quality materials, our stationery products add sophistication to
          your work environment. Each item in our collection is designed for
          both style and functionality, elevating your everyday tasks. Whether
          it's elegant notebooks, premium pens, or innovative organizational
          tools, our stationery brings efficiency and aesthetics to your
          workspace. Redefine your desk experience with our thoughtfully
          designed stationery products." <br></br>
        </p>
      </div>
    </section>
  );
};

export default Description;
