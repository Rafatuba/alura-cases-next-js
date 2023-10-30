// import Head from "next/head"
 import Link from "next/link"
// import { useEffect, useState } from "react"
// import PageTitle from "../src/components/PageTitle"
import FAQScreen from '../src/screens/FAQScreen';

export default FAQScreen;

// export async function getServerSideProps() {
// console.log("Roda a cada acesso que vc recebe")

export async function getStaticProps() {
  console.log("Roda somente em build time")
  const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"

  const faq= await fetch(FAQ_API_URL)
      .then((respostaDoServidor) => {
        return respostaDoServidor.json()
      })
      .then((resposta) => {
       return resposta;
      });
  return {
    props: {
      Rafatuba: "Rafael",
      faq,
    },
  }
}

// export default function Faq({faq}) {
  
//   // const [faq, setFaq] = useState([]);

//   // useEffect(() => {
    
//   // }, [])

//   return (
//     <div>
//         <PageTitle>FAQ - Alura Cases Campanha</PageTitle>
//       <h1>Perguntas Frequentes</h1>
//       <ul>
//         {faq.map(({answer, question}) => (
//           <li key={question}>
//             <article>
//             <h2>
//             {question}
//             </h2>
//             <p>{answer}</p>
//             </article>
//           </li>
//         ))}
//       </ul>
//         <Link href="/">Página Inicial</Link>
//     </div>
//   )
// }