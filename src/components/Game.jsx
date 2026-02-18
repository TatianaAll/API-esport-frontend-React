function Game({ name, image, size }) {
  const sizes = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "W-64 h-64"
  };
  return (
    <div className="flex flex-col">
      <div className={`object-cover ${sizes[size]} rounded-2xl overflow-hidden`}>
        <img src={image} alt={name} />
      </div>
      <p className="text-center font-Mitr text-latte">{name}</p>
    </div>
  );
}

export default Game;
