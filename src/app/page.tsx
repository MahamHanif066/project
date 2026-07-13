export default function Home() {
  const menu = [
    {
      icon: "🍔",
      name: "Royal Burger",
      desc: "Juicy grilled burger with premium cheese and fresh vegetables.",
    },
    {
      icon: "🍕",
      name: "Cheesy Pizza",
      desc: "Loaded with mozzarella cheese and delicious toppings.",
    },
    {
      icon: "🍟",
      name: "Crispy Fries",
      desc: "Golden crispy fries served with our special sauces.",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-black text-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.15),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.2),transparent_40%)]"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <span className="bg-amber-400 text-black px-5 py-2 rounded-full font-semibold">
            👑 Premium Fast Food
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold mt-8 leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              WowEats
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-8">
            Taste the perfect combination of juicy burgers, cheesy pizzas,
            crispy fries and refreshing drinks. Every meal is prepared with
            premium ingredients to deliver a truly royal dining experience.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <button className="px-8 py-3 rounded-xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-xl hover:scale-105 transition">
              🍔 Order Now
            </button>

            <button className="px-8 py-3 rounded-xl border border-amber-400 text-amber-300 hover:bg-amber-400 hover:text-black transition">
              View Menu
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
          Why Choose WowEats?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-slate-900/80 backdrop-blur-md border border-amber-400/30 rounded-2xl p-6 shadow-xl hover:-translate-y-2 transition">
            <h3 className="text-2xl font-bold text-amber-400">
              🥩 Fresh Ingredients
            </h3>
            <p className="text-gray-300 mt-4">
              Every meal is prepared using fresh ingredients to ensure the best
              quality and unforgettable taste.
            </p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-md border border-amber-400/30 rounded-2xl p-6 shadow-xl hover:-translate-y-2 transition">
            <h3 className="text-2xl font-bold text-amber-400">
              👨‍🍳 Expert Chefs
            </h3>
            <p className="text-gray-300 mt-4">
              Our skilled chefs prepare every burger, pizza and fries with care
              to satisfy your cravings.
            </p>
          </div>

          <div className="bg-slate-900/80 backdrop-blur-md border border-amber-400/30 rounded-2xl p-6 shadow-xl hover:-translate-y-2 transition">
            <h3 className="text-2xl font-bold text-amber-400">
              🚀 Fast Delivery
            </h3>
            <p className="text-gray-300 mt-4">
              Hot, fresh and delicious food delivered quickly right to your
              doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Menu */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
          Our Popular Menu
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {menu.map((item) => (
            <div
              key={item.name}
              className="bg-slate-900/80 border border-amber-400/30 rounded-2xl p-8 text-center shadow-xl hover:scale-105 transition"
            >
              <div className="text-6xl">{item.icon}</div>

              <h3 className="text-2xl font-bold text-amber-400 mt-5">
                {item.name}
              </h3>

              <p className="text-gray-300 mt-4">{item.desc}</p>

              <button className="mt-6 bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-2 rounded-lg font-bold hover:scale-105 transition">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offer */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-black text-center p-10 shadow-2xl">
          <h2 className="text-4xl font-bold">
            🔥 Special Combo Offer
          </h2>

          <p className="mt-4 text-lg">
            Buy 1 Royal Burger and get Crispy Fries with a Cold Drink at a
            special discount. Limited Time Only!
          </p>

          <button className="mt-6 bg-black text-amber-400 px-8 py-3 rounded-xl font-bold hover:bg-slate-900 transition">
            Grab the Deal
          </button>
        </div>
      </section>

      {/* Food Facts */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
          Why Our Food?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-slate-900 p-6 rounded-2xl border border-amber-400/30">
            <h3 className="text-xl font-bold text-amber-400">
              🍔 Premium Burgers
            </h3>
            <p className="mt-3 text-gray-300">
              Soft buns, juicy patties and fresh vegetables create the perfect
              burger experience.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-amber-400/30">
            <h3 className="text-xl font-bold text-amber-400">
              🍕 Cheesy Pizzas
            </h3>
            <p className="mt-3 text-gray-300">
              Loaded with rich mozzarella cheese and delicious toppings for
              every pizza lover.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-amber-400/30">
            <h3 className="text-xl font-bold text-amber-400">
              🍟 Crispy Fries
            </h3>
            <p className="mt-3 text-gray-300">
              Freshly fried golden fries served with tasty sauces that make
              every bite unforgettable.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-amber-500/30 py-8 mt-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
            WowEats
          </h2>

          <p className="text-gray-400 mt-3">
            Serving Happiness One Bite at a Time 🍔
          </p>

          <p className="text-gray-500 text-sm mt-2">
            © 2026 WowEats. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}