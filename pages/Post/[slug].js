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
    return (
      <>
        {post && (
          <>
            <Head>
              <title key="title">{title} - Kethlyn Saibert</title>
            </Head>
            <Intro
              urlBackground="https://picsum.photos/id/409/2000/1000"
              title={post.attributes.title}
              subTitle={post.attributes.description}
            />
            <Container>
              <article
                dangerouslySetInnerHTML={{ __html: post.html }}
              ></article>
            </Container>
          </>
        )}
      </>
    );
  }
}

export default PostPage;
