import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="bg-yellow-500 text-black px-4 py-1 rounded-full font-semibold">
            Premium Fast Food
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-6 leading-tight">
            Welcome to{" "}
            <span className="text-yellow-400">WowEats</span>
          </h1>

          <p className="text-gray-300 mt-6 text-lg leading-8">
            Experience the royal taste of juicy burgers, cheesy pizzas,
            crispy fried chicken, crunchy fries and refreshing drinks.
            Every bite is prepared with premium ingredients and lots of love.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition">
              Order Now
            </button>

            <button className="border border-yellow-500 text-yellow-400 px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-black transition">
              View Menu
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700"
            alt="Burger"
            width={400}
            height={400}
            className="rounded-2xl object-cover h-72"
          />

          <Image
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700"
            alt="Pizza"
            width={400}
            height={400}
            className="rounded-2xl object-cover h-72 mt-10"
          />
        </div>
      </section>

      {/* About */}
      <section className="bg-zinc-900 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-yellow-400">
            Why Choose WowEats?
          </h2>

          <p className="mt-6 text-gray-300 max-w-3xl mx-auto leading-8">
            At WowEats, we serve fresh, delicious, and premium-quality fast
            food. From mouth-watering burgers to cheesy pizzas and crispy
            fried chicken, every meal is crafted to satisfy your cravings.
          </p>
        </div>
      </section>

      {/* Menu */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-12">
          Popular Menu
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Royal Burger",
              img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700",
            },
            {
              name: "Cheesy Pizza",
              img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700",
            },
            {
              name: "Crispy Fries",
              img: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=700",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-bold text-yellow-400">
                  {item.name}
                </h3>

                <p className="text-gray-300 mt-3">
                  Freshly prepared with premium ingredients and unforgettable
                  taste.
                </p>

                <button className="mt-5 bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-yellow-500 text-black py-16">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Hungry? Your Favorite Meal Awaits!
          </h2>

          <p className="mt-4 text-lg">
            Enjoy delicious burgers, pizzas, fries, fried chicken and refreshing
            drinks at WowEats. Order now and taste the difference.
          </p>

          <button className="mt-8 bg-black text-yellow-400 px-8 py-3 rounded-lg font-bold hover:bg-zinc-900">
            Explore Menu
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-zinc-800 py-8">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <h3 className="text-2xl font-bold text-yellow-400">WowEats</h3>
          <p className="mt-3">
            Serving Happiness One Bite at a Time.
          </p>
          <p className="mt-5 text-sm">
            © 2026 WowEats. All Rights Reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}