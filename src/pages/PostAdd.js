// 리액트 소환
import React from 'react';

// 스타일 관련 연결
import '../App.css';
import styled from 'styled-components';

// 컴포넌트 자식들....ㅂㄷㅂㄷ 연결
import Header from '../components/Header';


// 파이어베이스 관련
// import {storage} from "../shared/firebase";
// import {ref, uploadBytes, getDownloadURL} from "firebase/storage";



const PostAdd = () => {

    // 레이아웃 선택 - 이미지 미리보기 설정
    const temp_img = ""
    
    const [ image, SetImage ] = React.useState(temp_img);
    const img_ref = React.useRef(null);

    const saveImage = (event) => {
        SetImage(URL.createObjectURL(event.target.files[0]));
    }
    // console.log(image);


    // 레이아웃 선택 -  input CheckBox 함수
    const checkOnlyOne = (checkThis) => {
        const checkboxes = document.getElementsByName('test')
            for (let i = 0; i < checkboxes.length; i++) {
                if (checkboxes[i] !== checkThis) {
                    checkboxes[i].checked = false
                    console.log(checkThis.value)
                }
        }
    }

    //작성한 데이터를 스토리지에 저장하기
    // const uploadFB = async (e) => {
        
    //     //img url
    //     console.log(e.target.files);
    //     const uploded_file = await uploadBytes(ref(storage, `images/${e.target.files[0].name}`),
    //     e.target.files[0]
    //     );

    //     console.log(uploded_file);


    //     const file_url = await getDownloadURL(uploded_file.ref);
    //     console.log(file_url,"나야나url!!!!!!!!!");
        
    //     //ref에 이미지 링크 저장해서 파이어베이스로 보내기
    //     // const file_link_ref = React.useRef(null);

    //     // file_link_ref.current = { url: file_url };

        

    // };


  return (
    <div>
        <Header />

        <Title>게시글 작성</Title>
        <Section>
            {/* 이미지 업로드 */}
            <SubTitle>사진 등록</SubTitle>
            <UplodImage>
                <input type="file" ref={img_ref} onChange={saveImage} />
            </UplodImage>

            {/* 레이아웃 선택 및 미리보기 */}
            <SubTitle>레이아웃 선택</SubTitle>
                <Layouts>
                    <Layout> {/* 왼쪽 정렬 */}
                        <input type="checkbox" name="test" value="1" onChange={(e) => checkOnlyOne(e.target)} />
                        <LeftImgBox> 
                            <img src={image} style={{width: "100%", height: "100%", overflow: "hidden", margin: "10% auto"}} />
                        </LeftImgBox>

                        <LeftTextBox> 
                            <p>이미지 좌측 정렬</p>
                         
                        </LeftTextBox>
                          
                    </Layout>

                    <Layout> {/* 중간 정렬 */}
                        <input type="checkbox" name="test" value="2" onChange={(e) => checkOnlyOne(e.target)} />
                        <CenterImgBox> 
                            <img src={image} style={{width: "100%",height: "100%", overflow: "hidden", margin: "10% auto"}}/>
                        </CenterImgBox>
                       <CenterTextBox>
                           
                            <p>이미지 가운데 정렬</p>
                             
                        </CenterTextBox>
                    </Layout>

                    <Layout> {/* 오른쪽 정렬 */}
                        <input type="checkbox" name="test" value="3" onChange={(e) => checkOnlyOne(e.target)}  />
                        <RightImgBox>
                            <img src={image} style={{width: "100%",height: "100%", overflow: "hidden", margin: "10% auto"}}/>
                        </RightImgBox>
                        <RightTextBox>
                            
                            <p style={{}}>이미지 우측 정렬</p>
                            
                        </RightTextBox>
                    </Layout>
                </Layouts>
                
                {/* 글 내용 입력 창 */}
            <SubTitle>글 내용</SubTitle>
                <TextInputBox>
                   <textarea style={{width:"100%",height:"20rem", padding:"3%", fontSize:"1.2em", lineHeight:"2em"}} type={'text'} placeholder={'글을 입력해주세요.'} />
                </TextInputBox>

            {/* 작성 버튼 */}
            <SubmitBtn type="submit">등록</SubmitBtn>
        </Section>
    </div>
  )
}



// 이하 Styled Componenets 적용


const Section = styled.div`
    width: 70%;
    height: 80rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;

// 제목 관련
const Title = styled.h2`
    color: #333;
    margin-top: 8rem;
    text-align: center;
`;
const SubTitle = styled.h3`
    margin-top: 5rem;
`;

// 사진 파일 업로드 box
const UplodImage = styled.div`
    width: 80%;
    height: 3rem;
    border: #000 solid 2px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// 레이아웃 미리보기
const Layouts = styled.div`
    width: 80%;
    overflow: hidden;
`;
const Layout = styled.div`
    width: 30%;
    height: 100%;
    overflow:hidden;
    border: 1px solid #eee;
    box-sizing: border-box;
    float: left;
    margin-left: 2.5%;
    padding: 2%;
`;

//left_layout
const LeftImgBox = styled.div`
    width: 35%;
    overflow: hidden;
    float: left;
    margin-top: 25%;
`;
const LeftTextBox = styled.div`
    float: right;
    margin-top: 25%;
`;

//ceter_layout
const CenterImgBox = styled.div`
    width: 40%;
    overflow: hidden;
    margin: 0 auto;

`;
const CenterTextBox = styled.div`
    text-align: center;
`;

//right_layout
const RightImgBox = styled.div`
  width: 35%;
    overflow: hidden;
    float: right;
    margin-top: 25%;
`;
const RightTextBox = styled.div`
    float: left;
    margin-top: 25%;
`;

// 글 내용 입력창
const TextInputBox = styled.form`
    width: 80%;
    height: 20rem;
    border: 1px solid #000;
`;
// 등록 버튼
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