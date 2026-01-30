const DeliveryOptions = () => {
  return (
    <>
      <section
        className="w-full py-24 bg-gray-200 dark:bg-background-dark"
        id="services"
      >
        <div className="landing-page-spacing">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-default-900 mb-4">
              Flexible Delivery Options
            </h2>
            <p className="text-default-500 text-lg max-w-2xl">
              Tailored logistics solutions for every scale of shipment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="h-64 rounded-3xl overflow-hidden mb-6">
                <img
                  alt="Intra-state"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAKvLs85DAiCPIoXqbfVPAHjlUvKMyYtsQthuqovetb-Mk18duduagNdkqCHvu05uyvAe2TJ6VUDe2wgOGNZ-o9uyJh8RZlsMybxDwgMQv8Oc6iwaYn0PYuv10AME0-Wu2qA2zxkMWSA2w7Psz7QYFkI2z--pOZHS0UXXAj5UYdXDIb10kHq4tVzaN4rcfwitDxQpcGAchFFyLiUJzMoDyIjLPUTpI1OvQK1qax2OTNH342k_zCY80vknQ-Qf32m5M9JqwDKWv5SQ"
                />
              </div>
              <h4 className="text-2xl font-bold mb-2">Intra-state Express</h4>
              <p className="text-gray-500">
                Quick delivery within your city or state. Average 4-hour
                turnaround.
              </p>
            </div>
            <div className="group cursor-pointer">
              <div className="h-64 rounded-3xl overflow-hidden mb-6">
                <img
                  alt="Park to park"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuALhE7hNrgvPSFjMXU534bRI5iMGWZwgyU-vFPH-Hgtby1vOGWfE8QDyYzF9hWWP-Q5ahTXLRzUG4pgEik1Cm0tg6BpMMcS25hrnH3q_dfY74G8FxSDyMn3GHgjl3dfRwK1FdCnJgN5yCsqRq9WU6EyEWFiF2r1YcHEKP-RXVoURYqSFWM03aPd1acxPhdfSdIYavcqXhRbWQ0LZc6OPajXlmVhp22cjBa0oAAXNFuTReHwtV5VkquJv8oeYKa7yZqI-5F6cPYo45s"
                />
              </div>
              <h4 className="text-2xl font-bold mb-2">Park-to-Park</h4>
              <p className="text-gray-500">
                The most economical way for interstate cargo. Send from hub to
                hub.
              </p>
            </div>
            <div className="group cursor-pointer">
              <div className="h-64 rounded-3xl overflow-hidden mb-6">
                <img
                  alt="Door to door"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWP8tbX8gruKOO9bnyUlMeTFRa5melPD7E3m--Q8x-0c6oH9RClNoS24KuBMs-Hk-6Lb6NTVv29E7xOCA20kWIzurtJZ9WI50youVNtbU2ruq0Avf1FiIl8ZRaUjGPzXr134ecc0tRAZKefpMnSiY8RqZe5WtNgVsoQSXGYIpCaUOXh1ffzfbH9kVueawjDl4CdOmFV9wryBDVsZKn0tGN42mC7wm9A1bJxKmNUU89r01mGKm5j54YdgvkLV4eby-jz_Jkr04UsME"
                />
              </div>
              <h4 className="text-2xl font-bold mb-2">Door-to-Door Courier</h4>
              <p className="text-gray-500">
                Premium service picking up from your doorstep and delivering
                directly to theirs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DeliveryOptions;
