import NextLink from "next/link";

export default function Link({children, href, ...props}) {
  return (
    <NextLink href={href} passHref>
      <a {...props}>{children}</a>
    </NextLink>
  )
}

// Desse jeito acima está defasado
// Agora pode passar direto: <Link href="/faq">Perguntas Frequentes</Link>