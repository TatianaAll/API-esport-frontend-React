// The title with the 2 differents fonts and size depending of the support (phone, desktop)
function Title({ mainTitle, subtitle, size }) {
  const sizes = {
    large: {
      mainTitle: "text-8xl",
      subtitle: "text-4xl",
    },
    small: {
      mainTitle: "text-3xl",
      subtitle: "text-sm",
    },
  };

  return (
    <div className={`flex`}>
      <div className="mt-3">
        <h2
          className={`font-[CreamCake] text-chocolate ${sizes[size].mainTitle}`} >
          {mainTitle}
        </h2>
        <h3
          className={`font-Mitr tracking-wide uppercase ms-[20%] text-latte ${sizes[size].subtitle}`} >
          {subtitle}
        </h3>
      </div>
    </div>
  );
}

export default Title;
