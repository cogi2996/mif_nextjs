import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import Image from "next/image"
import Link from "next/link"
import { domToReact } from 'html-react-parser'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const parseHtmlWithClasses = (domNode) => {
  if (domNode && domNode.name === 'h1') {
    return (
      <h1 {...domNode.attribs} className={`text-3xl ${domNode.attribs.class || ''}`}>
        {domToReact(domNode.children)}
      </h1>
    );
  }

  if (domNode && domNode.name === 'h2') {
    return (
      <h2 {...domNode.attribs} className={`text-2xl ${domNode.attribs.class || ''}`}>
        {domToReact(domNode.children)}
      </h2>
    );
  }

  if (domNode && domNode.name === 'h3') {
    return (
      <h2 {...domNode.attribs} className={`text-xl ${domNode.attribs.class || ''}`}>
        {domToReact(domNode.children)}
      </h2>
    );
  }

  if (domNode && domNode.name === 'blockquote') {
    return (
      <p className="pl-2 border-l-4 border-l-foreground">
        {domToReact(domNode.children)}
      </p>
    );
  }

  if (domNode && domNode.name === 'img') {
    return (
      <>
        <Image
          src={domNode.attribs.src}
          alt="Image"
          width={2000}
          height={1000}
          className="object-contain h-[300px] w-auto mx-auto my-2" />
        {domToReact(domNode.children)}
      </>
    );
  }

  if (domNode && domNode.name === 'a') {
    return (
      <>
        <Link
          href={domNode.attribs.href}>
          {domToReact(domNode.children)}
        </Link>

      </>
    );
  }
  return undefined;
}
