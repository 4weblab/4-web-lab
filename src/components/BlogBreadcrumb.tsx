import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BlogBreadcrumbProps {
  currentTitle: string;
}

const BlogBreadcrumb = ({ currentTitle }: BlogBreadcrumbProps) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto mb-6 flex max-w-3xl items-center justify-center"
    >
      <ol className="flex flex-wrap items-center justify-center gap-1.5 text-xs font-medium text-primary-foreground/70 sm:text-sm">
        <li>
          <Link
            to="/"
            className="transition-colors hover:text-primary-foreground"
          >
            Home
          </Link>
        </li>
        <li aria-hidden="true" className="flex items-center text-primary-foreground/40">
          <ChevronRight className="h-3.5 w-3.5" />
        </li>
        <li>
          <Link
            to="/blog"
            className="transition-colors hover:text-primary-foreground"
          >
            Blog
          </Link>
        </li>
        <li aria-hidden="true" className="flex items-center text-primary-foreground/40">
          <ChevronRight className="h-3.5 w-3.5" />
        </li>
        <li
          aria-current="page"
          className="max-w-[18rem] truncate text-primary-foreground/90 sm:max-w-md"
          title={currentTitle}
        >
          {currentTitle}
        </li>
      </ol>
    </nav>
  );
};

export default BlogBreadcrumb;