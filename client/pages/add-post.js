import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styled from 'styled-components'
import BackButton from "../components/BackButton";
import {Wrapper} from "../components/Wrapper";

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Form = styled.form`
  background-color: #fff;
  border-radius: 15px;
  padding: 30px;
  max-width: 500px;
  width: 100%;
`
const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`
const Input = styled.input`
  width: 100%;
  display: flex;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  padding: 5px 10px;
`
const TextLabel = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color:#222;
  margin-bottom: 5px;
`
const Textarea = styled.textarea`
  width: 100%;
  display: flex;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  padding: 5px 10px;
  min-height: 150px;
  resize: none;
`
const FormButton = styled.button`
  width: 139px;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #67BFFF;
  color: #fff;
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  border: none;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(148,174,213,0.15);
  cursor: pointer;
  margin: 0 auto;
  margin-top: 15px;
`

export default function AddPost() {
  return (
    <>
      <Head>
        <title>Main</title>
      </Head>
      <Wrapper>
        <Navbar/>
        <div className="container">
          <BackButton/>
          <FormWrapper>
            <Form>
              <InputField>
                <TextLabel>
                  Название статьи:
                  <Input/>
                </TextLabel>
              </InputField>
              <InputField>
                <TextLabel>
                  Текст статьи:
                  <Textarea/>
                </TextLabel>
              </InputField>
              <InputField>
                <TextLabel>
                  URL картинки:
                  <Input/>
                </TextLabel>
              </InputField>
              <FormButton>Добавить </FormButton>
            </Form>
          </FormWrapper>
        </div>
      </Wrapper>
    </>


  )
}