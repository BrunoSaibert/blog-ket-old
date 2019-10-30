import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import { format } from "date-fns";

import content from "../content/home.md";

import { getPosts, getTotalPost } from "../src/getPostList";

import Intro from "../components/Intro";
import Container from "../components/Container";
import { PostList, PostItem } from "../components/PostList/styles";
import { ButtonGroup, Button } from "../components/Button/styles";

export default class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      page_size: 5
    };
  }

  handlePaginate = p => {
    const page = this.state.page + p;
    this.setState({ page });
  };

  render() {
    const { page, page_size } = this.state;

    const postList = getPosts(page, page_size);
    const totalPost = getTotalPost();

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
                  em {format(new Date(post.attributes.date), "dd/MM/yyyy")}
                </p>
              </PostItem>
            ))}
          </PostList>

          <ButtonGroup>
            {page > 1 && (
              <Button type="button" onClick={() => this.handlePaginate(-1)}>
                mais recentes
              </Button>
            )}
            {totalPost > page * page_size && (
              <Button type="button" onClick={() => this.handlePaginate(1)}>
                mais antigas
              </Button>
            )}
          </ButtonGroup>
        </Container>
      </>
    );
  }
}
