const React = require("react")
const Layout = require("./src/components/Layout").default

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

exports.wrapPageElement = ({ element }) => <Layout>{element}</Layout>
