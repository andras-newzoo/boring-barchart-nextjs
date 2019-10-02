import styled from 'styled-components'
// import media from '../../styles/MediaQueries'

export const HeaderContainer = styled.div`
    width: 90%;
    margin: 0 5%;
    height: 8rem;
    position: fixed;

    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
`

export const HeaderElement = styled.div`
    height: 100%;
    
    ${'' /* ${media.medium`
        padding-right: ${props => props.paddingRight * .75 || 0}px;
    `}

    ${media.smallest`
    padding-right: ${props => props.paddingRight * .5 || 0}px;
    `} */}

    padding-right: ${props => props.paddingRight || 0}px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #fff;

    .icon {

        height: 20px;
        width: 20px;
        fill: #000;
        cursor: pointer;
        transition: all .3s;

        &:hover{
            transform: scale(1.2);
        }
    }
`