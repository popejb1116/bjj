import styled from 'styled-components'

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export const List = styled.div`
  height: 100%;
  min-width: 100px;
  width: 50%;
  margin: 1rem;
  text-align: center;
  flex-grow: 1;
`

export const ListHeader = styled.div`
  color: #ff1744;
  background-color: transparent;
  font-size: 3rem;
  font-weight: bold;
`

export const Card = styled.div`
  .card{
    background-color: rgb(0,0,0, 0.6);
    color: white;
  }

  .card-image{
    position: relative;
    float: left;
    width: 300px;
    height: 300px;
    background-position: 50% 50%;
    background-size: cover;
  }

  img{
    width: 100%;
    height: 100%;
  }
`