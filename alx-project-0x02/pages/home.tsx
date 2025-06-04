// pages/home.tsx

import Card from "@/components/common/Card";

const DUMMY_CONT = [
  {
    title: "Welcome",
    content: "This is a reusable card component in Next.js.",
  },
  {
    title: "Hi",
    content: "This is a reusable card component in Next.js two.",
  },
  {
    title: "Yes",
    content: "This is a reusable card component in Next.js three.",
  },
];

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {DUMMY_CONT.map((item, index) => (
        <Card key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
}
