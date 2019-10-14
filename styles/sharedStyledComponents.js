import styled, { css } from 'styled-components'
import { fontSizeM, fontWeightS } from '.'
import { colorGrey } from './sharedStyles'

export const FlexContainer = styled.div`
  display: flex;
  position: ${props => props.position || 'relative'};
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'center'};;
  align-items: ${props => props.align || 'center'};
  grid-area: ${props => props.area};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};

  font-size: ${props => props.size || fontSizeM};

  padding-left: ${props => props.paddingLeft || 0}rem;
  padding-right: ${props => props.paddingRight || 0}rem;
  
  margin-top: ${props => props.marginTop || 0}rem;

  padding: ${props => props.padding};

  ${props => props.border && css`
    border: 1px solid black;
  `}
`

export const TextSpan = styled.div`
  font-size: ${props => props.size || fontSizeM};
  font-weight: ${props => props.weight || fontWeightS};
  color: ${props => props.color || colorGrey};
  display: ${props => props.display || 'block'};
  padding-bottom: ${props => props.paddingBottom || 0}rem;
`


