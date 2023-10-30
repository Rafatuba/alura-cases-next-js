import Link from "next/link"

export default function Page404() {
  return (
    <div>
      <h1>Ops! Algo de errado não está certo!</h1>
      <h2>Erro 404</h2>
      <Link href="/">Página Inicial</Link>
    </div>
  )
}