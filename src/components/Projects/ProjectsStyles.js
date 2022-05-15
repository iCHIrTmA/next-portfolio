import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
};
`

export const BlogCard = styled.a`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.1);
    cursor: pointer;
  };
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  };
`

export const TitleContent = styled.div`
  margin: 25px 0px 0px 0px;
  text-align: center;
  z-index: 20;
  width: 100%;
  font-weight: bold;
  color: white;
`


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #de32e1;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`


export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`


export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 15px;
  };
`


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`

export const ExternalLinks = styled.a`
color: #de32e1;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: black;
border-radius: 15px;
transition: 0.5s;
&:hover {
  background-color: #dadfe8;
  transform: scale(1.3);
  cursor: pointer;
  color: black;
};
`

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: white;
font-size: 1.5rem;
`