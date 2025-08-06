import Link from "next/link";

type Props = {
  title: string;
  description: string;
  href: string;
  imageUrl?: "";
};

const ProjectCard = ({ imageUrl, title, description, href }: Props) => {
  return (
    <Link href={href}>
      <div className="border rounded-xl p-6 shadow hover:shadow-md transition bg-white">
        <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
