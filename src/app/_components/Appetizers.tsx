export default function () {
  const data = [
    {
      name: "Brie Crostini Appertizer",
      img: "res.clod",
      price: "$12.99",
      description: "Fluffy pancakes stacked with fruits, cream, syrup, and powdere sugar.",
    },
    {
      name: "Budaatai huurga",
      img: "res.clod",
      price: "15000",
      description: "Uhriin mahtai budaatai huurga",
    },
    {
      name: "Budaatai huurga",
      img: "res.clod",
      price: "15000",
      description: "Uhriin mahtai budaatai huurga",
    },
  ];
  return (
    <div>
      {data.map((hool) => {
        return <h1>{hool.name}</h1>;
      })}
    </div>
  );
}
