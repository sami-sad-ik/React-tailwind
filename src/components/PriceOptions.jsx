import PriceOption from "./PriceOption";

const PriceOptions = () => {
  const gym = [
    {
      id: 1,
      name: "Basic Membership",
      price: 30.0,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "1 group class per week",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      price: 50,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited group classes",
        "Free personal training session per month",
      ],
    },
    {
      id: 3,
      name: "VIP Membership",
      price: 80,
      features: [
        "24/7 gym access",
        "Access to gym equipment",
        "Locker room access",
        "Unlimited group classes",
        "Monthly fitness assessment",
        "Unlimited personal training sessions",
      ],
    },
    {
      id: 4,
      name: "Day Pass",
      price: 10,
      features: ["Access to gym equipment", "Locker room access"],
    },
  ];

  return (
    <div>
      <h2 className="text-5xl text-center"> Best prices in the town</h2>
      <div className="w-5/6 mx-auto my-10 grid md:grid-cols-3 gap-6 text-center">
        {gym.map((option) => (
          <PriceOption key={option.id} prices={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
