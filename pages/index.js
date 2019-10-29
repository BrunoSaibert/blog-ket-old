import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";

import content from "../content/home.md";

import { getPosts } from "../src/getPostList";

import Intro from "../components/Intro";
import Container from "../components/Container";
import { PostList, PostItem } from "../components/PostList/styles";

export default class Index extends Component {
  render() {
    const postList = getPosts();

    let {
      attributes: { title, subTitle, urlBackground }
    } = content;

    return (
      <>
        <Head>
          <title key="title">{title} - Kethlyn Saibert</title>
        </Head>

        <Intro
          title={title}
          subTitle={subTitle}
          urlBackground={urlBackground}
        />
        <Container>
          <PostList>
            {postList.map((post, index) => (
              <PostItem key={index}>
                <Link href="/Post/[slug]" as={`/Post/${post.attributes.slug}`}>
                  <a>
                    <h2>{post.attributes.title}</h2>
                    <h3>{post.attributes.description}</h3>
                  </a>
                </Link>
                <p>
                  Escrito por{" "}
                  <Link href="/Sobre">
                    <a>Kethlyn Saibert</a>
                  </Link>{" "}
                  em {post.attributes.date}
                </p>
              </PostItem>
            ))}
          </PostList>
        </Container>
      </>
    );
  }
}
