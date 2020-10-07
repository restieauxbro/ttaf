import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
import "../styles/styles.scss"
import Window from "../components/window"

const Home = ({ data, location }) => {
  return (
    <Window pageTitle="TTAF">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. In blanditiis
      eaque incidunt placeat neque. Quisquam cumque aliquid amet officia,
      suscipit animi in, quibusdam culpa laborum error ipsa! Cumque repellendus
      accusantium repellat iure necessitatibus, debitis ipsa fugit vel doloribus
      quis reiciendis id expedita voluptates, commodi dolor non quam tempore.
      Facere, consequatur. <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa qui
      sint blanditiis accusantium possimus earum nesciunt! Nisi molestias aut
      voluptas saepe velit aspernatur maiores magni officiis cum doloribus
      aperiam error nulla, facere debitis eius repudiandae fuga, similique ipsum
      molestiae id! Quia voluptas delectus odio aliquid repellendus amet
      temporibus dolorum voluptatum mollitia perferendis magnam, eius natus
      praesentium molestiae aut fugiat autem! Suscipit dicta excepturi
      laudantium nihil impedit deleniti fuga saepe? Voluptates fugiat quos
      similique accusantium blanditiis quidem in ex ipsum, sapiente laborum cum
      numquam obcaecati quo quam officiis dolorum temporibus doloremque dolor,
      illum maxime? In ea alias rem labore quaerat, temporibus nisi quod ex hic
      totam debitis eaque nam itaque voluptas ducimus doloremque repellat
      possimus suscipit modi harum expedita quibusdam sit vel. Eos reprehenderit
      perferendis aspernatur pariatur quia magnam eligendi, rerum unde
      asperiores expedita voluptatum vel eaque totam a, repudiandae deserunt
      magni accusantium quos eius numquam cumque. Esse quis reiciendis ex
      voluptate culpa placeat nesciunt tenetur iure explicabo, assumenda magnam
      error rem cum, quod dolorum vitae totam quidem consectetur vero odit, ut
      sapiente beatae repellat quia? Dolorum in provident obcaecati sit ipsam
      odio incidunt similique vel cumque inventore? Repellendus at autem
      veritatis doloribus debitis placeat tenetur numquam in dolorum quis.
    </Window>
  )
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
