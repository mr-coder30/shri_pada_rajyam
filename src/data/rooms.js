export const PROPERTY = {
  name: "Shri Pada Rajyam Homestays",
  address: "ADD THE CONFIRMED PROPERTY ADDRESS",
  locationLabel: "Property location",
  mapsUrl: "https://www.google.com/maps/place/17%C2%B006'47.2%22N+82%C2%B015'08.1%22E/@17.1131061,82.2496684,775m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d17.1131061!4d82.2522433?hl=en&entry=ttu&g_ep=EgoyMDI2MTEwMS4wIKXMDSoASAFQAw%3D%3D",
  phone: "9182279226",
  phoneLabel: "Call for room enquiries",
};

export const WHATSAPP_NUMBER = "919182279226";

export const rooms = [
  {
    id: "single-stay",
    number: "01",
    name: "Single Stay",
    category: "Single Stay",
    label: "PRIVATE COMFORT",
    tone: "mint",
    icon: "snowflake",
    capacity: "1–2 guests",
    short:
      "Private accommodation for individuals or couples, with AC and Non-AC options.",
    options: ["AC", "Non-AC"],
    image: "/images/singlestay.png",
    alt: "Bedroom for a single stay",
    message:
      "Hello Shri Pada Rajyam Homestays, I would like to enquire about Single Stay for 1–2 guests. Please share AC and Non-AC prices and availability.",
  },
  {
    id: "group-stay",
    number: "02",
    name: "Group Stay",
    category: "Group Stay",
    label: "STAY TOGETHER",
    tone: "citron",
    icon: "users",
    capacity: "4–5 guests",
    short:
      "A group accommodation option for families and friends, with AC and Non-AC options.",
    options: ["AC", "Non-AC"],
    image: "/images/groupstay.png",
    alt: "Shared accommodation for a small group",
    message:
      "Hello Shri Pada Rajyam Homestays, I would like to enquire about Group Stay for 4–5 guests. Please share AC and Non-AC prices and availability.",
  },
  {
    id: "large-group-stay",
    number: "03",
    name: "Large Group Stay",
    category: "Large Group Stay",
    label: "LARGE GROUP ACCOMMODATION",
    tone: "mint",
    icon: "users",
    capacity: "Up to 30 guests",
    short:
      "Accommodation for larger groups, with room arrangements based on group size and availability.",
    options: [],
    image: "/images/largegroupstay.png",
    alt: "Accommodation for a large group",
    message:
      "Hello Shri Pada Rajyam Homestays, I would like to enquire about Large Group Stay for up to 30 guests. Please share the available arrangements, prices and availability.",
  },
].map((room) => ({
  ...room,
}));

// SAMPLE REVIEWS — replace these with genuine guest reviews before publishing.
export const reviews = [
  {
    id: "sample-1",
    name: "Sample guest",
    visit: "Placeholder review",
    rating: 5,
    text: "A comfortable stay with clean rooms and helpful service.",
  },
  {
    id: "sample-2",
    name: "Sample guest",
    visit: "Placeholder review",
    rating: 5,
    text: "A peaceful place to stay with family.",
  },
  {
    id: "sample-3",
    name: "Sample guest",
    visit: "Placeholder review",
    rating: 4,
    text: "Good rooms and a convenient location.",
  },
];