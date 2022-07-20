
import React from 'react';

import styled from 'styled-components';

import Header from '../components/Header';


const PostAdd = () => {
  return (
    <div>
        <Header />
        <Title>게시글 작성</Title>
        <Section>
            <SubTitle>사진 등록</SubTitle>
            <UplodImage>
                <input type="file" />
            </UplodImage>
            <SubTitle>레이아웃 선택</SubTitle>
                <Layouts>
                    <Layout>
                
                    </Layout>

                    <Layout>

                    </Layout>

                    <Layout>

                    </Layout>
                </Layouts>
            <SubTitle>글 내용</SubTitle>
                <TextInputBox>
                    <input style={{width:"100%",height:"20rem"}} type={'text'}></input>
                    <SubmitBtn  type="submit">등록</SubmitBtn>
                </TextInputBox>
        </Section>
    </div>
  )
}

const Section = styled.div`
    width: 70%;
    height: 80rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;
const Title = styled.h2`
    color: #333;
    margin-top: 8rem;
    text-align: center;
`;
const UplodImage = styled.div`
    width: 80%;
    height: 3rem;
    border: #000 solid 2px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const SubTitle = styled.h3`
    margin-top: 5rem;
`;
const Layouts = styled.div`
    width: 80%;
    height: 10rem;

   
`;
const Layout = styled.div`
    width: 30%;
    height: 100%;
    background-color:#eee;
    float: left;
    margin-left: 2.5%;
`;
const TextInputBox = styled.form`
    width: 80%;
    height: 20rem;
    border: 1px solid #000;
`;
const SubmitBtn = styled.button`
    width: 6rem;
    height: 2rem;
    float: right;
    margin: 1rem;
    background-color: transparent;
    border: 2px solid red;
    border-radius: 5px;
    font-size: 0.9rem;
    font-weight: 600;
    text-align: center;
`;

export default PostAdd;