const HeroSection = () => {
  return (
    <>
      <section className="landing-page-spacing py-16 md:py-14 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                <span className="material-symbols-outlined text-sm">
                  verified_user
                </span>
                Escrow Protected Logistics
              </span>
              <h1 className="text-[#0e121b] dark:text-white text-5xl md:text-6xl font-black leading-tight tracking-tight">
                Secure Logistics for Modern Business
              </h1>
              <p className="text-[#4d6599] dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg">
                Ship with confidence using our escrow-protected marketplace.
                Connect with verified riders and ensure your funds are safe
                until delivery is confirmed.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary text-white text-lg font-bold px-8 py-4 rounded-lg hover:bg-blue-700 transition-all shadow-md">
                Send a package
              </button>
              <button className="bg-white dark:bg-gray-800 border border-[#e7ebf3] dark:border-gray-700 text-[#0e121b] dark:text-white text-lg font-bold px-8 py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                Become a Rider
              </button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                <div
                  className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 bg-cover bg-center"
                  data-alt="Avatar of a verified user"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDHa5ul312r393aabqdSawx9N6L42SyObi5KsGrPrv-L9-gR7yjG5Nuot0mWyH5PbqkmfD5c4NWD6PzDQNJRhQnU8rzfTRMZcQ8rUFSk40ocB92IBw_UqacwgymXv_b5F_oB-jlldsJhTswYdjkjLvDIfxdrXF8q0H3virS1qQFQlbIyCw1uJazJjHT4wWNvzS7QArU4pdzkq2wBqXXfDpVxi0JxX3uAoBG2FZKxUcFbT9zyeBoOzj5hQ2j0XIxjnLublAj8beWopI')`,
                  }}
                ></div>
                <div
                  className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 bg-cover bg-center"
                  data-alt="Avatar of a logistics carrier"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDoBPHrJ2mHNMnKPGsUy3Rj8ewFHuYqFBwMpajdKVFELD7f6kXN052HMP6i7tZkddRti9Zgp6OPyZ9TLinqem2YC5LhnhqvpPXJlVPgT8ldUClgnf9dlDDwisaDli2UajcSEB77Bvur1DS48VJKtI1755SHYxEqnOInp0HpL3iFneNyTPs8t9ik7OzScFMmFAtJfXGANbB-NOW7T7p2N4iZavLqryEI_4hixpmCVmLRVLMaXFTfIBFXQdIzHT1_4JqQoP19icNL3Jk')`,
                  }}
                ></div>
                <div
                  className="w-10 h-10 rounded-full border-2 border-white bg-gray-400 bg-cover bg-center"
                  data-alt="Avatar of a professional shipper"
                  style={{
                    backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBKLR4lkRB6nWbPh2ht3s5ABDBlaO2FR-6UGbkvISWBGXhYRoQDhAemgmvwEQG0ly0EjflCbL88h7jmL4K-8Uzeqy8xw9fyeYh8tqEhcTXO_bmqV_5MMF84kVjmBJPbndobk9ILPx6euW1EzTwqoMXR6tF3xAsD5n5VUwnnDhz3H1ZvHorHK82G-dN_zlxMjDceRo-Dvu2NQ95a3lRPv-F-Yn9q9y4V2BYbZWJyveROcX_g6UtepsuDH5tF7_LMuRZb2C1DKY0caYg')`,
                  }}
                ></div>
              </div>
              <p className="text-sm text-[#4d6599] dark:text-gray-400 font-medium">
                Joined by 10,000+ businesses and riders
              </p>
            </div>
          </div>
          <div className="relative">
            <div
              className="w-full aspect-square bg-cover bg-center rounded-2xl shadow-2xl relative z-10"
              data-alt="Modern warehouse logistics and package handling"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZP3Vr3KRRkWxB1c7EhQf4XwXrpC8C6gVoHtZ5hGv5XyrFDL6F1LCqNJQuMHwFRxLivAlIijgBZEVUoO5X2OlfnwNyWMZXnk3Mc1GGIkkpchBhGwFtUgMSqJZWkI_nhhSkiAqL4PNNOBYHyMRlNX7uWYDRhN4eQjt3uPJKChyADW1mOsPp20P8-LThDNynk6W5lEXEQiLRAm7pagwIdz0lnLMnB3cejx5Kxi488Ou01nDEsXu6eIOWIzZ2Gc-hfNnW6hrBwydVvzM")`,
              }}
            ></div>
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/30 rounded-full blur-2xl z-0"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
