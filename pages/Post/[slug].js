import React, { Component } from "react";

import Head from "next/head";

import { findDoc } from "../../src/getPostList";
import Intro from "../../components/Intro";
import Container from "../../components/Container";

class PostPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  static async getInitialProps(props) {
    return {
      slug: props.query.slug
    };
  }

  render() {
    const post = findDoc(this.props.slug);

    if (post) {
      return (
        <>
          <Head>
            <title key="title">{post.attributes.title} - Kethlyn Saibert</title>
            <meta name="description" content={post.attributes.description} />
            {/* <meta name="keywords" content={post.attributes.title} /> */}
            {/* <meta name="revisit-after" content="14 day" /> */}
          </Head>
          <Intro
            title={post.attributes.title}
            subTitle={post.attributes.description}
            urlBackground={post.attributes.urlBackground}
          />
          <Container>
            <article dangerouslySetInnerHTML={{ __html: post.html }}></article>
          </Container>
        </>
      );
    } else {
      return <Intro title="Post não encontrado" />;
    }
  }
}

export default PostPage;
