import Link from "next/link";
import ReactMarkdown from "react-markdown";

export const ZaisteReactMarkdown = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown
      components={{
        a: ({ href, ...props }) => {
          if (!href) {
            return <a {...props}></a>;
          }
          return (
            <Link legacyBehavior href={href}>
              <a {...props}></a>
            </Link>
          );
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
};
