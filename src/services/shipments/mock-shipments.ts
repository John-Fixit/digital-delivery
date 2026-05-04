import type { ShipmentType } from "../../utils/type-config";

export const mockShipments: ShipmentType[] = [
  {
    trackingId: "TRK-8902",
    recipient: {
      name: "John Doe",
      phone: "+234 812 334 56",
    },
    from: "Lagos",
    to: "Abuja",
    rider: {
      name: "Babatunde A.",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCyurd2DfWztAARIYBEcr7zNPStTBHQWh-i_oi2ukEVcwbfttLLogxS8tm8l0PL97dinpDYQX3Uv2w4V-pkfv_V8tMrpkk9rzi5eqrQvRG6zMam3JK8PLyxSgO4c_oCI76h19pXG2f4yZgIngBoBXCtd7JqYhi02El_pRY4T5ZCYyPlRiLqH4bvOcqy-V6ULAby5xCswSU_Ho47iHM3wNrf5_fZgsFpj8An7wn6F2DN15f-yeAKWIo15dI827BaUS1x_Jnv07exwro",
    },
    vehicleType: "bike",
    status: "In Transit",
    payment: "Escrowed",
    itemDescription: "Electronics (MacBook Pro)",
    timeline: [
      {
        title: "Arrived at Sorting Hub",
        description: "Abuja Main Terminal • 10:45 AM",
        completed: true,
        current: false,
      },
      {
        title: "In Transit to Destination",
        description: "Lagos to Abuja • Expected Today",
        completed: false,
        current: true,
      },
      {
        title: "Order Out for Delivery",
        description: "Pending arrival at local hub",
        completed: false,
        current: false,
      },
    ],
    photos: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyCkCIvU8BVlsfkn7srVEKzaICGBjrj9V8Vn89I3aPk4yvpTRAB2vjVcuUZdjHGRt9AIm2E2GbsK_OkpMGIh4_qkSut6HUigqI77tGUT8FgTjHLK1R22PQe-_cWiD3_7sB5S1jr0dgd30B8CkMStkUFludzKTGtteGyN-HgJ4Q6gbnX1AXJBLZDkXTO6WHrqzP9ZRchR34ImVHMFFUTXyx-K1RoiB25_VeWQNVn6ghDqiNRRhQnmrNHS42k_crQ7RgCyUOddHDw0A",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAqntC3I3GnqxUF0SRk-6bXP6jvVtwU_xB7oMobhl4U_yQVdHckzkEcYXGktVfumHLmdAduEcTJzvg29Q7H8BP493iDsGOrBee8P61nBFoHtJy1sSIYC6D8B_5CxYWQE5mJJmsz6l_Y-E3_WlZRQrjTutwVaKxPoy-MRvUq8hfOmnGE-4tUoHC2blFdMPK4jlDPt79Ilyn0fwH_ZUiRKhB2s23NW1tvDmvnIA3MmU53WxdcbrCT4jjNha5OSghXsSItz8pyQuAoJQg",
    ],
    pricing: {
      deliveryFee: 12500,
      insurance: 2500,
      serviceFee: 500,
      total: 15500,
    },
  },
  {
    trackingId: "TRK-7741",
    recipient: {
      name: "Sarah Smith",
      phone: "+234 809 112 34",
    },
    from: "Ikeja",
    to: "Lekki",
    rider: {
      name: "Emma U.",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA8fCUk1hBxmSx1exjgVTVry3mhymFrBOvn3E4mzBaUjnXtNvdiMACuxmBgFf4mXwMka-aLDMlUrxZIvv2cUgL6MtbLoMNMBrMag-7BIJ6_ffu1t-wa9DnSjKnFtaQ3VaQtIQSQaJ72l4RgvfykQAH6ken9an4FfVd99MZAklV_j9GgVmIF7Wa6vFOlcL9RqR46VbDtdaGqvr4oUjYjo-yu8LKq9wCEyZitPuOq0lAM3AzGGoZb1GQOlImZS-XilhRO5ytFPQ5mO60",
    },
    vehicleType: "van",
    status: "Pending",
    payment: "Unpaid",
    itemDescription: "Furniture (Office Chair)",
    timeline: [
      {
        title: "Order Confirmed",
        description: "Ikeja Pickup Point • 2:30 PM",
        completed: true,
        current: false,
      },
      {
        title: "Awaiting Rider Assignment",
        description: "Pending confirmation",
        completed: false,
        current: true,
      },
      {
        title: "Pickup Scheduled",
        description: "Not yet scheduled",
        completed: false,
        current: false,
      },
    ],
    photos: [],
    pricing: {
      deliveryFee: 8000,
      insurance: 1500,
      serviceFee: 300,
      total: 9800,
    },
  },
  {
    trackingId: "TRK-6652",
    recipient: {
      name: "Mike Ross",
      phone: "+234 701 445 11",
    },
    from: "Enugu",
    to: "Kano",
    rider: {
      name: "David K.",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC-dbl-p5w_PBZB9q14GPmgpsLbCgvV4UzxrW_4jwiogM-3Zt500wYn4GtIfn8wywr0hjkSL5SczUo3QFBc_LwfR8eOGzH8A7jIKeWMz1Btj3ihUVar8PrbYHZPhIAPnJc9YqKnQJ-70nU_ZvNlq3RChk0NHF4SxhgdW_s59FHXSzuzF3_oZyNeV4elFfaumG0zdIQrqFATrknGP0dVLiuzqmx7WtDAwzWDu20Iqbc0x5Gb3D2ubaemiDTNXLMOMhaWRMv9jvbFRH0",
    },
    vehicleType: "truck",
    status: "Delivered",
    payment: "Released",
    itemDescription: "Building Materials",
    timeline: [
      {
        title: "Package Delivered",
        description: "Kano Destination • 11:20 AM",
        completed: true,
        current: false,
      },
      {
        title: "In Transit",
        description: "Enugu to Kano • Yesterday",
        completed: true,
        current: false,
      },
      {
        title: "Order Picked Up",
        description: "Enugu Warehouse • 2 days ago",
        completed: true,
        current: false,
      },
    ],
    photos: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyCkCIvU8BVlsfkn7srVEKzaICGBjrj9V8Vn89I3aPk4yvpTRAB2vjVcuUZdjHGRt9AIm2E2GbsK_OkpMGIh4_qkSut6HUigqI77tGUT8FgTjHLK1R22PQe-_cWiD3_7sB5S1jr0dgd30B8CkMStkUFludzKTGtteGyN-HgJ4Q6gbnX1AXJBLZDkXTO6WHrqzP9ZRchR34ImVHMFFUTXyx-K1RoiB25_VeWQNVn6ghDqiNRRhQnmrNHS42k_crQ7RgCyUOddHDw0A",
    ],
    pricing: {
      deliveryFee: 25000,
      insurance: 5000,
      serviceFee: 1000,
      total: 31000,
    },
  },
];
