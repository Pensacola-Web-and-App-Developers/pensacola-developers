// import React from "react"
// import { graphql } from "gatsby"

// import Layout from "../components/layout"
// import SEO from "../components/seo"

// export default ({ data }) => {
//   const post = data.markdownRemark

//   // let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

//   return (
//     <Layout>
//       <SEO title={post.frontmatter.title} />
//       <article className="flex flex-col justify-center lg:max-w-2xl mx-auto px-4 py-16">

//         <div className="border-2 border-pink-vivid-500 max-w-md p-8 rounded">
//           <h1 className="font-bold text-2xl sm:text-4xl">
//             {post.frontmatter.title}
//           </h1>
//           <div className="flex font-semibold mt-4">
//             <div className="mr-4">
//               <div className="text-cool-grey-400 text-xs">Author</div>
//               <div className="text-sm">{post.frontmatter.author}</div>
//             </div>
//             <div>
//               <div className="text-cool-grey-400 text-xs">Published</div>
//               <div className="text-sm">{post.frontmatter.date}</div>
//             </div>
//           </div>
//         </div>
//         {/* <Img fluid={featuredImgFluid} /> */}
//         <div
//           className="markdown mt-16"
//           dangerouslySetInnerHTML={{ __html: post.html }}
//         />
//       </article>
//     </Layout>
//   )
// }

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//       }
//     }
//   }
// `
