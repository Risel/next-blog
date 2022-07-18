import styled from 'styled-components'
import Navbar from "../../components/Navbar";
import Head from 'next/head'
import Image from "next/image";
import BackButton from "../../components/BackButton";
import {Wrapper} from "../../components/Wrapper";

const PostsWrapper = styled.div`
  display: flex;
  background-color: #fefefe;
  border-radius: 15px;
  margin-top: 50px;
  position: relative;
`
const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  justify-content: center;
  padding: 35px;
`
const PostTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  
  color: #3260A1;
  margin-bottom: 25px;
`
const PostText = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: black;
`
const DeletePostButton = styled.a`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 18px;
  color: #fff;
  background: #EB5050;

  box-shadow: 0 10px 25px rgba(148, 174, 213, 0.15);
  border-radius: 10px;
  position: absolute;
  width: 140px;
  height: 30px;
  left: 50%;
  bottom: -15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%);
  cursor: pointer;
`



export default function Post() {
  return(
    <Wrapper>
      <Head>
        <title>NEXT BLOG | POST</title>
      </Head>
      <Navbar/>
      <div className="container">
        <BackButton/>
        <PostsWrapper>
          <PostItem>
            <PostTitle>Hello</PostTitle>
            <PostText>Byebye</PostText>
          </PostItem>
          <PostItem>
            <Image
              src='/static/assets/arrow.svg'
              alt = "image"
              width={540}
              height={316}
            />
          </PostItem>
          <DeletePostButton>Удалить статью</DeletePostButton>
        </PostsWrapper>
      </div>
    </Wrapper>
  )
}