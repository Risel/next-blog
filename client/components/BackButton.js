import styled from "styled-components";
import Image from 'next/image'
import Link from "next/link";

const Back = styled.a`
      background-color: #fff;
      border-radius: 10px;
      width: 117px;
      height: 45px;
      box-shadow: 0 10px 25px rgba(148, 174, 213, 0.15);
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      color: #3260A1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      margin-top: 30px;
      padding: 15px;
      text-decoration: none;
      outline: none;

      :hover {
      background-color: #fbf3f3;
      box-shadow: 0 0 25px rgba(148, 174, 213, 0.5);
    }
`

export default function BackButton() {
  return (
    <Link href='/'>
      <Back>
        <Image
          src='/static/assets/arrow.svg'
          alt="back"
          width={24}
          height={17}
        />
        Назад
      </Back>
    </Link>

  )
}

