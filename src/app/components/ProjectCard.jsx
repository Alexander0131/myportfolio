import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-background border border-border shadow-sm hover:shadow-primary/100 transition-shadow duration-300">
      {/* Project Image with Overlay */}
      <div
        className="h-52 md:h-72 relative group bg-cover bg-center"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <div className="absolute inset-0 bg-background bg-opacity-0 group-hover:bg-opacity-90 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
          {/* GitHub Link */}
          <Link
            href={gitUrl}
            className="h-12 w-12 border-2 rounded-full border-border hover:border-primary flex items-center justify-center transition-colors"
          >
            <CodeBracketIcon className="h-6 w-6 text-textSecondary hover:text-primary transition-colors" />
          </Link>

          {/* Preview Link */}
          <Link
            href={previewUrl}
            className="h-12 w-12 border-2 rounded-full border-border hover:border-primary flex items-center justify-center transition-colors"
          >
            <EyeIcon className="h-6 w-6 text-textSecondary hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>

      {/* Card Content */}
      <div className="py-6 px-4">
        <h5 className="text-lg font-semibold text-textPrimary mb-2">{title}</h5>
        <p className="text-textSecondary text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
