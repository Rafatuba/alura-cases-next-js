// trailingSlash: barra no final do endereço ou não
module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/perguntas', //quando digitar o endereço(localhost:3000/perguntas) vai pro /faq/
        destination: '/faq/',
        permanent: true,
      },
    ]
  }
}





// https://nextjs.org/docs/pages/api-reference/next-config-js/trailingSlash
// https://nextjs.org/docs/pages/api-reference/next-config-js/redirects