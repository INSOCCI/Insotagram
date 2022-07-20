import React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import SmsIcon from '@mui/icons-material/Sms';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import styled from 'styled-components';

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }
// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

export default function PostCardCenter() {
  const [expanded, setExpanded] = React.useState(false);

  return (

      <Card style={{ margin: "0px auto", marginTop: "50px", padding: "30px", width: "65%" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              Nick
            </Avatar>
          }
          title="Nickname"
          subheader="September 14, 2016"
        />
        <Layout>
          <ImgBox>
          ImgBox
          </ImgBox>
           <TextBox>
            <p>text 들어갈 자리입니다 !</p>
          </TextBox>
        </Layout>
        
        <div style={{width: "100px", height: "50px", marginLeft: "1.5%"}}> 
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="chat">
              <SmsIcon />
            </IconButton>
          </CardActions>
        </div>
      </Card>

  );
}

const Layout = styled.div`
  width: 95%;
  overflow: hidden;
  background-color: #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;
const ImgBox = styled.div`
  width: 90%;
  height: 15rem;
  background: yellow;
`;
const TextBox = styled.div`
  width: 90%;
  overflow: hidden;

`;