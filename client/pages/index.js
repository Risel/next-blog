import Head from 'next/head'
import Link from 'next/link'

import styled from 'styled-components'
import Navbar from "../components/Navbar";

const Wrapper = styled.div`
  background: #EEF5FF;
  min-height: 100vh;
  width: 100%;
`
const PostsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
`
const Post = styled.a`
  width: 350px;
  height: 270px;
  border-radius: 15px;
  margin-top: 50px;
  position: relative;
  cursor: pointer;
  background:url('${props => props.bgImg}') center - cover no-repeat;
  :hover{
    transform: scale(1.1);
    box-shadow: 0 10px 10px rgba(148,174,218,0.4);
    transition: .3s all ease-in-out;
  }
`
const PostTitle = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  padding: 15px 20px;
  color: #3260A1;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  border-radius: 0 0 15px 15px;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Main</title>
      </Head>
      <Navbar/>
      <Wrapper>
        <div className="container">
          <PostsWrapper>
            <Link href = {'/post/[id]'} as={`/post/testroute`}>
              <Post bgImg = {''}>
                <PostTitle>Было время</PostTitle>
              </Post>
            </Link>
          </PostsWrapper>
        </div>
      </Wrapper>
    </div>
  )
}
