import { type UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border p-4 rounded-md shadow hover:shadow-md transition">
      <h2 className="text-xl font-semibold mb-1">{name}</h2>
      <p className="text-sm text-gray-600">{email}</p>
      <p className="text-sm text-gray-500 mt-2">
        {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
}
