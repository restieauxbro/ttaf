import React from "react"
import {motion} from 'framer-motion'

const Window = ({ children, pageTitle }) => {
  return (
    <motion.div initial={{opacity: 0, x: "-30px"}} animate={{opacity: 1, x: 0, transition: {ease: "easeOut"}}} className="window">
      <div className="margin">
        <div className="content-container">
          <div className="content">
            <div className="children">
              <div className="hero">
                <h1>{pageTitle}</h1>
              </div>
              {children}
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa quidem sit, animi accusantium nam iusto tenetur eos vel qui dolore voluptas tempore ullam reiciendis autem at earum veniam aperiam similique nostrum eius exercitationem maiores corrupti laudantium temporibus. Modi ullam, possimus, nam officia repellat alias excepturi facere odit nesciunt ex aut?<br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sit molestias cumque hic, rem nesciunt repellat asperiores unde! Eum laboriosam sequi asperiores est, tempore distinctio! Libero eos quia ipsum necessitatibus, quasi nemo eligendi, voluptatibus totam nisi unde officiis, perferendis aliquid dolor vero id? Inventore nostrum quam fugit, nisi maxime voluptatem possimus impedit necessitatibus minima enim iusto obcaecati molestias veniam vero eaque. Iure quo nulla autem nihil eligendi sint a natus consequatur porro neque voluptatibus quia accusantium tempora ab dolorem, magnam voluptates libero consectetur ducimus? Recusandae tenetur officia voluptates omnis amet veniam culpa tempore unde nisi nobis, blanditiis nam neque? Sed fuga aspernatur tenetur excepturi, alias molestias quos dolor quis ad reprehenderit facere odit blanditiis voluptas voluptates obcaecati ea quia! Corrupti sit iusto mollitia tenetur deserunt perspiciatis quam odio repellendus. Cumque, incidunt necessitatibus facilis dolores laudantium fugit maxime! Adipisci porro provident id numquam aliquid voluptatem quam fugit nulla voluptate, voluptates dolore, quo ipsam quaerat pariatur ut voluptas, quos laborum. Sunt recusandae a, totam laborum ratione ipsam id! Eaque provident, nemo omnis, cupiditate nobis nulla harum tenetur voluptatum dolore quia dolorum iure eveniet sed vitae cumque minus explicabo! Corporis, ipsam distinctio aut rem suscipit, sint vero obcaecati possimus excepturi ex, aperiam voluptatum.br <br/><br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sit pariatur tenetur alias ratione, dolorem velit exercitationem deleniti atque delectus doloremque amet corrupti labore sapiente nemo voluptas eveniet vero perspiciatis officiis nisi quisquam, ipsum aspernatur. Enim molestias assumenda consequatur tempore culpa! Quo reiciendis vel qui vitae quae illo dolor fugiat nobis velit corrupti id labore placeat eius, maxime architecto saepe ullam corporis? Dolore quam expedita saepe molestiae doloribus enim corrupti?
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Window
